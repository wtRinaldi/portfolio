<template>
    <section>
        <div class="flex flex-col">
            <h2 class="text-2xl font-medium text-center mb-6">Technical Proficiencies</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 ">
                <CommonCard v-for="proficiency in proficiencies">
                    {{ proficiency.name }}
                    <div>
                        <NuxtImg 
                            :src="proficiency.icon"
                            style="height: 100px; width: 100px;"
                            class=""
                            alt="vue logo"
                            loading="lazy" />
                    </div>
                </CommonCard>
            </div>
        </div>

    </section>
  </template>
<script setup>

const proficiencies = [
    {
        name: 'Vue',
        icon: '/vue.svg'
    },
    {
        name: 'Nuxt',
        icon: '/nuxt.svg'
    },
    {
        name: 'Pinia',
        icon: '/pinia.svg'
    },
    {
        name: 'React',
        icon: '/react.svg'
    },
    {
        name: 'Angular',
        icon: '/angular.svg'
    },
    {
        name: 'Tailwind',
        icon: '/tailwind.svg'
    },
    {
        name: 'Storybook UI',
        icon: '/storybook.svg'
    },
    {
        name: 'HTML',
        icon: '/html5.svg'
    },
    {
        name: 'CSS',
        icon: '/css3.svg'
    },
    {
        name: 'Plotly JS',
        icon: '/plotly.svg'
    }
]

</script>