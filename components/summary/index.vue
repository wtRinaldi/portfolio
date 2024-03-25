<template>
  <div class="flex flex-col my-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:my-0">
    <SummaryCard class="flex-1">
      <template #header>
        <figcaption class="text-2xl pb-4">Areas of expertise</figcaption>
      </template>
      <figure class="p-8">
        <ul class="list-disc pl-5">
          <li>Vue / Nuxt</li>
          <li>Front End Architecture</li>
          <li>Page Speed Optimization</li>
          <li>Responsive Mobile First Development</li>
          <li>Tailwind CSS</li>
          <li>Design Systems managed via Storybook UI</li>
        </ul>
      </figure>
    </SummaryCard >
    <SummaryCard class="flex-1">Industry Experience</SummaryCard>
    <SummaryCard class="flex-1">Soft Skills</SummaryCard>
  </div>
</template>