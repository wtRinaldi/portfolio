<template>
    <section class="flex justify-center">
        <div class="flex flex-col max-w-lg">
            <h2 class="text-2xl font-medium text-center mb-6">Endorsements</h2>
            <div class="flex flex-col">
                <div v-for="endorsement in endorsements" class="p-3">
                    <div class="flex flex-col">
                        <h3 class="uppercase font-bold mb-2 text-center">{{ endorsement.name }}</h3>
                    </div>
                    <div class="px-3 text-start font-light">
                        <p>{{ endorsement.statement }}</p>
                    </div>
                </div>
            </div>
        </div>

    </section>
  </template>
<script setup>

const endorsements = [
    {
        name: 'Aaron W. - CastleBranch Engineering Manager',
        statement: 'William joined CastleBranch in December of 2018 and has become the central point for all front end development project needs. His dedication and devotion to improving our processes, adding structure to our front end code base, desire to learn and grow, was pivotal to the success of many projects in 2019. William will be continuing to support more refined standards and consistency in the development of our user interfaces and front end code bases. We have many exciting projects on the horizon in 2020 and William will be a critical team member in the improvements of our applications and internal utilities. He is always willing to share his learning\'s and updates on the improvements that he has been, and will continue, to work on with the front end development of our applications.'
    },
    {
        name: 'Allie W. - Vanguard Application Developer',
        statement: 'I had the great opportunity to be William Rinaldi’s teammate at Vanguard over the past year.  Throughout this time, he always demonstrated a great willingness to learn and constantly strive to improve when possible.  He has a great work ethic, always going out of his way to try to improve a design or make the best option available work.  He is adaptable and was able to step into key roles when other team members were absent.  On our team, William really molded himself a key role as a very important UI developer with his AngularJS skills.  His problem solving skills made him an invaluable asset to our team in the UI space.  William is always willing to help someone when they need his help and never afraid to share his ideas with his teammates.  In addition to this, he brings a lighthearted, fun atmosphere to work and really cares about his teammates.',
    },
    {
        name: 'Salim E. - Vanguard Application Developer',
        statement: 'I had the pleasure of working with William for over a year. During that time William was a UI developer on my team. We worked specifically with angular/JS on the front end for Vanguard personal advisor services webpages. William displayed great initiative and was able to follow instructions concisely. He was always available and while I was training him, William was very excited and eager to learn about Vanguard\'s systems and software design. William completed his tasks on time and was not afraid to ask questions if he was stuck on a particular problem. We did a lot of pair programming and William would volunteer his efforts when discussing implementation of the solutions. I was very glad to have William as a part of my team which consisted of 3-4 developers. William is a team player and gets along with everyone. He is very determined on finding a solution when assigned work. I noticed that he pays attention to detail and this was very important when working with JavaScript and angular. Best of all, William has shared a similar characteristic with me and that is he does not give up until all requirements have been met.  I highly recommend William for any front end developer to role. I have no doubts that your clients will be satisfied with his results.',
    },
    {
        name: 'Ethan S. - Zimmer Biomet Principal Software Engineer',
        statement: 'I strongly recommend William. I worked with William at Zimmer as his team lead developing a greenfield application. His technical capabilities are excellent and he fit into the team seamlessly. Anyone interested in a senior front end engineer would be well served to pick him up!'
    },
    {
        name: 'Dan S. - Castlebranch Sr. Director of Software Engineering',
        statement: 'I highly recommend William and his capabilities and skill set.'
    },
    {
        name: 'Nathan B. - Semsee Software Engineer III ',
        statement: 'He did a lot of great work for us! Recommended.'
    }
]
</script>