---
title: localStorageUtility
description: Le helper `localStorageUtility` permet de gérer le stockage de données dans le localStorage avec du versioning et de l’expiration.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

### Instanciation

Lors de l’instanciation du helper `localStorageUtility`, vous pouvez spécifier une version et/ou une durée d’expiration.

```ts
import { LocalStorageUtility } from '@cnamts/vue-dot/src/helpers/localStorageUtility';

const localStorageUtility = new LocalStorageUtility(
	'1',
	1000 // en millisecondes
);
```

Il est également possible de modifier le préfixe `vd-` utilisé par défaut.

```ts
import { LocalStorageUtility } from '@cnamts/vue-dot/src/helpers/localStorageUtility';

const localStorageUtility = new LocalStorageUtility(
	undefined,
	undefined,
	'app-'
);
```

### setItem

La fonction `setItem` permet de stocker une donnée dans le localStorage.

```ts
localStorageUtility.setItem<string>('key', 'value');
```

### getItem

La fonction `getItem` permet de récupérer une donnée dans le localStorage.

```ts
localStorageUtility.getItem<string>('key');
```

### removeItem

La fonction `removeItem` permet de supprimer une donnée dans le localStorage.

```ts
localStorageUtility.removeItem('key');
```

### clear

La fonction `clear` permet de supprimer toutes les données dans le localStorage.

```ts
localStorageUtility.clear();
```

### getAll

La fonction `getAll` permet de récupérer toutes les données dans le localStorage.

```ts
localStorageUtility.getAll();
```

### key

La fonction `key` permet de récupérer la clé d’une donnée dans le localStorage.

```ts
localStorageUtility.key(0);
```

### length

Le getter `length` permet de récupérer le nombre de données dans le localStorage.

```ts
console.log(localStorageUtility.length);
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="helpers/localStorageUtility"></doc-api>
</doc-tab-item>

</doc-tabs>
