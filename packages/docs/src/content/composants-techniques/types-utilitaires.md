---
title: Types utilitaires
description: Liste des types utilitaires et des enums.
---

## Types utilitaires

### Références

Vous pouvez typer les références que vous avez créé sur vos composants en utilisant le type `Refs`.

Par exemple, pour typer une référence à un formulaire `ref="form"` :

```ts
import { Refs } from '@cnamts/vue-dot/src/types';

@Component
export default class UserForm extends Vue {
	$refs!: Refs<{
		form: HTMLFormElement;
	}>;
}
```

### Formulaires Vuetify

Vous pouvez utiliser l’interface `VForm` pour typer une référence à ce composant :

```ts
import { Refs, VForm } from '@cnamts/vue-dot/src/types';

@Component
export default class UserForm extends Vue {
	$refs!: Refs<{
		form: VForm;
	}>;
}
```

Cette interface défini les méthodes `validate`, `reset` et `resetValidation` du composant `VForm`.

### Vue Input Facade

Vous pouvez utiliser l’interface `InputFacadeEvent` pour typer un événement émit par cette librairie :

```vue
<template>
	<VTextField
		v-facade="mask"
		@input.native="setInternalValue"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { InputFacadeEvent } from '@cnamts/vue-dot/src/types';

	@Component
	export default class CustomField extends MixinsDeclaration {
		internalValue: string | null = null;

		setInternalValue(event: InputFacadeEvent): void {
			this.internalValue = event.target?.unmaskedValue ?? null;
		}
	}
</script>
```

### Objet avec un type d’index

Vous pouvez utiliser le type `IndexObject` pour définir le type de clé d’un objet.

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

## Enums

### Gestion d’état

Vous pouvez utiliser l’enum `StateEnum` pour créer une variable de gestion d’état :

```ts
import { StateEnum } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

const state: StateEnum = StateEnum.IDLE;

async function sendForm(): void {
	state = StateEnum.PENDING;

	try {
		await postForm(data);
		state = StateEnum.RESOLVED;
	} catch {
		state = StateEnum.REJECTED;
	}
}
```

#### Ancienne syntaxe

L’ancienne syntaxe de l’enum est toujours disponible, mais est dépréciée :

```ts
export enum STATE_ENUM {
	idle = 'idle',
	pending = 'pending',
	rejected = 'rejected',
	resolved = 'resolved'
}
```
