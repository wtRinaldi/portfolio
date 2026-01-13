---
date: '1.09.2026'
description: 'Creating floating, grouped, stacked bar charts with PlotlyJS using repeated labels and custom stacking logic'
type: 'code'
img: '/plotly.png'
---

::ContentH1
Floating, Grouped, Stacked Bar Charts in PlotlyJS
::

::SubTitle
How to create non-standard stacked grouped floating bar charts in PlotlyJS with repeated labels and custom logic
::

::Paragraph
PlotlyJS doesn’t natively support stacked grouped floating bar charts. The visualization I needed required:
::

::Indent
- Grouped bars (e.g., “My Data” vs comparison data)
- Stacked segments within each bar
- Floating bars (bars that don’t start at zero)
- Percentile-driven segments (min, 25th, median, 75th, max)
- Correct handling of negative values
- A visually fixed median line
::

::ContentH2
Component Inputs: Props
::

::Paragraph
The component receives three main inputs:
::Indent
- `plotData`: Array of objects containing percentile values, metadata, and a `myData` flag
- `labelKey`: Field used to generate X-axis labels
- `isLightMode`: Boolean controlling light/dark mode
::
These inputs make the component reusable across different datasets
::

::ContentH2
Generating X-axis Labels and Repeating Them
::

::Paragraph
Each bar is aligned using its X-axis label. To render multiple stacked segments per bar, the same label is repeated once for each segment in the stack. Each bar has six segments (transparent base, lower 75%, lower 25%, median placeholder, upper 25%, upper 75%), so each label is repeated six times
::

::CodeBlock
```ts
const uniqueSetOfXAxisLabels = computed(() =>
  new Set(plotData.value.map(obj => t(String(obj[labelKey.value]).toLowerCase())))
);

const xAxisLabels = computed(() =>
  Array.from(uniqueSetOfXAxisLabels.value).flatMap(label =>
    Array(6).fill(addLineBreaks(label))
  )
);
```
::

::ContentH2
Splitting Data Into Groups
::

::Paragraph
The data is separated into `myData` and comparison groups. Each group is rendered as a separate Plotly trace to enable grouped bars
::

::CodeBlock
```ts
const chartData = computed(() => [
  plotData.value.filter(obj => obj.myData),
  plotData.value.filter(obj => !obj.myData)
]);
```
::

::ContentH2
Transforming Percentiles Into Stacked Segments
::

::Paragraph
Each bar is composed of six stacked segments:
::Indent
1. Transparent base → shifts bar for floating start
2. Lower 75% segment
3. Lower 25% segment
4. Median placeholder → used to draw median line
5. Upper 25% segment
6. Upper 75% segment
::
Percentile values are transformed into relative stack heights so each segment represents a delta rather than an absolute value
::

::CodeBlock
```ts
const lower25thHeight = median - twentyFifthPercentile;
const upper25thHeight = seventyFifthPercentile - median;
const baseSegment = { value: minimumValue, color: 'transparent' };
```
::

::ContentH2
Handling Negative Values
::

::Paragraph
Positive and negative segments are handled independently. Negative segments are reversed and stacked downward, while positive segments stack upward. Null values are preserved for empty segments
::

::Indent
- Detect negative values
- Reverse order for stacking
- Preserve nulls for empty segments
::

::ContentH2
Drawing the Median as a Horizontal Line
::

::Paragraph
Instead of stretching a bar segment for the median, we compute its cumulative stack height and draw a horizontal line using Plotly shapes:
::

::CodeBlock
```ts
shapes.push({
  type: 'line',
  xref: 'paper',
  x0: left,
  x1: right,
  yref: 'y',
  y0: medianPosition,
  y1: medianPosition
});
```
::

::ContentH2
Creating Each Trace
::

::Paragraph
All stacks for `myData` and comparison data are flattened into single arrays. Repeated X-axis labels control bar placement. The `barmode` is set to `'group'` and widths are tuned to simulate grouping. Median lines remain aligned even when groups vary in size
::

::ContentH2
Why This Matters
::

::Paragraph
This problem isn’t about Plotly alone — it’s about engineering judgment. Implementing these charts demonstrates:
::

::Indent
- Data modeling under constraints
- Deep understanding of rendering mechanics
- Separation of visual intent from library abstractions
- Defensive handling of edge cases
- Maintaining correctness over “happy path” visuals
::

::ContentH2
Lessons Learned
::

::Indent
- Charting libraries are declarative, but rendering is procedural
- Normalize your stack shape early for consistency
- Invisible segments are often the cleanest way to control layout
- Use shapes when visual encoding should differ from data encoding
- Treat visualization code like business logic; test edge cases rigorously
::

::ContentH2
Conclusion
::

::Paragraph
Advanced visualizations are rarely about “finding the right library option.” They’re about reshaping data to fit a rendering model while preserving semantic meaning. That’s the difference between making a chart work and making it correct. If you’re building complex data products, this kind of problem-solving comes up more often than you might expect — and it’s exactly where senior front-end engineers add the most value
::

::ContentH2
Full Component
::

::CodeBlock
```vue
<script setup lang="ts">
import { computed, onMounted, toRefs, watch, ref, type PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { addLineBreaks } from '@/components/Plots/barPlotUtils.ts';
import { colors } from '@/components/Plots/plotly_utilities.ts';

import VuePlotly from '@/components/vue-plotly/VuePlotly.vue';

interface PlotDatum {
  myData: boolean;
  metricTypeId: number;
  localizerKeyForXAxis: string;
  localizedValueForXAxis: string;
  minimumValue: number;
  twentyFifthPercentile: number;
  median: number;
  seventyFifthPercentile: number;
  maximumValue: number;
  precision: number;
  numberOfObservations: number;
  lowData: boolean;
  order: number;
}

type ChartValueType = 'minimumValue' | 'twentyFifthPercentile' | 'median' | 'seventyFifthPercentile' | 'maximumValue';

interface ChartValue {
  value: number | null;
  color?: string;
  type?: ChartValueType;
  rawMedianValue?: number | null;
  numberOfObservations?: number;
  lowData?: boolean;
}

type ChartDatum = {
  minimumValue: number;
  twentyFifthPercentile: number;
  median: number;
  seventyFifthPercentile: number;
  maximumValue: number;
  numberOfObservations: number;
  lowData?: boolean;
};

const props = defineProps({
  plotData: Array as PropType<PlotDatum[]>,
  labelKey: String as PropType<keyof PlotDatum>,
  isLightMode: {
    type: Boolean,
    default: false
  }
});

const { plotData, labelKey, isLightMode } = toRefs(props);
const t = useI18n().t;
const layout = ref();
const data = ref();

// gets unique labels for use on X axis
const uniqueSetOfXAxisLabels = computed(() =>
  new Set(plotData.value.map(obj => t(String(obj[labelKey.value]).toLowerCase())))
);

// formats X axis labels and creates an array of 6 to match bar stack structure
const xAxisLabels = computed(() =>
  Array.from(uniqueSetOfXAxisLabels.value).flatMap(label =>
    Array(6).fill(addLineBreaks(label))
  )
);

// creates array of myData and comparison data to separate
const chartData = computed(() => [
  plotData.value.filter(obj => obj.myData),
  plotData.value.filter(obj => !obj.myData)
]);

// creates chart readable data structure for myData
const myData = computed(() =>
  chartData.value[0].flatMap(obj => getValues(obj, colors.blue))
);

const externalData = computed(() =>
  chartData.value[1].flatMap(obj => getValues(obj, colors.orange))
);

function getIsEmpty(values: ChartValue[]) {
  return values.filter(obj => obj.value !== null).length === 0;
}

function getNegativeValues(data: ChartValue[]): ChartValue[] {
  return data.filter(obj => obj.value !== null && obj.value < 0);
}

function getText(dataArray: ChartValue[]): string[] {
  return dataArray
    .filter(obj => obj.type === 'median')
    .flatMap(obj => {
      if (obj.rawMedianValue == null) {
        return Array(6).fill('');
      } else {
        return Array(6).fill(
          `${t('type_option_median')}=${obj.rawMedianValue} <br>N=${obj.numberOfObservations} ${obj.lowData ? `(${t('low_data_text')})` : ''}`
        );
      }
    });
}

function getValues(data: ChartDatum, color: string[]) {
  const temp: ChartValue[] = [];

  // helper to safely subtract two numbers, returns null if either is null
  const safeSubtract = (a: number | null | undefined, b: number | null | undefined) =>
    a != null && b != null ? a - b : null;

  const values: ChartValue[] = [
    { value: data.minimumValue ?? null, type: 'minimumValue' },
    { value: data.twentyFifthPercentile ?? null, type: 'twentyFifthPercentile' },
    { value: data.median ?? null, type: 'median', numberOfObservations: data.numberOfObservations },
    { value: data.seventyFifthPercentile ?? null, type: 'seventyFifthPercentile' },
    { value: data.maximumValue ?? null, type: 'maximumValue' }
  ];

  const isEmpty = getIsEmpty(values);
  const negativeValues = getNegativeValues(values);

  const lower75th: ChartValue = {
    value: safeSubtract(data.twentyFifthPercentile, data.minimumValue),
    color: color[0],
    type: 'minimumValue'
  };

  const lower25th: ChartValue = {
    value: safeSubtract(data.median, data.twentyFifthPercentile),
    color: color[1],
    type: 'twentyFifthPercentile'
  };

  const medianLine: ChartValue = {
    value: isEmpty || data.median == null ? null : 0, // keep null if no data
    rawMedianValue: data.median,
    type: 'median',
    numberOfObservations: data.numberOfObservations,
    lowData: data.lowData
  };

  const negativeMedianLine: ChartValue = { ...medianLine, value: medianLine.value != null ? -medianLine.value : null };

  const upper25th: ChartValue = {
    value: safeSubtract(data.seventyFifthPercentile, data.median),
    color: color[1],
    type: 'seventyFifthPercentile'
  };

  const upper75th: ChartValue = {
    value: safeSubtract(data.maximumValue, data.seventyFifthPercentile),
    color: color[0],
    type: 'maximumValue'
  };

  // set values assuming positive
  temp[0] = { value: data.minimumValue ?? null, color: 'transparent' };
  temp[1] = lower75th;
  temp[2] = lower25th;
  temp[3] = medianLine;
  temp[4] = upper25th;
  temp[5] = upper75th;

  // handle negative values if any (keep nulls intact)
  if (negativeValues.length) {
    const reversedNegativeValues = negativeValues.toReversed();

    if (negativeValues.length === 1) {
      temp[0] = { value: reversedNegativeValues[0].value, color: color[0] };
      temp[1] = { value: data.twentyFifthPercentile ?? null, color: color[0] };
    }

    if (negativeValues.length === 2) {
      temp[0] = { value: reversedNegativeValues[0].value, color: color[1] };
      temp[1] = {
        value: safeSubtract(reversedNegativeValues[1].value, reversedNegativeValues[0].value),
        color: color[0]
      };
      temp[2] = { value: data.median ?? null, color: color[1] };
    }

    if (negativeValues.length === 3) {
      temp[0] = { value: reversedNegativeValues[0].value, color: color[1] };
      temp[1] = negativeMedianLine;
      temp[2] = {
        value: safeSubtract(reversedNegativeValues[1].value, reversedNegativeValues[0].value),
        color: color[1]
      };
      temp[3] = {
        value: safeSubtract(reversedNegativeValues[2].value, reversedNegativeValues[1].value),
        color: color[0]
      };
    }

    if (negativeValues.length === 4) {
      temp[0] = { value: reversedNegativeValues[0].value, color: color[0] };
      temp[1] = {
        value: safeSubtract(reversedNegativeValues[1].value, reversedNegativeValues[0].value),
        color: color[1]
      };
      temp[2] = negativeMedianLine;
      temp[3] = {
        value: safeSubtract(reversedNegativeValues[2].value, reversedNegativeValues[1].value),
        color: color[1]
      };
      temp[4] = {
        value: safeSubtract(reversedNegativeValues[3].value, reversedNegativeValues[2].value),
        color: color[0]
      };
    }

    if (negativeValues.length === 5) {
      temp[0] = { value: data.maximumValue ?? null, color: 'transparent' };
      temp[1] = {
        value: safeSubtract(reversedNegativeValues[1].value, reversedNegativeValues[0].value),
        color: color[0]
      };
      temp[2] = {
        value: safeSubtract(reversedNegativeValues[2].value, reversedNegativeValues[1].value),
        color: color[1]
      };
      temp[3] = negativeMedianLine;
      temp[4] = {
        value: safeSubtract(reversedNegativeValues[3].value, reversedNegativeValues[2].value),
        color: color[1]
      };
      temp[5] = {
        value: safeSubtract(reversedNegativeValues[4].value, reversedNegativeValues[3].value),
        color: color[0]
      };
    }
  }

  return temp;
}


// all stacks for myData
function getTrace() {
  return {
    x: xAxisLabels.value,
    y: myData.value.map(obj => obj.value),
    marker: { color: myData.value.map(obj => obj.color) },
    type: 'bar',
    width: 0.15,
    textposition: 'none',
    hoverinfo: 'text',
    text: getText(myData.value),
  };
}

// all stacks for comparison data
function getTrace1() {
  return {
    x: xAxisLabels.value,
    y: externalData.value.map(obj => obj.value),
    marker: { color: externalData.value.map(obj => obj.color) },
    type: 'bar',
    width: 0.15,
    textposition: 'none',
    hoverinfo: 'text',
    text: getText(externalData.value),
  };
}

function getLayout() {
  return {
    hovermode: 'x unified',
    hoverinfo: 'none',
    height: 300,
    dragmode: 'pan',
    barmode: 'group',
    paper_bgcolor: isLightMode.value ? '' : '#222429',
    plot_bgcolor: isLightMode.value ? '' : '#222429',
    showlegend: false,
    bargap: 0.5,
    margin: { r: 0, l: 0, t: 0, b: 0 },
    font: { color: isLightMode.value ? '#494A58' : 'white', size: 13 },
    xaxis: {
      fixedrange: true,
      automargin: true,
      autotickangles: [0, -90],
      tickfont: { size: 12, color: '#AFB4C0' },
      ticklabelstandoff: 4,
      linecolor: isLightMode.value ? '#CCD1DE' : '#494A58',
      linewidth: 1
    },
    yaxis: {
      fixedrange: true,
      showgrid: false,
      showline: true,
      separatethousands: true,
      tickfont: { size: 12, color: '#AFB4C0' },
      ticklabelstandoff: 4,
      linecolor: isLightMode.value ? '#CCD1DE' : '#494A58',
      linewidth: 1,
      zerolinecolor: isLightMode.value ? '#CCD1DE' : '#494A58',
    },
    shapes: getMedianShapes()
  };
}

function computeMedianYPosition(stack: ChartValue[]): number | null {
  for (let i = 0; i < stack.length; i++) {
    const segment = stack[i];

    if (segment.type === 'median') {
      const medianVal = segment.rawMedianValue;

      // Skip drawing if the median value is null or undefined
      if (medianVal === null || medianVal === undefined) {
        return null;
      }

      // Median is exactly 0 → baseline
      if (medianVal === 0) {
        return 0;
      }

      // Positive median → accumulate previous positive segments
      if (medianVal > 0) {
        let positiveHeight = 0;
        for (let j = 0; j < i; j++) {
          const val = stack[j].value || 0;
          if (val > 0) {
            positiveHeight += val;
          }
        }
        return positiveHeight;
      }

      // Negative median → accumulate previous negative segments
      if (medianVal < 0) {
        let negativeHeight = 0;
        for (let j = 0; j < i; j++) {
          const val = stack[j].value || 0;
          if (val < 0) {
            negativeHeight += val;
          }
        }
        return negativeHeight;
      }
    }
  }

  // If no median is found or none is valid
  return null;
}

// renders a line for median value so that the height is fixed
function getMedianShapes() {
  const shapes = [];
  const segmentsPerBar = 6;

  const groupedData = [];
  if (myData.value.length) groupedData.push({ data: myData.value, traceIndex: 0 });
  if (externalData.value.length) groupedData.push({ data: externalData.value, traceIndex: 1 });

  const numTraces = groupedData.length;
  const totalGroups = (groupedData[0]?.data.length || 0) / segmentsPerBar;

  const bargap = 0.5; // same as layout.bargap

  // Width of each stack (accounting for bargap)
  const groupPaperWidth = (1 - bargap) / totalGroups;
  const barPaperWidth = groupPaperWidth / numTraces;
  const isGrouped = externalData.value.length > 0
  const lineWidthFrac = barPaperWidth * (isGrouped ? 0.6 : 0.3);

  for (let groupIndex = 0; groupIndex < totalGroups; groupIndex++) {
    groupedData.forEach(({ data, traceIndex }) => {
      const stackIndex = groupIndex * segmentsPerBar;
      const stack = data.slice(stackIndex, stackIndex + segmentsPerBar);
      if (stack.length < 6) return;

      // Compute group's left edge in paper space
      const groupStart = groupIndex * (1 / totalGroups) + (bargap / 2 / totalGroups);

      // Compute bar's center within the group
      const barStart = groupStart + traceIndex * barPaperWidth;
      const center = barStart + barPaperWidth / 2;

      const medianPosition = computeMedianYPosition(stack);

      shapes.push({
        type: 'line',
        xref: 'paper',
        x0: center - lineWidthFrac / 2,
        x1: center + lineWidthFrac / 2,
        yref: 'y',
        y0: medianPosition,
        y1: medianPosition,
        line: {
          color: isLightMode.value ? '#494A58' : 'white',
          width: medianPosition != null ? 3 : 0 // sets the height of the median line
        }
      });
    });
  }

  return shapes;
}

const config = { displayModeBar: false, responsive: true };

onMounted(() => {
  layout.value = getLayout();
  data.value = [getTrace(), getTrace1()]
});

watch(() => props, () => {
    // sets layout again if titles changes
    layout.value = getLayout();
    data.value = [getTrace(), getTrace1()]
  },
  { deep: true } // Ensure deep watch for nested data changes
);

</script>

<template>
  <vue-plotly id="graph" :layout="layout" :data="data" :config="config" />
</template>

<style lang="scss">
#graph .hoverlayer {
  line:first-child {
    stroke: transparent !important;
  }

  line:nth-child(2) {
    stroke-width: 1px !important;
  }
}
</style>

<!--
The goal of this code is to create a floating, grouped, stacked bar chart using Plotly.js.
A stacked bar chart allows us to display multiple segments within a single bar for each category (x-axis label).

Each "trace" in represents all stacks of a myData or comparison data. By having multiple traces, we can render grouped stacks.

To create all stacks in a trace the x labels are repeated to make the relationship to data and tell Plotly which column the data should be placed in

example positive values only trace of chart with 4 columns (negative values will shift the box type based on how many boxes have negative values):

labels & colors are repeated 6 times to form a single stack within the trace
6 y values represent heights of individual boxes in the stack.

  "name": "My Patients",
  "x": [
    "Pre-op","Pre-op","Pre-op","Pre-op","Pre-op","Pre-op",
    "30 Days","30 Days","30 Days","30 Days","30 Days","30 Days",
    "60 Days","60 Days","60 Days","60 Days","60 Days","60 Days",
    "90 Days","90 Days","90 Days","90 Days","90 Days","90 Days"
  ],
  "y": [
    3562 (transparent stack distance from 0),354 (height of bottom stack),113 (height of next to bottom stack),85.83 (height of middle median line),182 (height of next to top stack),208 (height of top stack),
    3149,360,438,85.83,232,695,
    3123,517,405,85.83,275,724,
    3022,711,314,85.83,371,626
  ],
  "marker": {
    "color": [
      "transparent","rgba(13, 197, 255, 0.5)" (dark blue), "rgba(13, 197, 255, 1)" (light blue),"white","rgba(13, 197, 255, 1)" (light blue),"rgba(13, 197, 255, 0.5)" (dark blue),
      "transparent","rgba(13, 197, 255, 0.5)","rgba(13, 197, 255, 1)","white","rgba(13, 197, 255, 1)","rgba(13, 197, 255, 0.5)",
      "transparent","rgba(13, 197, 255, 0.5)","rgba(13, 197, 255, 1)","white","rgba(13, 197, 255, 1)","rgba(13, 197, 255, 0.5)",
      "transparent","rgba(13, 197, 255, 0.5)","rgba(13, 197, 255, 1)","white","rgba(13, 197, 255, 1)","rgba(13, 197, 255, 0.5)"
    ]
  }
-->
```
::
