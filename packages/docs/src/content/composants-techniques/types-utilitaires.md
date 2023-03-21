---
title: Types utilitaires
description: Liste des types utilitaires et des enums.
---

## Types utilitaires

### Références

Vous pouvez typer les références que vous avez créé sur vos composants en utilisant le type `Refs`.

Par exemple, pour typer une référence à un formulaire :

```vue
<template>
	<form ref="form">
		…
	</form>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Refs } from '@cnamts/vue-dot/src/types';

	@Component
	export default class UserForm extends Vue {
		$refs!: Refs<{
			form: HTMLFormElement;
		}>;
	}
</script>
```

### Formulaires Vuetify

Vous pouvez utiliser l’interface `VForm` pour typer une référence à ce composant :

```vue
<template>
	<VForm ref="form">
		…
	</VForm>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Refs, VForm } from '@cnamts/vue-dot/src/types';

	@Component
	export default class UserForm extends Vue {
		$refs!: Refs<{
			form: VForm;
		}>;
	}
</script>
```

Cette interface définit les méthodes `validate`, `reset` et `resetValidation` du composant [`VForm`](https://vuetifyjs.com/en/components/forms/).

### Vue Input Facade

Vous pouvez utiliser l’interface `InputFacadeEvent` pour typer un événement émit en utilisant [la directive](https://github.com/RonaldJerez/vue-input-facade) :

```vue
<template>
	<VTextField
		v-facade="mask"
		@input.native="setInternalValue"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { InputFacadeEvent } from '@cnamts/vue-dot/src/types';

	@Component
	export default class CustomField extends Vue {
		internalValue: string | null = null;

		setInternalValue(event: InputFacadeEvent): void {
			this.internalValue = event.target?.unmaskedValue ?? null;
		}
	}
</script>
```

<doc-alert type="info">

Le [modificateur `native`](https://v2.vuejs.org/v2/guide/components-custom-events.html#Binding-Native-Events-to-Components) permet de récupérer l’événement natif émit, qui contient la propriété `unmaskedValue`.

</doc-alert>

### Objet avec un type d’index

Vous pouvez utiliser le type `IndexedObject` pour typer un objet et définir le type de sa clé.

Par exemple, avec l’objet suivant :

```ts
const colorMapping = {
	white: '#fff',
	black: '#000'
};
```

Si l’on essaie de récupérer une valeur de l’objet avec une variable pour la clé :

```ts
const selectedColor: string = 'white';
const color = colorMapping[selectedColor]; // Erreur 7053
```

Le compilateur TypeScript retournera une erreur car, par défaut, il n’est pas possible de récupérer une valeur de l’objet avec une clé de type `string`.

Le type `IndexedObject` permet de résoudre ce problème en autorisant d’utiliser une clé de type `string` :

```ts
import { IndexedObject } from '@cnamts/vue-dot/src/types';

const colorMapping: IndexedObject = {
	white: '#fff',
	black: '#000'
};

const selectedColor: string = 'white';
const color = colorMapping[selectedColor]; // Pas d'erreur
```

#### Argument typé

Vous pouvez également modifier le type de valeur en le spécifiant en paramètre :

```ts
import { IndexedObject } from '@cnamts/vue-dot/src/types';

const sizeMapping: IndexedObject<number> = {
	small: 96,
	large: 1024
};

const selectedSize: string = 'small';
const size = sizeMapping[selectedSize]; // Pas d'erreur
```

## Enums

### Gestion d’état

Vous pouvez utiliser l’enum `StateEnum` pour créer une variable de gestion d’état :

```ts
import { StateEnum } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

import { postForm } from '@/services/postForm/api';

const state: StateEnum = StateEnum.IDLE;

async function sendForm(): Promise<void> {
	state = StateEnum.PENDING;

	try {
		await postForm({
			// …
		});
	
		state = StateEnum.RESOLVED;
	} catch {
		state = StateEnum.REJECTED;
	}
}
```

#### Ancienne syntaxe

[L’ancienne syntaxe de l’enum](https://github.com/assurance-maladie-digital/design-system/blob/dev/packages/vue-dot/src/constants/enums/StateEnum.ts#L9) est toujours disponible, mais est dépréciée.
