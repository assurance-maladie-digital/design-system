---
title: propValidator
description: Le helper `propValidator` permet de valider les props d'un composant.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```html
<template>
  <div :style="{ backgroundColor: color, fontSize: size }">
  Click me
</div>
</template>

<script>
import { propValidator } from '@cnamts/vue-dot/src/helpers/propValidator';

export default {
  name: 'Button',
  props: {
    color: {
      type: String,
      required: true,
      validator: (value: string) => propValidator('color', ['red', 'green', 'blue'], value)
    },
    size: {
      type: String,
      required: true,
      validator: (value: string) => propValidator('size', ['small', 'medium', 'large'], value)
    }
  }
};
</script>
```

```html
<template>
  <Button color="red" size="medium" />
</template>
```
</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/prop-validator"></doc-api>
</doc-tab-item>

</doc-tabs>
