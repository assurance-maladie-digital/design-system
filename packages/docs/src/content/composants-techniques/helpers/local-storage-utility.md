---
title: localStorageUtility
description: Le helper `localStorageUtility` offre une gestion de l'expiration et du versioning des données stockées en localStorage.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

```ts
import Vue from 'vue';
import Vuetify from 'vuetify';

import {
  key,
  getItem,
  setItem,
  removeItem,
  clear,
  getAll
} from '@cnamts/vue-dot/src/helpers/localStorageUtility';

describe('localStorageUtility', () => {
  it('sets an item', () => {
    setItem('foo', 'bar');

    expect(localStorage.setItem).toHaveBeenCalledWith(
      key('foo'),
      JSON.stringify({
        value: 'bar',
        version: 1,
        expiresAt: null
      })
    );
  });

  it('gets an item', () => {
    getItem('foo');

    expect(localStorage.getItem).toHaveBeenCalledWith(key('foo'));
  });

  it('removes an item', () => {
    removeItem('foo');

    expect(localStorage.removeItem).toHaveBeenCalledWith(key('foo'));
  });

  it('clears all items', () => {
    clear();

    expect(localStorage.clear).toHaveBeenCalled();
  });

  it('gets all items', () => {
    getAll();

    expect(localStorage.getItem).toHaveBeenCalledWith(key('foo'));
  });
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/local-storage-utility"></doc-api>
</doc-tab-item>

</doc-tabs>
