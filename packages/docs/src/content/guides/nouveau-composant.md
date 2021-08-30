---
title: Nouveau composant
description: Création d’un nouveau composant dans un projet standard.
---

## Syntaxe

<doc-indent>

Pour écrire les composants, il est recommandé d’utiliser la syntaxe de classes via [Vue Class Component](https://github.com/vuejs/vue-class-component), combinée à la syntaxe de [composants monofichiers](https://fr.vuejs.org/v2/guide/single-file-components.html).

</doc-indent>

La syntaxe de composants monofichiers permet d’écrire le template, la logique et les styles d’un composant dans un seul fichier avec l’extension `.vue`. Ces différentes sections sont liées, et les réunir rend le composant plus cohérent et plus facile à maintenir.

La syntaxe de classes permet une meilleure intégration entre Vue.js et TypeScript, en attendant de pouvoir utiliser la nouvelle syntaxe apportée par Vue.js 3 qui offre une meilleure intégration native.

La définition minimale d’un composant est la suivante :

```vue
<template>
	<div>Hello World</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class HelloWorld extends Vue {}
</script>
```

### Sections du composant

Chaque composant est divisé en trois sections :
- La section `<template>` qui contient le code HTML qui sera compilé par Vue.js, puis rendu dans le navigateur.
- La section `<script>` qui contient les données, méthodes, props, etc.
- La section `<styles>` qui contient les styles liés au composant.

### Décorateur

Le décorateur `@Component` est un élément spécifique qui permet d’annoter la classe `HelloWorld` en tant que composant Vue.js.

<doc-alert type="info">
Le nom du composant est défini par le nom de la classe.
</doc-alert>

### Données

Les propriétés ajoutées au corps de la classe correspondent aux données du composant, qui sont réactives et que vous pouvez utiliser dans la section `<template>` :

```vue
<template>
	<div>Hello {{ message }}</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class HelloWorld extends Vue {
		message = 'world';
	}
</script>
```

<doc-alert type="warning">

Avec Vue Class Component, la valeur par défaut d’une donnée ne doit pas être `undefined`, auquel cas la donnée ne sera pas réactive.

</doc-alert>

### Méthodes

Les fonctions déclarées dans le corps de la classe correspondent aux méthodes du composant :

```vue
<template>
	<button @click="hello">
		Click
	</button>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class HelloWorld extends Vue {
		hello(): void {
			console.log('Hello World!');
		}
	}
</script>
```

### Propriétés calculées

Les accesseurs (*getters*) définis dans le corps de la classe correspondent aux propriétés calculées :

```vue
<template>
	<div>Hello {{ message }}</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class HelloWorld extends Vue {
		get message(): string {
			return 'world';
		}
	}
</script>
```

Celles-ci se comportent comme des méthodes, mais Vue.js va mettre en cache leur valeur et ne la mettre à jour que si l’une des dépendances de la propriété calculée est mise à jour (comme une donnée ou une prop).

#### Mutateur calculé

Par défaut, les propriétés calculées n’ont qu’un accesseur (*getter*), mais vous pouvez également définir un mutateur (*setter*) avec le mot-clé `set` :

```ts
export default class HelloWorld extends Vue {
	get fullName(): string {
		return `${this.firstName} ${this.lastName}`;
	}

	set name(newValue): void {
		const names = newValue.split(SPACE_CHARACTER);

		this.firstName = names[0];
		this.lastName = names[names.length - 1];
	}
}
```

### Hooks

Les méthodes nommées après un événement du [cycle de vie du composant](https://fr.vuejs.org/v2/guide/instance.html#Diagramme-du-cycle-de-vie) seront automatiquement détectées comme *hooks* et exécutées au moment correspondant :

```ts
export default class HelloWorld extends Vue {
	mounted() {
		this.makeApiCall();
	}
}
```

<doc-alert type="info">

Vous n’avez pas besoin de définir de type de retour sur les *hooks*.

</doc-alert>

### Props

Pour déclarer des props et que les types de celles-ci soient pris en compte par TypeScript, il est nécessaire d’utiliser une syntaxe spéciale afin de créer un objet qui étend l’instance par défaut de Vue, et que la classe du composant étende cet objet :

```ts
import Vue from 'vue';

const Props = Vue.extend({
	props: {}
});

export default class HelloWorld extends Props {}
```

Si vous souhaitez utiliser les mixins pour partager du code, vous devrez utiliser la fonction d’aide `mixins` fournie par Vue Class Component qui permet d’étendre plusieurs objets et classes.

Nous recommandons de toujours utiliser cette syntaxe afin d’écrire les composants de manière standard.

Voici un exemple complet d’un composant avec des props :

```vue
<template>
	<div>Hello {{ message }}</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			message: {
				type: String,
				default: 'world'
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class HelloWorld extends MixinsDeclaration {}
</script>
```

### Autres options

Les autres options comme `components` ou `watch` doivent être passées comme paramètres du décorateur :

```vue
<template>
	<OtherComponent />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import OtherComponent from './OtherComponent.vue';

	@Component({
		components: {
			OtherComponent
		}
	})
	export default class HelloWorld extends Vue {}
</script>
```

Si vous souhaitez accéder à un membre de la classe (avec le mot clé `this`) dans un `watch`, vous devez surcharger le type du décorateur en passant la classe comme paramètre (`@Component<HelloWorld>`) :

```vue
<template>
	<input v-model="fullName" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component<HelloWorld>({
		watch: {
			fullName(newValue: string): void {
				const names = newValue.split(SPACE_CHARACTER);

				this.firstName = names[0];
				this.lastName = names[names.length - 1];
			}
		}
	})
	export default class HelloWorld extends Vue {
		fullName: string | null = null;
		firstName: string | null = null;
		lastName: string | null = null;
	}
</script>
```
