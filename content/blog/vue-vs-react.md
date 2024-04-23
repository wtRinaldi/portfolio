---
date: '4.19.2024'
description: 'One reason to consider Vue over React'
type: 'frameworks'

---

::ContentH1
Vue vs React
::

::SubTitle
Just one of the advantages of Vue over React
::

::Paragraph
Front-end developers often find themselves in the position of choosing technologies for their projects.
If you're making this decision, consider Vue's advantages over React.
::

::ContentH2
One-way binding vs Two-way binding
::

::Paragraph
While React is often labeled as employing one-way binding and Vue as using two-way binding, this oversimplification doesn't fully capture the distinction.
Vue offers shorthand for common patterns like passing props and handling events, which React lacks.
::

::ContentH2
Vue's v-model
::

::Paragraph
Vue's v-model provides shorthand for data binding, simplifying code compared to React's approach of manually handling input events.
::

::ContentH2
Example of Data Flow in Vue Components
::

::Paragraph
Consider a scenario where a child component updates data consumed by both its parent and grandchild.
In fact, all level of this form updated the state with just a simple v-model.
::

::CodeBlock
```vue
// FilterPanel.vue
<template>
    <FilterAuthor v-model:selected-author-email="selectedAuthorEmail" class="mb-2"/>
    <button @click="clearFilters">Clear Filters</button>
</template>

<script setup>
  const selectedAuthorEmail = defineModel('selectedAuthorEmail')

  function clearFilters() {
    selectedAuthorEmail.value = ''
  }
</script>
```
::

::CodeDescription
In this example, 'FilterPanel.vue' serves as the child of 'Recipes.vue' and the parent of 'FilterAuthor.vue'.
It efficiently manages data flow between its parent and grandchild components without the added bloat of handler functions.
::

::ContentH2
Comparing React
::

::Paragraph
In React, achieving similar functionality would require more code, with explicit event handling and state management at each level of the component hierarchy.
::

::ContentH2
Conclusion
::

::Paragraph
While both Vue and React have their merits, Vue's simplicity and built-in features like v-model make it an appealing choice for new projects or when refactoring existing ones.
::

::Paragraph
Let me know if you found content insightful.  Feel free to reach out to me with any questions on :LinkedinLink.
::








