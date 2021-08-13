---
title: v-model personnalisé
description: Création et utilisation d’un v-model personnalisé.
---

## Syntaxe

<doc-indent>

Pour définir un `v-model` personnalisé, vous devez ajouter la propriété `model` dans le décorateur `@Component`, définir une prop pour récupérer la valeur du `v-model` ainsi que l’événement pour mettre à jour celle-ci :

</doc-indent>

```vue
<template>
	<VTextField
		:value="value"
		label="Nom"
		class="vd-form-input"
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
	export default class CustomField extends MixinsDeclaration {
		emitChangeEvent(value: string): void {
			this.$emit('change', value);
		}
	}
</script>
```

## Utilisation

Une fois que vous avez défini votre `v-model` personnalisé, vous pouvez l’utiliser comme un `v-model` classique :

```vue
<template>
	<CustomField v-model="fieldValue" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ParentComponent extends Vue {
		fieldValue: string | null = null;
	}
</script>
```

<doc-alert type="info">

Pour en savoir plus sur les `v-model` personnalisés, vous pouvez consulter la [documentation de Vue.js](https://fr.vuejs.org/v2/guide/components-custom-events.html#Personnaliser-le-v-model-du-composant).

</doc-alert>
