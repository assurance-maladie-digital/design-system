---
title: Validation d'un formulaire
description: Création et validation d'un formulaire dans un projet standard.
position: 27
---

## Création du formulaire

Pour créer notre formulaire, nous allons utiliser le [composant `VForm` de Vuetify](https://vuetifyjs.com/en/components/forms/).

Nous allons créer un formulaire avec quelques informations, pour cela nous ajoutons un titre, plusieurs champs textes et un bouton de validation :

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
		lastName = '';
		firstName = '';
		email = '';
	}
</script>
```

<doc-example file="guides/form-validation/base-form"></doc-example>

## Validation du formulaire

### Règles de validation

Dans Vuetify, les règles de validation se présentent sous la forme d'un tableau de fonctions appliqué sur les composants via la prop `rules`.<br>
Si la règle renvoie une chaîne de caractères, celle-ci est affichée comme erreur. Si la règle renvoie `true`, une erreur est affichée sans message. Si la règle renvoie `false`, aucune erreur n'est affichée.

Ici, nous allons utiliser les règles `required` et `email` de la bibliothèque de règles de Vue Dot :

```ts
import Vue from 'vue';
import Component from 'vue-class-component';

import { required } from '@cnamts/vue-dot/src/rules/required';
import { email } from '@cnamts/vue-dot/src/rules/email';

@Component
export default class UserForm extends Vue {
	lastName = '';
	firstName = '';
	email = '';

	nameRules = [
		required
	];

	emailRules = [
		required,
		email
	];
}
```

Ensuite, nous allons ajouter la prop `rules` sur chaque de notre formulaire :

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

Nous utilisons la prop `validate-on-blur` pour déferrer la validation au moment où l'utilisateur focus un autre élément.

</doc-alert>

Vous pouvez tester la fonctionnalité que nous venons d'implémenter en remplissant par exemple le champ email avec une adresse erronée :

<doc-example file="guides/form-validation/rules-form"></doc-example>

### Bouton de validation

Pour implémenter notre bouton de validation, nous allons appeler la méthode `validate` du composant `VForm`. Pour ce faire, nous allons ajouter une référence sur ce composant, ce qui nous permettra d'y accéder dans une méthode :

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

La déclaration de type `$refs` permet d'augmenter le type par défaut d'une référence, et donc de déclarer les méthodes `validate` et `reset` sur la ref `form`.

</doc-alert>

Nous pouvons maintenant appeler la méthode `validate`, qui va effectuer la validation du formulaire et nous retourner un booléen correspondant à la validité du formulaire :

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

La méthode `submitDeclaration` est déclarée comme asynchrone grâce au mot-clé `async` et son type de retour est donc une promesse `Promise<void>`.<br>
Il est nécessaire de déclarer cette fonction comme telle car nous appelons la méthode `$nextTick`, afin d'attendre le prochain cycle de rendu du composant et que la validation faite par Vuetify soit effective.<br>
Sans cela, la validation ne fonctionnera pas correctement.

</doc-alert>

Maintenant, en appuyant sur le bouton de validation sans remplir correctement les champs, le formulaire est bien validé :

<doc-example file="guides/form-validation/final-form"></doc-example>
