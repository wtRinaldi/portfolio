<template>
    <section>
      <div class="flex flex-col">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Technical Proficiencies</h2>
        <TransitionGroup
          name="fade"
          tag="div"
          class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_300px))] gap-4 place-content-center"
        >
          <CommonCard
            v-for="(proficiency, index) in proficiencies"
            :key="proficiency.name"
            v-show="expanded || index < 4"
            :aria-hidden="!expanded && index >= 4"
            class="relative max-w-[300px] h-[300px] p-3 transition-all duration-300 ease-in-out"
          >
            <div class="flex flex-col">
              <NuxtImg
                :src="proficiency.icon"
                style="height: 75px; aspect-ratio: 1/1;"
                width="75"
                class="mt-3 mb-3 self-center w-auto"
                :alt="`${proficiency.name} logo`"
                loading="lazy"
              />
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
        </TransitionGroup>
  
        <button
          @click="toggleExpanded"
          class="mt-6 self-center text-blue-600 underline hover:text-blue-800 transition duration-150 text-xl"
        >
          {{ expanded ? 'See Less' : 'See More' }}
        </button>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const expanded = ref(false)
  const toggleExpanded = () => {
    expanded.value = !expanded.value
  }
  
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
      name: 'Nuxt',
      icon: '/nuxt.svg',
      experience: '1',
      summary: 'Used Nuxt SSR to improve SEO and initial render speed on client facing projects.'
    },
    {
      name: 'Storybook UI',
      icon: '/storybook.svg',
      experience: '4',
      summary: 'Developed and maintained a library of reusable components with Storybook to streamline design and development workflows.'
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
      name: 'Tailwind',
      icon: '/tailwind.svg',
      experience: '4',
      summary: 'Go-to choice for styling — efficient, scalable, and perfect for rapid UI development.'
    },
    {
      name: 'React',
      icon: '/react.svg',
      experience: '1.5',
      summary: 'Experience building interactive interfaces with functional components, props, and hooks.'
    },
    {
      name: 'Redux',
      icon: '/redux.svg',
      experience: '1.5',
      summary: 'Used to manage global state in React application. Similar pattern to Vue state management.'
    },
    {
      name: 'Angular',
      icon: '/angular.svg',
      experience: '1.5',
      summary: 'Used Angular in a professional setting (Vanguard) to build and maintain enterprise-scale features with strong typing and structured architecture.'
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
  
  <style scoped>
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.3s ease;
  }
  </style>
  