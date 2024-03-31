---
date: '3.29.2024'
description: 'How to create a Nuxt Content code block'

---

::MainTitle
How to create a Nuxt Content code block
::

::SubTitle
Adding code blocks to your Nuxt Content with a content code block component
::

::Paragraph
Nuxt Content uses a syntax highlighter known as Shiki to render highlighted code in Nuxt Content markdown files.
This is a really nice method for displaying code in blog or documentation.
::

::ContentH2
Setup in nuxt.config
::

::CodeBlock
```js
export default defineNuxtConfig({
modules: ['@nuxt/image', 'nuxt-icons', '@vite-pwa/nuxt', '@nuxt/content'],
content: {
    highlight: {
        theme: 'github-dark'
    }
},
```
::

::CodeDescription
After you've installed Nuxt Content, you should be able to add the content object to your nuxt.config file.
Here you can add a highlight theme to your code.
::

::ContentH2
/components/content/CodeBlock.vue component
::

::CodeBlock
```vue
<template>
  <div class="flex mb-6 p-6 rounded-xl overflow-x-auto bg-primary-light">
    <slot />
  </div>
</template>
```
::

::CodeDescription
There's nothing special about the code block component compared to other content components.
You can see that I've applied a background color and overflow-x but nothing to apply code highlighting.
::

::ContentH2
Consuming the CodeBlock component
::

::CodeBlock
```markdown
::CodeBlock
```vue (code language (i.e vue, js, ... etc)
add code here to be rendered in code block
```(closing backtick tag)
::
```
::

::CodeDescription
Add three backticks, followed by the language used in the code block as an opening tag, then three backticks to close the tag.
Then the code language applies the code highlighting to your code.
::


::Paragraph
Let me know if you found this blog helpful or if you have any questions.  Feel free to reach out to me with any questions on :LinkedinLink.
::



