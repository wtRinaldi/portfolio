<template>
    <section>
        <div class="flex flex-col">
            <h2 class="text-2xl font-medium text-center mb-6">Technical Proficiencies</h2>
            <div class="grid grid-cols-[repeat(auto-fit,_minmax(300px,_300px))] gap-4 place-content-center">
                <CommonCard v-for="proficiency in proficiencies" class="relative">
                    <div class="flex flex-col">
       
                        <NuxtImg 
                            :src="proficiency.icon"
                            style="height: 75px; width: 75px;"
                            class="mt-3 mb-4 self-center"
                            :alt="`${proficiency.name} logo`"
                            loading="lazy" />
                        
                        <h3 class="uppercase font-bold mb-2">{{ proficiency.name }}</h3>
                        

                    </div>
                    <div class="text-start font-thin">
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elos non ea doloremque.</p>
                        
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
        name: 'Vue',
        icon: '/vue.svg',
        experience: '6'
    },
    {
        name: 'Nuxt',
        icon: '/nuxt.svg',
        experience: '1'
    },
    {
        name: 'Vuex',
        icon: '/vuex.svg',
        experience: '5'
    },
    {
        name: 'Pinia',
        icon: '/pinia.svg',
        experience: '1'
    },
    {
        name: 'React',
        icon: '/react.svg',
        experience: '2'
    },
    {
        name: 'Angular',
        icon: '/angular.svg',
        experience: '2'
    },
    {
        name: 'Tailwind',
        icon: '/tailwind.svg',
        experience: '4'
    },
    {
        name: 'Storybook UI',
        icon: '/storybook.svg',
        experience: '3'
    },
    {
        name: 'HTML',
        icon: '/html5.svg',
        experience: '9'
    },
    {
        name: 'CSS',
        icon: '/css3.svg',
        experience: '9'
    },
    {
        name: 'Plotly JS',
        icon: '/plotly.svg',
        experience: '1'
    }
]

</script>