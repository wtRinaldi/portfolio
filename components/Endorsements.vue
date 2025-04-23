<template>
    <section class="bg-gray-100 py-12 px-4">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-10">Endorsements</h2>
  
        <!-- Masonry-style column layout -->
        <div class="columns-1 sm:columns-2 gap-6 space-y-6">
          <div
            v-for="endorsement in endorsements"
            :key="endorsement.name"
            class="break-inside-avoid bg-white shadow-sm rounded-xl p-6 border border-gray-200"
          >
            <p class="text-gray-700 italic mb-4" v-html="endorsement.statement" />
            <div class="text-sm text-gray-600 font-medium text-right">– {{ endorsement.name }}</div>
          </div>
        </div>
      </div>
    </section>
  </template>
<script setup>

const endorsements = [
    {
        name: 'Aaron W. - CastleBranch Engineering Manager',
        statement: 'William joined CastleBranch in December of 2018 and became the central point for all front-end development project needs.<br><br>His dedication and devotion to improving our processes, adding structure to our front-end code base, and his desire to learn and grow were pivotal to the success of many projects.<br><br>William supported more refined standards and consistency in the development of our user interfaces and front-end code bases.<br><br>He was a critical team member in improving both our internal utilities and client-facing applications.<br><br>He was always willing to share his learnings and updates with the team.'
      },
    {
        name: 'Allie W. - Vanguard Application Developer',
        statement: 'I had the great opportunity to be William Rinaldi’s teammate at Vanguard over the past year.<br><br>Throughout this time, he always demonstrated a great willingness to learn and constantly strive to improve when possible.<br><br>He has a great work ethic, always going out of his way to try to improve a design or make the best option available work.<br><br>He is adaptable and was able to step into key roles when other team members were absent.<br><br>On our team, William really molded himself a key role as a very important UI developer with his AngularJS skills.<br><br>His problem-solving skills made him an invaluable asset to our team in the UI space.<br><br>William is always willing to help someone when they need his help and never afraid to share his ideas with his teammates.<br><br>In addition to this, he brings a lighthearted, fun atmosphere to work and really cares about his teammates.'
      },
    {
        name: 'Salim E. - Vanguard Application Developer',
        statement: 'I had the pleasure of working with William for over a year. During that time, William was a UI developer on my team.<br><br>We worked specifically with Angular/JS on the front end for Vanguard Personal Advisor Services webpages. William displayed great initiative and was able to follow instructions concisely.<br><br>He was always available, and while I was training him, William was very excited and eager to learn about Vanguard\'s systems and software design.<br><br>William completed his tasks on time and was not afraid to ask questions if he was stuck on a particular problem.<br><br>We did a lot of pair programming, and William would volunteer his efforts when discussing implementation of the solutions.<br><br>I was very glad to have William as a part of my team, which consisted of 3–4 developers. William is a team player and gets along with everyone.<br><br>He is very determined when finding a solution to assigned work. I noticed that he pays attention to detail, which is very important when working with JavaScript and Angular.<br><br>Best of all, William shares a characteristic I value deeply — he does not give up until all requirements have been met.<br><br>I highly recommend William for any front-end developer role. I have no doubts that your clients will be satisfied with his results.'
      },
    {
        name: 'Ethan S. - Zimmer Biomet Principal Software Engineer',
        statement: 'I strongly recommend William.<br><br>I worked with William at Zimmer Biomet as his team lead developing a greenfield application. His technical capabilities are excellent and he fit into the team seamlessly.<br><br>Anyone interested in a senior front-end engineer would be well served to pick him up!'
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