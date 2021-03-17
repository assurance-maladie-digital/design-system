---
title: Nouvelle page
description: Création d'une nouvelle page dans un projet standard.
position: 28
---

## Création de la page

Une page est une *Vue* qui contient des composants et qui sera affichée en allant accédant à une URL spécifique grâce à [Vue Router](https://router.vuejs.org/fr/).

Pour cela, vous pouvez créer un nouveau fichier `UserDeclaration.vue` dans le dossier `views` :

```bash
views/
├── tests/
├── About.vue
├── Home.vue
├── Maintenance.vue
├── NotFound.vue
└── +UserDeclaration.vue
```

Une page est également un composant Vue.js, vous pouvez donc initialiser ce fichier avec la [définition minimale d'un composant](/guides/nouveau-composant#syntaxe).

Vous pouvez maintenant importer les composants que vous souhaitez afficher dans cette page et les utiliser dans le template :

```vue
<template>
	<PageCard>
		<UserForm />
	</PageCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import UserForm from '@/components/UserForm.vue';

	@Component({
		components: {
			UserForm
		}
	})
	export default class UserDeclaration extends Vue {}
</script>
```

<doc-alert type="info">

Le [composant `PageCard`](/composants/page-card) est utilisé pour afficher une carte avec une largeur de page standard.

</doc-alert>

### Métadonnées

Il est recommandé d'ajouter des métadonnées comme le titre et la description sur chaque page. Pour cela, vous pouvez utiliser [Vue Meta](https://vue-meta.nuxtjs.org/).

Pour déclarer ces informations, vous pouvez créer une méthode `metaInfo` annotée avec le décorateur `@Meta` :

```ts
import Vue from 'vue';
import Component from 'vue-class-component';

import { Meta, MetaInfo } from '@/decorators';

import UserForm from '@/components/UserForm.vue';

@Component({
	components: {
		UserForm
	}
})
export default class UserDeclaration extends Vue {
	/* istanbul ignore next */
	@Meta
	metaInfo(): MetaInfo {
		return {
			title: this.$t('views.userDeclaration.meta.title') as string,
			meta: [
				{
					name: 'description',
					content: this.$t('views.userDeclaration.meta.description') as string
				}
			]
		};
	}
}
```

<doc-alert type="info">

Le commentaire `/* istanbul ignore next */` permet de ne pas inclure la méthode `metaInfo` dans la couverture de tests.

</doc-alert>

<doc-alert type="info">

Le titre et la description sont stockés dans le fichier de traduction `userDeclaration`.<br>
La méthode `this.$t()` de [Vue i18n](https://kazupon.github.io/vue-i18n/guide/formatting.html) permet de récupérer ces valeurs.

</doc-alert>

## Ajout de la page au routeur

Une fois la page créée, vous devez l'ajouter à la déclaration des routes du routeur dans le fichier `routes.ts` afin de pouvoir y accéder :

```ts
export const routes = [
	{
		path: '/',
		name: 'home',
		component: Home
	},
	{
		path: '/declaration',
		name: 'userDeclaration',
		// Route level code-splitting
		// This generates a separate chunk (user-declaration.[hash].js) for this route
		// which is lazy-loaded when the route is visited
		component: () => import(
			/* webpackChunkName: "user-declaration" */
			'@/views/UserDeclaration.vue'
		)
	},
	// …
];
```

<doc-alert type="info">

La syntaxe `component: () => import('@/views/UserDeclaration.vue')` est un [import dynamique de webpack](https://webpack.js.org/guides/code-splitting/). Cela permet de créer un chunk spécifique pour cette route et de charger celui-ci que lorsque la route est visitée.<br>
La page d'accueil n'est pas importée de manière asynchrone afin de charger cette page le plus rapidement possible.

</doc-alert>

### Accéder à la page

Vous pouvez maintenant accéder à la page `/declaration` dans votre navigateur.

Vous pouvez également créer un lien vers cette page :

```vue
<VBtn
	:to="{
		name: 'userDeclaration'
	}"
	large
	color="primary"
>
	Me déclarer
</VBtn>
```

<doc-alert type="info">
Pour créer des liens, il est préférable d'utiliser le nom de la route plutôt que son chemin, cela permet de modifier le chemin sans casser les liens vers cette page.
</doc-alert>

Vous pouvez aussi utiliser la navigation programmatique pour rediriger l'utilisateur vers cette page :

```ts
router.push({
	name: 'userDeclaration'
});
```
