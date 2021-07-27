---
title: Nouveau composant
description: Création d’un nouveau composant dans un projet standard.
---

## Syntaxe

Il est possible de définir un v-modèle personnalisé. Il faut utiliser [Vue Class Component](https://github.com/vuejs/vue-class-component).

Un v-model personnalisé requiert une valeur et un event qui permettra de mettre à jour la valeur..

La syntaxe de classes permet une meilleure intégration entre Vue.js et TypeScript, en attendant de pouvoir utiliser la nouvelle syntaxe apportée par Vue.js 3 qui offre une meilleure intégration native.

Il faut ajouter l'attribut `model` dans le décorateur `@Component`, il y est défini la prop qui permettra de récupérer la valeur du v-model personnalisé et le nom de l'event.

```vue
<template>
	<VTextField
		:value="value"
		class="vd-form-input"
		label="Nom"
		@change="emitChangeEvent"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			value: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class HelloWorld extends MixinsDeclaration {
		emitChangeEvent(value: string): void {
			this.$emit('change', value);
		}
	}
</script>
```
