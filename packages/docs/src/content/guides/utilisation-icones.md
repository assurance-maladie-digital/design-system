---
title: Utilisation des icônes
description: Utilisation des composants `VIcon` et `CustomIcon` pour afficher des icônes.
---

## VIcon

Le composant [`VIcon`](https://vuetifyjs.com/en/components/icons/) de Vuetify est utilisé pour afficher les icônes. Par défaut, nous le configurons pour utiliser les icônes SVG Material.

Vous pouvez retrouver la liste des icônes sur [`Material Design Icons`](https://materialdesignicons.com).

```vue
<template>
	<VIcon>
		{{ userIcon }}
	</VIcon>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiAccountCircleOutline } from '@mdi/js';

	@Component
	export default class VIconExample extends Vue {
		userIcon = mdiAccountCircleOutline;
	}
</script>
```

## CustomIcon

Le composant [CustomIcon](/composants-techniques/custom-icon) permet d’ajouter des icônes SVG personnalisées afin de les utiliser dans votre application.

### Création

Vous devez définir la liste de vos icônes personnalisées dans le fichier `src/assets/icons.ts` en utilisant la syntaxe suivante :

```ts
export const icons = {
	digital: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" focusable="false"><path d="M69 35c0 18.8-15.4 34-34.5 34C15.5 69 0 53.8 0 35S15.4 1 34.5 1C53.5 1 69 16.2 69 35" fill="currentColor"/><path d="M23.6 19.3l6.8 3.9v-7.8l-6.8 3.9zm8.6 7v18.5l7.7-4.5v-9.6l-7.7-4.5zm-9.5 25l8.6 4.8 18-10.3V25l-17.1-9.7v8.8l9 5.2c.3.2.5.4.5.8v10.6c0 .4-.2.6-.5.8L31.7 47c-.2.2-.6.2-.8 0a.9.9 0 01-.5-.7V25.2l-7.7-4.4v30.4zm8.6 6.7l-.4-.1-9.5-5.4a.9.9 0 01-.4-.8V19.3c0-.3.2-.6.4-.8l9.5-5.4.4-.1h.3l.1.1L50.6 24c.2.1.4.4.4.7v21.7c0 .3-.2.6-.4.7L31.7 58l-.4.1z" fill="#fff"/></svg>'
};
```

Ensuite, vous devez importer cette liste et l’utiliser dans le fichier `src/plugins/vue-dot.ts` :

```ts
import Vue from 'vue';

import { icons } from '@/assets/icons';

import VueDot from '@cnamts/vue-dot';

Vue.use(VueDot, {
	theme: {
		icons
	}
});
```

### Utilisation

Vous pouvez maintenant afficher vos icônes personnalisées grâce au composant `CustomIcon` :

```vue
<template>
	<CustomIcon icon="digital" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class CustomIconExample extends Vue {}
</script>
```
