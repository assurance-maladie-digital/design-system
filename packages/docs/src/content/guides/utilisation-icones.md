---
title: Utilisation des icônes
description: Utilisation des composants `VIcon` et `CustomIcon`.
---

## VIcon

Pour afficher une icône, on utilise le composant [`VIcon`](https://vuetifyjs.com/en/components/icons/) de Vuetify. Ce composant permet d’afficher les icônes [`Material Design Icons`](https://materialdesignicons.com).

```ts
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
	export default class IconExample extends Vue {
		userIcon = mdiAccountCircleOutline;
	}
</script>
```

## CustomIcon

Le composant [CustomIcon](/composants-techniques/custom-icon) permet d’ajouter des SVG en tant qu’icône pour pouvoir les utiliser facilement dans toute votre application.

### Création

L'ajout des icônes customisées est fait dans le fichier `src/plugins/vue-dot.ts` :

```ts
import Vue from 'vue';

// Import VueDot styles
import '@cnamts/vue-dot/dist/vue-dot.css';

// Import dayjs locale
import 'dayjs/locale/fr';

// Register v-facade directive
import InputFacade from 'vue-input-facade';
Vue.use(InputFacade);

import { icons } from '@/assets/icons';

import VueDot from '@cnamts/vue-dot';
Vue.use(VueDot, {
	theme: {
		icons
	}
});
```

Les icônes sont définies dans le fichier `src/assets/icons.ts`: 

```ts
export const icons = {
	digital: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" focusable="false"><path d="M69 35c0 18.8-15.4 34-34.5 34C15.5 69 0 53.8 0 35S15.4 1 34.5 1C53.5 1 69 16.2 69 35" fill="currentColor"/><path d="M23.6 19.3l6.8 3.9v-7.8l-6.8 3.9zm8.6 7v18.5l7.7-4.5v-9.6l-7.7-4.5zm-9.5 25l8.6 4.8 18-10.3V25l-17.1-9.7v8.8l9 5.2c.3.2.5.4.5.8v10.6c0 .4-.2.6-.5.8L31.7 47c-.2.2-.6.2-.8 0a.9.9 0 01-.5-.7V25.2l-7.7-4.4v30.4zm8.6 6.7l-.4-.1-9.5-5.4a.9.9 0 01-.4-.8V19.3c0-.3.2-.6.4-.8l9.5-5.4.4-.1h.3l.1.1L50.6 24c.2.1.4.4.4.7v21.7c0 .3-.2.6-.4.7L31.7 58l-.4.1z" fill="#fff"/></svg>'
};
```

### Utilisation

Il ne reste plus qu’à afficher l’icône `digital` grâce au composant `CustomIcon` :

```ts
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
