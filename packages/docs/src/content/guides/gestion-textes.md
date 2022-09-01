---
title: Gestion des textes
description: Externalisation des textes et internationalisation.
---

### Externalisation des textes

Les textes ne doivent pas être écrit directement dans les composants et dans les views. Ils sont externalisés dans une architecture similaire à l'organisation des composants et des views et injectés dans ceux-ci à l'aide du package `Vue i18n`.
Celui ci permet de gérer plusieurs langues pour faciliter la traduction dynamique d'un site ou d'une application.

Dans le dossier `traductions`, vous trouverez un dossier `fr` qui correspond à la traduction pour la langue française. À l'intérieur, la liste des fichiers de traduction seront référencés dans le fichier `src/traductions/index.ts`.

Chaque fichier de traduction listera les textes d'un composant ou d'une view de cette manière :

```ts
export default {
	title: 'Le titre',
	description: {
		block1: 'Le premier bloc de description.',
		block2: 'Le deuxième bloc de discussion qui est tout aussi important.'
	}
};
```

Les traductions peuvent par la suite être appelées grâce aux fonctions `$t` et `$tc`.

Le fichier `home.ts`, ci dessus, se trouve dans le dossier `fr/views`.
Dans le composant, la portion de texte `block2` pourra être appelé de cette manière :

```vue
<template>
	<div>
		<p>
			{{ $t('views.userDeclaration.description.block1') }}
		</p>

		<p>
			{{ description }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class UserDeclaration extends Vue {
		get description(): string {
			return this.$t('views.userDeclaration.description.block2') as string;
		}
	}
</script>
```

### Internationalisation

Le dossier `fr` ne sert qu'à externaliser les textes de sorte à pouvoir les modifier plus facilement.
Il est possible d'ajouter des langues en créant un nouveau dossier et en reproduisant la même structure.

Par exemple, nous pouvons créer le fichier `es` pour ajouter la langue espagnol.

Il faudra ensuite ajouter la langue à la liste des langues supportées dans le fichier `src/traductions/index.ts`.

```ts
export const supportedLanguages = ['fr', 'es'];
```

Puis traduire les textes en espagnol. Pour notre fichier `home.ts` du dossier `es`, cela donnerait quelque chose comme ca.

```ts
export default {
	title: 'El título',
	description: {
		block1: 'El primer bloque de descripción.',
		block2: 'El segundo bloque de discusión que es igualmente importante.'
	}
};
```

Il ne restera plus qu'à changer la langue du module `i18n` en passant `locale` en `es` dans le fichier `src/i18n.ts`.

```ts
export const i18n = new VueI18n({
	locale: 'es'
});
```
