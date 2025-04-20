import { defineAsyncComponent } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const componentsToLazyLoad = ['CodeBlock', 'ProsePre']

  componentsToLazyLoad.forEach((name) => {
    // Check if the component is already registered
    if (!nuxtApp.vueApp.component(name)) {
      nuxtApp.vueApp.component(
        name,
        defineAsyncComponent(() => import(`~/components/${name}.vue`))
      )
    }
  })
})