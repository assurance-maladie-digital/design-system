---
title: Validation d’un formulaire
description: Création et validation d’un formulaire dans un projet standard.
---

## Création du formulaire

Pour créer le formulaire, vous pouvez utiliser le [composant `VForm` de Vuetify](https://vuetifyjs.com/en/components/forms/) et ajouter un titre, des champs textes et un bouton de validation :

```vue
<template>
	<VForm>
		<h2 class="text-h6 font-weight-bold mb-4">
			Informations du patient
		</h2>

		<VTextField
			v-model="lastName"
			label="Nom"
			outlined
			class="vd-form-input"
		/>

		<VTextField
			v-model="firstName"
			label="Prénom"
			outlined
			class="vd-form-input mt-4"
		/>

		<VTextField
			v-model="email"
			label="Email"
			outlined
			class="vd-form-input mt-4"
		/>

		<VBtn
			large
			block
			height="56px"
			color="primary"
			class="mt-8"
		>
			Valider
		</VBtn>
	</VForm>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class UserForm extends Vue {
		lastName: string | null = null;
		firstName: string | null = null;
		email: string | null = null;
	}
</script>
```

<doc-example file="guides/form-validation/base-form"></doc-example>

## Validation du formulaire

### Règles de validation

Dans Vuetify, les règles de validation se présentent sous la forme d’un tableau de fonctions appliqué sur les composants via la prop `rules`.<br>
Si la règle renvoie une chaîne de caractères, celle-ci est affichée comme erreur. Si la règle renvoie `true`, une erreur est affichée sans message. Si la règle renvoie `false`, aucune erreur n’est affichée.

Dans notre formulaire, vous pouvez utiliser les règles `required` et `email` de la bibliothèque de règles de Vue Dot :

```ts
import Vue from 'vue';
import Component from 'vue-class-component';

import { required } from '@cnamts/vue-dot/src/rules/required';
import { email } from '@cnamts/vue-dot/src/rules/email';

@Component
export default class UserForm extends Vue {
	lastName: string | null = null;
	firstName: string | null = null;
	email: string | null = null;

	nameRules = [
		required
	];

	emailRules = [
		required,
		email
	];
}
```

Ensuite, vous devez ajouter la prop `rules` sur chacun des champs du formulaire :

```vue
<VTextField
	v-model="email"
	:rules="emailRules"
	label="Email"
	outlined
	validate-on-blur
	class="vd-form-input mt-4"
/>
```

<doc-alert type="info">

La prop `validate-on-blur` sert à déferrer la validation au moment où l’utilisateur sort du champ.

</doc-alert>

Vous pouvez tester la fonctionnalité implémentée en remplissant par exemple le champ email dans l’exemple ci-dessous avec une adresse email erronée :

<doc-example file="guides/form-validation/rules-form"></doc-example>

### Bouton de validation

Pour implémenter notre bouton de validation, vous pouvez appeler la méthode `validate` du composant `VForm`. Pour ce faire, vous devez ajouter une [référence](https://fr.vuejs.org/v2/guide/components-edge-cases.html#Acceder-a-des-instances-de-composants-enfants-et-des-elements-enfants) sur ce composant, ce qui vous permettra d’y accéder dans une méthode :

```vue
<template>
	<VForm ref="form">
		…
	</VForm>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	// … imports

	interface FormRef {
		validate: () => boolean;
		reset: () => void;
	}

	@Component
	export default class UserForm extends Vue {
		$refs!: Refs<{
			form: FormRef;
		}>;

		// … variables et règles
	}
</script>
```

<doc-alert type="info">

La déclaration de type `$refs` permet d’augmenter le type par défaut d’une référence, et donc de déclarer les méthodes `validate` et `reset` sur la propriété `form`.

</doc-alert>

Vous pouvez maintenant appeler la méthode `validate`, qui va effectuer la validation du formulaire et retourner un booléen correspondant à la validité de celui-ci :

```vue
<template>
	<VForm ref="form">
		<VBtn
			large
			block
			height="56px"
			color="primary"
			class="mt-8"
			@click="submitDeclaration"
		>
			Valider
		</VBtn>
	</VForm>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Refs } from '@cnamts/vue-dot/src/types';

	// … autres imports

	interface FormRef {
		validate: () => boolean;
		reset: () => void;
	}

	@Component
	export default class UserForm extends Vue {
		$refs!: Refs<{
			form: FormRef;
		}>;

		// … règles de validation

		async submitDeclaration(): Promise<void> {
			await this.$nextTick();

			if (this.$refs.form.validate()) {
				// Formulaire valide
			}
		}
	}
</script>
```

<doc-alert type="warning">

La méthode `submitDeclaration` est déclarée comme asynchrone grâce au mot-clé `async` et son type de retour est une promesse `Promise<void>`.<br>
Il est nécessaire de déclarer cette fonction comme telle pour appeler la [méthode `$nextTick`](https://fr.vuejs.org/v2/guide/reactivity.html#File-d%E2%80%99attente-de-mise-a-jour-asynchrone) de manière asynchrone, afin d’attendre le prochain cycle de rendu du composant et que la validation faite par Vuetify soit effective.<br>
Sans cela, la validation ne fonctionnera pas correctement.

</doc-alert>

Maintenant, en appuyant sur le bouton de validation sans remplir correctement les champs, le formulaire est bien validé :

<doc-example file="guides/form-validation/final-form"></doc-example>
