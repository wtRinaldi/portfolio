---
date: '3.27.2024'
description: 'How to style Nuxt Content markdown files'

---

::MainTitle
How to style Nuxt Content markdown files
::

::SubTitle
Using content components to style markdown
::

::Paragraph
When first getting acquainted with Nuxt content, I was a bit unclear on how to apply styles to content.
::

::Paragraph
I couldn't find much information on the subject of adding styles to Nuxt Content but did come across a YouTube video suggesting to apply styles to the files using the <ContentDoc /> component.
The creator of the video correctly noted that the scoped style tag will not work and to apply styles with CSS ':deep' selector.
This works but it's not a very pleasant developer experience.
There is a much simpler way.
::

::Paragraph
Enter Nuxt Content components.  
::

::Paragraph 
Nuxt Content allows for us to create content specific components in our regular component directory by adding a /content folder in our /components directory.
Simply create slotted components that style your markdown content, complete with scoped CSS or tailwind classes, and consume them in markdown.
::

::ContentH2
/components/content MainTitle.vue component used to style the title on this page
::

::CodeBlock
```vue
<template>
    <div class="text-xl font-bold text-primary-light py-6">
        <slot />
    </div>
</template>
```
::

<br />

::ContentH2
Using the component in the markdown file
::

::CodeBlock
```markdown
::MainTitle
 How to style Nuxt Content markdown files
::
```
::

::CodeDescription
Use two colons ::ComponentName as an opening tag before your content and two colons :: after your content as a closing tag.
This passes the content between the tags to the slot.
::

::Paragraph
Now you're free to use scoped styles or Tailwind classes as you would expect in the content component.
::

::Paragraph
So far, I've created headers, subheaders, title, paragraph, and code block components to create this blog.
Styling your content becomes very easy after setting up some basic components.

:::ContentLink{to="/blog/nuxt-content-code-block"}
Read more about using the CodeBlock component here.
:::
::

::Paragraph
I hope this provides some clarity on styling Nuxt Content.  Feel free to reach out to me with any questions on :LinkedinLink.
::



