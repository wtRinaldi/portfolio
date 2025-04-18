---
date: '4.17.2025'
description: 'Considering Vue over React'
type: 'frameworks'
img: '/vue_vs_react.svg'
---

::ContentH1
Vue vs React
::

::SubTitle
Just one of the reasons that I prefer Vue over React
::

::Paragraph
Front-end developers often find themselves in the position of choosing technologies for their projects.
If you're making this decision, consider this advantage that Vue offers.
::

::ContentH2
One-way binding vs Two-way binding
::

::Paragraph
While React is often labeled as employing one-way binding and Vue as using two-way binding, this oversimplification doesn't fully capture the distinction.
Both frameworks primarily use one-way data flow. Vue’s `v-model` is syntactic sugar for a pattern involving props and events, making two-way binding easier to implement. React encourages unidirectional flow but allows two-way behavior through handlers and state lifting.
::

::ContentH2
Vue's v-model
::

::Paragraph
Vue's `v-model` provides shorthand for data binding, simplifying code compared to React's approach of manually handling input events.
::

::ContentH2
Example of Data Flow in Vue Components
::

::Paragraph
Consider a scenario where a child component updates data consumed by both its parent and grandchild.
In this setup, all levels of the component hierarchy share and update the state using a simple `v-model`.
::

::CodeBlock
```vue
// Vue Parent.vue
<template>
    <VueChild v-model="data" />
</template>

<script setup>
  const data = ref('')
</script>
```
::

::CodeDescription
Vue `v-model` (two-way binding)
::

::CodeBlock
```vue
// Vue without shorthand Parent.vue
<template>
    <VueChild
      :value="data" 
      @input="setData" 
    />
</template>

<script setup>
  const data = ref('')

  function setData(val) {
    data.value = val
  }
</script>
```
::

::CodeDescription
Vue without `v-model` (manual prop/event binding)
::

::ContentH2
Comparing to React
::

::Paragraph
In React, achieving similar functionality requires the function and value to be passed, with explicit event handling and state management at each level of the component hierarchy.
It is possible, however, to recreate the `v-model` pattern in React using a hook. 
::

::CodeBlock
```jsx
// React Parent.jsx
import React, { useState } from 'react';
import ReactChild from './ReactChild';

function ReactParent() {
  const [data, setData] = useState('');

  return (
    <div>
      <ReactChild 
        data={data} 
        setData={setData}
      />
    </div>
  );
}
```
::

::CodeDescription
Notice instead of a single `v-model` passing both the event and value, both must be explicitly passed.
I could do the very same thing in Vue by binding a `:value` and `@input`.
`v-model` is simply shorthand that combines these attributes to simplify code.
Thus, React and Vue are identical in this pattern.
::

::ContentH2
Conclusion
::

::Paragraph
Yes, this is a small amount of code for this single instance but repeat this pattern hundreds of times in a large app and it becomes clear that Vue has the more graceful approach.
While both Vue and React have their merits, Vue's simplicity and built-in features like `v-model` make it an appealing choice for new projects or when refactoring existing ones.
::

::Paragraph
Let me know if you found this content insightful. Feel free to reach out to me with any questions on :LinkedinLink.
::
