---
title: localStorageUtility
description: Le helper `localStorageUtility` permet de manipuler le localStorage.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```vue
<template>
  <div>
    <input v-model="message" type="text" />
    <button @click="saveMessage">Save</button>
    <button @click="loadMessage">Load</button>
    <button @click="clearStorage">Clear storage</button>
    <p>{{ loadedMessage }}</p>
  </div>
</template>

<script>
import { localStorageUtility } from '@cnamts/vue-dot/src/helpers/localStorageUtility';

export default {
  data() {
    return {
      message: '',
      loadedMessage: '',
    };
  },
  methods: {
    saveMessage() {
      const storage = new LocalStorageUtility();
      storage.setItem('message', this.message);
    },
    loadMessage() {
      const storage = new LocalStorageUtility();
      this.loadedMessage = storage.getItem('message');
    },
    clearStorage() {
      const storage = new LocalStorageUtility();
      storage.clear();
    },
  },
};
</script>
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/local-storage-utility"></doc-api>
</doc-tab-item>

</doc-tabs>
