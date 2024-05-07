---
title: Guide de migration
description: Guide de migration pour les développeurs.
---

## 1 - Débuter la migration

Pour réaliser la migration d'un produit VueJS 2 vers VueJS 3, vous pouvez suivre les étapes suivantes :

1.1 - Téléchargez la stack de migration [starter-kit-vue-bridge](https://github.com/assurance-maladie-digital/starter-kit-vue-bridge/tree/dev)

1.2 - Copier le contenu dossier `src` de votre projet VueJS 2 dans le dossier `src` du projet `starter-kit-vue-bridge`

1.3 - Ajouter les dépendances à jour de votre projet VueJS 2 dans le nouveau projet `starter-kit-vue-bridge`

1.4 - Dans le fichier `nuxt.config.ts`, ajouter le lien vers votre fichier de style global.

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
	...
	css: [
		...
		'@/theme/styles.scss' // chemin vers votre fichier de style global
	],
	...
})
```



## 2 - Migration du routeur

2.1 - Mettre à jour le tableau de déclaration des routes vue-router avec la version 4.

Par exemple, pour créer une route par défaut :

```typescript
// src/router/index.ts
[
	... // les routes existantes
	{
		path: '/*',
		name: 'test',
		component: () => import('@/views/Test.vue')
	},
]
```

a été remplacé par :

```typescript
	...
	path: '/:pathMatch(.*)*',
	...
```

Voir [le guide de migration de vue-router](https://router.vuejs.org/guide/migration/) pour plus d'informations.

2.2 - Dans le fichier ‘app/router.options.ts’, mettre à jour le path de votre fichier de configuration de route si besoin.

Le fichier `app/router.options.ts` est chargé automatiquement par Nuxt, et permet de surcharger les routes par défaut de
Nuxt.
Pour plus d'informations,
voir [cette page de documentation de Nuxt](https://nuxt.com/docs/guide/going-further/custom-routing).

2.3 - Dans la version 4 de vue-router, certains types ont été remplacés. Il faut effectuer les changements de types dans le projet.

- `RouteConfig` devient `RouteRecordRaw`,
- `Location` devient `RouteLocation`,
- `Route` devient `RouteLocationNormalized`.


## 3 - Migration des stores VueX


3.1 - Importer l'instance de store VueX dans le fichier '/plugins/vuex.ts'.

```typescript
import { store } from '@/store';

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.use(store);
});
```

3.2 - Suivre les étapes de migration [de VueX 3 vers VueX 4](https://vuex.vuejs.org/guide/migrating-to-4-0-from-3-x.html).



## 4 - Animations des pages

Si le projet utise des transitions de page,

4.1 - Retirer le composant `<transition>` dans le fichier 'app.vue'

4.2 - Configurer une transition de page dans le fichier 'nuxt.config.ts'

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
	...
	app: {
		...
		pageTransition: {
			name: 'page',
			mode: 'out-in'
		}
	}
```

4.3 - Définir le style de la transition dans un fichier de style global.

```css
.page-enter-active,
.page-leave-active {
	transition-duration: .15s;
	transition-property: opacity;
	transition-timing-function: ease;
}

.page-enter,
.page-leave-active {
	opacity: 0;
}
```


## 5 - Utilisation du script [vue-class-migrator](https://github.com/getyourguide/vue-class-migrator)

vue-class-migrator est un script permettant de migrer automatiquement les composants vueJs écris avec vue-class-component à la syntaxe native VueJs Option API

5.1 - Supprimer tous les décorateurs personnalisés, ils ne seront pas reconnus par vue-class-migrator et causeront l'échec de la migration du composant.

5.2 - Executer la commande `npx vue-class-migrator -d .` à la racine de votre projet.

5.3 - Consulter les logs dans le terminal pour repérer les éventuels composants causant des erreurs et n'ayant pas pu être migré automatiquement.

5.4 - Si vous avez déclaré vos props en tant que mixins dans vos composants en utilisant le helper 'mixin' de vue-class-componant, modifier l'import de la mixin dans le composant.


```typescript
	const Props = Vue.extend({
		props: {
			foo: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

		export default defineComponent({
		extends: MixinsDeclaration,
```

devient :

```typescript
	const Props = defineComponent({
		props: {
			displayInfo: {
				type: Boolean,
				default: false
			}
		}
	});

	export default defineComponent({
		extends: Props,
		...
```

5.5 - Implémenter les fonctionnalités  qui utilisaient des décorateurs retiré à l'étape 1 en utilisant l'option API, des mixins ou des composables.

Par example : la gestion des [tag metas](https://nuxt.com/docs/migration/meta#options-api)
```typescript
@Meta
metaInfo(): MetaInfo {
	return {
		title: 'Page title',
		meta: [
			{
					name: 'description',
					vmid: 'description',
					content: 'This is my page description.'
			}
		]
	};
}
```

Devient :

```typescript
export default defineNuxtComponent({
	head() {
		return {
			title: 'Page title',
			meta: [
				{
					name: 'description',
					content: 'This is my page description.'
				}
			]
		}
	}
	...
```


Pour localiser les informations :


```typescript
	head(nuxtApp) {
		return {
			title: nuxtApp.i18n.t('page.currentPage.meta.title'),
			meta: [
				{
					name: 'description',
					content: nuxtApp.i18n.t('page.currentPage.meta.description')
				}
			]
		}
	}
```

## 6 - Migration des composants Vuetify

Pour faciliter la migration des composants Vuetify, ce starter kit intègre le
plugin [eslint-plugin-vuetify](https://github.com/vuetifyjs/eslint-plugin-vuetify).
Il permet de faire remonter certains problèmes tels que des props qui n'existent plus ou dont le nom a changé. Certains
changements peuvent être effectués automatiquement.

```bash
$ pnpm lint:migrate:fix
```

Voici un aperçu des changements qui seront effectués par le script :

```diff
// passage de la syntaxe vue2 a vue3 pour la réactivité :
- value
+ modelValue

- xxx.sync
+ v-model:xxx

// Changement de nom de certaines props :
- outlined
+ variant="outlined"
- accordion
+ variant="accordion"
- text
+ variant="text"
- background-color="xxx"
+ bg-color="xxx"
- top
+ location="top"
- large
+ size="large"
...

// Autres changements concernants les props :
- validate-on-blur
+ :validate-on="blur"

// Changement concernants les events :
- @change
+ @update:model-value

// Changement de nom de certains composants :
- VExpansionPanelHeader
+ VExpansionPanelTitle
- VExpansionPanelContent
+ VExpansionPanelText
- VSimpleCheckbox
+ VCheckboxBtn
...
```
Ces changements seront uniquement effectués sur les composants Vuetify.


## 7 - Migration des tests unitaires et de composants

Les tests unitaires et de composants doivent être mis à jour pour être compatibles avec VueJS 3.
Ils utilisent désormais `vitest` et `@nuxt/test-utils` pour les tests de composants.

L'API de Vitest est similaire a celle de Jest, pour faire des mocks il faut désormais utiliser `vi` au lieu de `jest`.

Pour l'utilisation de `@nuxt/test-utils`, voir la [documentation](https://nuxt.com/docs/getting-started/testing).
