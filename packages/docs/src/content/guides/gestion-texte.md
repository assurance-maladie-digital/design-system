---
title: Gestion des textes
description: Externalisation et internationalisation des textes.
---

### Externalisation des textes

Le texte ne doit jamais être écris en dur. Il est géré depuis un fichier à part et injecté dans les composants à l'aide de l'outil d'internationalisation : `Vue i18n`.
Celui ci permet de gérer plusieurs langues pour faciliter la traduction dynamique d'un site ou d'une application.

Dans le dossier `traduction`, vous trouverez un dossier `fr`. À l'interieur, la liste des fichiers de traduction seront référencés dans l'`index.ts`

Chaque fichier de traduction listera les textes d'un composant de cette manière :

```js
export default {
	title: 'Le titre',
	description: {
		block1: 'Le premier bloc de description.',
		block2: 'Le deuxième bloc de discussion qui est tout aussi important.'
	}
};
```

Le fichier `home.ts`, ci dessus, se trouve dans le dossier `fr/views`.
Dans le composant, la portion de texte `block2` pourra être appelé de cette manière :

```js
<template>
	<p>
		{{ $t('views.home.description.block2') }}
	</p>
</template>
```

Cela affichera dont le texte : `Le deuxième bloc de discussion qui est tout aussi important.`.

### internationalisation

Le dossier `fr` ne sert qu'à externaliser les textes de sorte à pouvoir les modifier plus facilement.
Il est possible d'ajouter des langues en créant un nouveau dossier et en reproduisant la même structure.

Par exemple, nous pouvons créer le fichier `es` pour ajouter la langue espagnol.

Il faudra ensuite ajouter la langue à la liste des langues supportées.

```js
export const supportedLanguages = ['fr', 'es'];
```

Puis traduire les textes en espagnol. Pour notre fichier `home.ts` du dossier `es`, cela donnerait quelque chose comme ca.

```js
export default {
	title: 'El título',
	description: {
		block1: 'El primer bloque de descripción.',
		block2: 'El segundo bloque de discusión que es igualmente importante.'
	}
};
```

Il ne restera plus qu'à changer la langue du module `i18n` en passant `locale` en `es`.

```js
export const i18n = new VueI18n({
	locale: 'es'
});
```
