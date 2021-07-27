---
title: v-model personnalisé
description: Création d’un v-model personnalisé.
---

## Syntaxe

Il est possible de définir un v-modèle personnalisé. Il faut utiliser une sytnaxe particulière de [Vue Class Component](https://github.com/vuejs/vue-class-component). 

Pour cela faut ajouter l'attribut `model` dans le décorateur `@Component`, il faut y définir le nom de la prop qui permettra de récupérer la valeur du v-model personnalisé et le nom de l'event.

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
