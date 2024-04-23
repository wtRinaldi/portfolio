<template>
  <div class="flex flex-col xl:flex-row justify-around gap-6 w-full">
    <SummaryCard icon="mdi:account-tie" label="Areas of expertise">
      <ul>
        <li>Vue / Nuxt / Tailwind</li>
        <li>Front End Architecture</li>
        <li>Page Speed Optimization</li>
        <li>Mobile First Development</li>
        <li>Design Systems</li>
      </ul>
    </SummaryCard >

    <SummaryCard icon="mdi:office-building" label="Industry Experience">
      <ul>
        <li>Financial Tech</li>
        <li>Human Resources</li>
        <li>Insurance</li>
        <li>Compliance</li>
        <li>E-Commerce</li>
      </ul>
    </SummaryCard>

    <SummaryCard icon="mdi:brain" label="Dev Philosophies">
      <ul>
        <li>Explicit & Simple Code</li>
        <li>Mobile First Development</li>
        <li>Small modular functions</li>
        <li>Don't Repeat Yourself</li>
        <li>Single Responsibility Principle</li>
      </ul>
    </SummaryCard>
  </div>
</template>
