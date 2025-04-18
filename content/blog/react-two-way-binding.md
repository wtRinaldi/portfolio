---
date: '4.18.2025'
description: 'Adding two way binding to React via hooks'
type: 'frameworks'
img: '/double-arrow.svg'
---

::ContentH1
React Two Way Binding
::

::SubTitle
Adding two way binding to React via hooks
::

::Paragraph
Previously, I had discussed that React lacks the two-way syntatic sugar that is Vue's `v-model`.  This is how you would recreate that pattern in React.
::

:::ContentLink{to="/blog/vue-vs-react"}
Vue vs React
:::

::ContentH2
Create the `useModel` hook
::


::CodeBlock
```jsx
import { useState } from 'react';

export function useModel(initialValue) {
  const [value, setValue] = useState(initialValue);
  return {
    value,
    onChange: setValue,
  };
}

```
::

::CodeDescription
This hook returns an object with both value and onChange, like Vue’s model binding system.
::

::CodeBlock
```jsx
// MyInput.jsx
import React from 'react';

function MyInput({ model }) {
  return (
    <input
      value={model.value}
      onChange={(e) => model.onChange(e.target.value)}
    />
  );
}

export default MyInput;

```
::

::CodeDescription
It takes in one prop — model — which contains both the value and change handler.
::


::CodeBlock
```jsx
import React from 'react';
import { useModel } from './useModel';
import MyInput from './MyInput';

function MyForm() {
  const username = useModel('');

  return (
    <div>
      <MyInput model={username} />
      <p>Hello, {username.value}</p>
    </div>
  );
}

```
::

::CodeDescription
Finally, consume the `useModel` React hook to pass a single model prop.
::

::ContentH2
Conclusion
::

::Paragraph
If you see the benefit of Vue's `v-model` but you're not in a position to change frameworks, a simple hook can provide that functionality.
::

::Paragraph
Let me know if you found this content insightful. Feel free to reach out to me with any questions on :LinkedinLink.
::
