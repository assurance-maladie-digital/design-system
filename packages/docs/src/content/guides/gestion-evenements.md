---
title: Gestion des événements
description: Création et utilisation des événements entre des composants parents et enfants.
---

## Création depuis le composant enfant

Il est parfois nécessaire qu’un composant enfant remonte des données au composant parent. Pour cela, on utilise les événements.

Pour émettre un événement, vous pouvez utiliser la fonction `this.$emit` depuis le composant enfant :

```ts
this.$emit('change', 'value');
```

Le premier argument de la fonction est le nom de l’événement et le second est la valeur remontée dans l’événement (texte, nombre, objet, …).

## Écoute depuis le composant parent

Pour écouter un événement lancé depuis un composant enfant, vous pouvez utiliser directive [`v-on`](https://vuejs.org/v2/api/#v-on) sur le composant enfant :

```vue
<VTextField @change="emitChangeEvent" />
```

<doc-alert type="info">

Pour améliorer la lisibilité du code, nous utilisons la [syntaxe abrégée](https://fr.vuejs.org/v2/guide/syntax.html#Abreviation-pour-v-on).

</doc-alert>

La valeur de la directive peut être une fonction qui recevra alors en argument la donnée émise par le composant enfant contenue dans l’événement.

Par exemple, vous pouvez définir un composant enfant qui contient un champ de saisie de texte :

```vue
<template>
	<VTextField
		v-model="value"
		label="Nom"
		class="vd-form-input"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ChildComponent extends Vue {
		value: string | null = null;
	}
</script>
```

Ensuite, vous pouvez ajouter la fonction `emitChangeEvent` qui va émettre l’événement `change` avec la valeur saisie dans le champ texte :

```vue
<template>
	<VTextField
		v-model="value"
		label="Nom"
		class="vd-form-input"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ChildComponent extends Vue {
		value: string | null = null;

		emitChangeEvent(): void {
			this.$emit('change', this.value);
		}
	}
</script>
```

<doc-alert type="info">
Le nom de l’événement doit être en kebab-case.
</doc-alert>

L’événement s’appelle `change`, c’est celui-ci qu’il faut écouter dans le composant parent :

```vue
<template>
	<div>
		<ComposantEnfant @change="textUpdated" />

		<p v-if="text">
			{{ text }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ParentComponent extends Vue {
		text: string | null = null;

		textUpdated(text: string): void {
			this.text = formatText(text);
		}
	}
</script>
```
