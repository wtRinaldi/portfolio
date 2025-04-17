<template>
    <section>
        <div class="flex flex-col">
            <h2 class="text-2xl font-medium text-center mb-6">Technical Proficiencies</h2>
            <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_300px))] gap-4 place-content-center">
                <CommonCard v-for="proficiency in proficiencies" class="relative max-w-[300px] h-[300px] p-3">
                    <div class="flex flex-col">
                        <NuxtImg 
                            :src="proficiency.icon"
                            style="height: 75px; width: 75px;"
                            class="mt-3 mb-3 self-center"
                            :alt="`${proficiency.name} logo`"
                            loading="lazy" />
                        
                        <h3 class="uppercase font-bold mb-2 text-center">{{ proficiency.name }}</h3>
                        

                    </div>
                    <div class="px-3 text-start font-light">
                        <p>{{ proficiency.summary }}</p>
                        
                    </div>
                    <span class="absolute bottom-0 right-0 text-sm mr-3 mb-1 opacity-70 font-semibold">
                        {{ proficiency.experience }} yrs 
                        <Icon name="material-symbols:work-history-outline" class="text-xl mb-1 ml-1" />
                    </span>
                </CommonCard>
            </div>
        </div>

    </section>
  </template>
<script setup>

const proficiencies = [
    {
        name: 'JavaScript',
        icon: '/javascript.svg',
        experience: '9',
        summary: 'Applied advanced knowledge of JavaScript to build responsive, user-centric interfaces, utilizing modern ES6+.'
    },
    {
        name: 'TypeScript',
        icon: '/typescript.svg',
        experience: '2',
        summary: 'Used TypeScript to write robust, type-safe code for frontend applications in both Vue & React applications.'
    },
    {
        name: 'Vue',
        icon: '/vue.svg',
        experience: '6',
        summary: 'Developed complex, high-performance apps with Vue, creating reusable components and clean, maintainable code.'
    },
    {
        name: 'Nuxt',
        icon: '/nuxt.svg',
        experience: '1',
        summary: 'Used Nuxt SSR to improve SEO and initial render speed on client facing projects.'
    },
    {
        name: 'Quasar',
        icon: '/quasar.svg',
        experience: '1',
        summary: 'Developed full-featured apps using Quasar, combining Vue.js and Quasar\'s rich set of UI components to streamline development.'
    },
    {
        name: 'Vuetify',
        icon: '/vuetify.svg',
        experience: '3',
        summary: 'Experience with Vuetify to build elegant, responsive web applications, leveraging its extensive UI components for a smooth user experience.'
    },
    {
        name: 'Vuex',
        icon: '/vuex.svg',
        experience: '5',
        summary: 'Used Vuex for structured state management in medium to large Vue apps, with modular stores and clear data flow.'
    },
    {
        name: 'Pinia',
        icon: '/pinia.svg',
        experience: '1',
        summary: 'Leveraged Pinia for intuitive, lightweight state management in modern Vue projects.'
    },
    {
        name: 'React',
        icon: '/react.svg',
        experience: '1.5',
        summary: 'Experience building interactive interfaces with functional components, props, and hooks.'
    },
    {
        name: 'Angular',
        icon: '/angular.svg',
        experience: '1.5',
        summary: 'Used Angular in a professional setting (Vanguard) to build and maintain enterprise-scale features with strong typing and structured architecture.'
    },
    {
        name: 'Tailwind',
        icon: '/tailwind.svg',
        experience: '4',
        summary: 'Go-to choice for styling — efficient, scalable, and perfect for rapid UI development.'
    },
    {
        name: 'Storybook UI',
        icon: '/storybook.svg',
        experience: '4',
        summary: 'Developed and maintained a library of reusable components with Storybook to streamline design and development workflows.'
    },
    {
        name: 'HTML',
        icon: '/html5.svg',
        experience: '9',
        summary: 'Strong experience with semantic HTML5, improving accessibility and SEO for modern web applications.'
    },
    {
        name: 'CSS',
        icon: '/css3.svg',
        experience: '9',
        summary: 'Deep experience building responsive, pixel-perfect layouts with advanced selectors, animations, and Flexbox/Grid.'
    },
    {
        name: 'Plotly JS',
        icon: '/plotly.svg',
        experience: '1',
        summary: 'Proficient in using Plotly.js and developed a solution for floating grouped stacked bar charts to enhance data-driven web applications.'
    }
]

</script>