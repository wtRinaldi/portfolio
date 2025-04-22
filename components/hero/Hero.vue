<template>
  <section class="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 px-6 lg:px-20 bg-gradient-to-br from-white via-gray-50 to-gray-100">
    <!-- Text Content -->
    <div class="flex flex-col flex-[2] text-center lg:text-left animate-fadeInUp order-1 lg:order-none">
      <h1 class="text-6xl md:text-[4.25rem] leading-[4.25rem] font-extrabold leading-tight mb-4 md: mb-8 text-gray-900 ">
        WILLIAM RINALDI
      </h1>
      <h2 class="text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
        Senior Frontend Developer
      </h2>
      <p class="text-gray-700 md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
        An experienced front-end developer, proficient in <span class="font-medium text-gray-900">HTML, CSS, JavaScript, Tailwind, React</span>, and <span class="font-medium text-gray-900">Vue</span>.
        Strong collaborator focused on creating responsive, user-friendly, and performant web applications.
      </p>
    </div>

    <!-- Hero Image -->
    <div class="flex-[3] animate-fadeIn order-2 lg:order-none">
      <NuxtImg
        src="/gdp_hero.svg"
        class="rounded-2xl w-full shadow-lg border border-gray-200"
        alt="hero graphic"
        loading="eager"
        height="500"
      />
    </div>
  </section>
</template>


<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-fadeInUp {
  animation: fadeInUp 0.6s ease-out forwards;
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}
</style>
