---
date: '4.19.2024'
description: 'Why I prefer Vue to React?'
type: 'architecture'

---

::ContentH1
Vue vs React
::

::SubTitle
One of the advantages of Vue over React
::

::Paragraph
There are times when Front End developers are asked to steer the direction of technologies that are used.
If you're in the position of making this decision, consider some of the advantages of Vue over React.
::

::ContentH2
One-way binding vs Two-way binding
::

::Paragraph
It is often said that React is one-way binding and Vue is two-way binding.
If you search for the difference between the two, you'll find plenty of content making this claim.
::

::Paragraph
This is only partially true.
The more correct statement would be to say that Vue contains shorthand for a common pattern of passing props and listening for and setting data on events, whereas React does not.
::

::ContentH2
Vue v-model
::

::CodeBlock
```vue
<template>
    <input v-model="name" />
</template>
<script setup>
  const name = ref('')
</script>
```
::

::CodeDescription
The v-model is just shorthand for a similar pattern that is also used in React.
It replaces the code below.
::

::CodeBlock
```vue
<template>
    <input :value="name" @input="(e) => name = e.target.value" />
</template>
<script setup>
  const name = ref('')
</script>
```
::

::CodeDescription
The input component would have emitted an event on update or change that contains the value of the input.
::

::Paragraph
Code is more greatly simplified when components have both a child and grandchild or greater.
::

::ContentH2
Example of Child that alters data consumed in both parent and grandchild
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
This component, 'FilterPanel.vue', is the child of a component, called 'Recipes.vue', and the parent of 'FilterAuthor.vue'.
It passes the data through to the grandchild and parent but also alters the data in the middle while still being very simplistic. (There were more filter components that I've removed to make this example clearer.)
FilterAuthor is the grandchild of 'Recipes.vue' that calls an api on change of the selectedAuthor value.
::

::CodeDescription
clearFilters clears the values of the variable consumed in both the grandchild input components and the parent container.
The grandchild can also set the value but still only needs to define a v-model.
There's no need to add functions to handle these values.
::

::Paragraph
This pattern carried across a large application in React would require increased complexity to carry out the same behavior. 
::

::ContentH2
React passes values and listens for events in the same way the Vue would if v-model didn't exist
::

::CodeBlock
```jsx
import { useState } from 'react';

function Input({ label }) {
    const [text, setText] = useState('');

    function handleChange(e) {
        setText(e.target.value);
    }

    return (
        <label>
            {label}
            {' '}
            <input
                value={text}
                onChange={handleChange}
            />
        </label>
    );
}
```
::

::CodeDescription
In comparison, React has the added handler from the handleChange function on change, and passes the text to value.
In the scenario of the Parent / Child / Grandchild, those functions would also have to be passed with the value.
::

::Paragraph
I believe this is just one area where Vue is better than React and there are others that I will cover in future blog posts.
Personally, I would choose Vue over React when starting a new application or re-developing a poor quality React application.
The benefits of v-model, in my opinion, wouldn't be enough to justify rewriting a high quality React application but may be worth considering in some scenarios.
::

::Paragraph
Let me know if you found content insightful.  Feel free to reach out to me with any questions on :LinkedinLink.
::








