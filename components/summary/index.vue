<template>
  <div class="flex flex-col my-6 space-y-6 lg:flex-row lg:space-y-0 lg:space-x-6 lg:my-0 items-center">
    <SummaryCard class="flex-1">
      <template #header>
        <IconCircle name="user_attributes" class="mb-3" />
        <div class="text-2xl pb-4 uppercase">Areas of expertise</div>
      </template>
      <ul>
        <li>Vue / Nuxt</li>
        <li>Front End Architecture</li>
        <li>Page Speed Optimization</li>
        <li>Mobile First Development</li>
        <li>Design Systems</li>
      </ul>
    </SummaryCard >

    <SummaryCard class="flex-1">
      <template #header>
        <IconCircle name="factory" class="mb-3" />
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
        <IconCircle name="mindfulness" class="mb-3" />
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
import IconCircle from "~/components/common/IconCircle.vue";
</script>