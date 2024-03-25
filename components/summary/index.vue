<template>
  <div class="flex flex-col my-6 space-y-6 md:flex-row md:space-y-0 md:space-x-6 md:my-0">
    <SummaryCard class="flex-1">
      <template #header>
        <div class="text-2xl pb-4 uppercase">Areas of expertise</div>
      </template>
      <ul>
        <li>Vue / Nuxt</li>
        <li>Front End Architecture</li>
        <li>Page Speed Optimization</li>
        <li>Responsive Mobile First Development</li>
        <li>Tailwind CSS</li>
        <li>Design Systems</li>
      </ul>
    </SummaryCard >

    <SummaryCard class="flex-1">
      <template #header>
        <div class="text-2xl pb-4 uppercase">Industry Experience</div>
      </template>
      <ul>
        <li>Financial Tech</li>
        <li>Human Resources</li>
        <li>Insurance Industry</li>
        <li>Compliance</li>
        <li>E-Commerce</li>
      </ul>
    </SummaryCard>

    <SummaryCard class="flex-1">
      <template #header>
        <div class="text-2xl pb-4 uppercase">Development Philosophies</div>
      </template>
      <ul>
        <li>DRY code</li>
        <li>Single Responsibility Principle</li>
        <li>Explicit & Simple code</li>
        <li>Mobile First Approach</li>
        <li>Use few lightweight libraries</li>
      </ul>
    </SummaryCard>
  </div>
</template>
<script setup lang="ts">
</script>