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

### Gestion du pluriel

Si vous voulez accorder en nombre un mot, vous pouvez utiliser cette syntaxe :

Dans le fichier de traduction :

```ts
//Quand il y a deux éléments, le premier correspond au singulier, le deuxieme au pluriel.
car: 'car | cars',

//Quand il y a trois éléments, le premier correspond à l'absence d'élément, le deuxieme au singulier et le troisième au plusieurs.
apple: 'no apples | one apple | {count} apples'
```

Dans le template de vue :

```vue
<p>{{ $tc('car', 1) }}</p>
<p>{{ $tc('car', 2) }}</p>

<p>{{ $tc('apple', 0) }}</p>
<p>{{ $tc('apple', 1) }}</p>
<p>{{ $tc('apple', 10, { count: 10 }) }}</p>
```

Ce qui donnera :

```html
<p>car</p>
<p>cars</p>

<p>no apples</p>
<p>one apple</p>
<p>10 apples</p>
```

Attention de bien utiliser `$tc` et pas `$t` car sinon c'est directement la chaine de caractère `'no apples | one apple | {count} apples'` qui s'affichera.
Si vous ne précisez pas le nombre, c'est la valeur au singulier qui sera importée par défaut.

### Inclure une valeur

Pour ajouter une valeur, vous pouvez ajouter votre variable entre crochet à la chaine de caractère dans le fichier de traduction.

```ts
message: {
	hello: '{msg} world';
}
```

En plus de récupérer la chaine de caractère, vous pouvez lui passer une valeur pour la variable ajouté plus haut, ici `{msg}`.

```vue
<p>{{ $t('message.hello', { msg: 'hello' }) }}</p>
```

Le résultat attendu est donc celui-ci.

```html
<p>hello world</p>
```

Pour ajouter plusieurs valeurs, vous pouvez utiliser cette syntaxe dans le fichier de traduction

```ts
presentation: 'Bonjour, je m’appelle {firstname} {lastname}, j’ai {age} ans.',
```

Puis l'appeler dans le template

```vue
<p>{{ $t('views.about.presentation', {'firstname': 'John','lastname': 'Doe','age': '30'}) }}</p>
```

Le résultat attendu est celui-ci.

```html
Bonjour, je m’appelle John Doe, j’ai 30 ans.
```

### la balise <i18>

Si, par exemple, nous avons un besoin de mettre un lien milieu d'une phrase, nous pouvons utiliser la balise i18n.

```vue
//dans le path, indiquer le chemin vers la traduction.
<i18n path="components.about.label" tag="div">
	//utiliser le template #link, pour acceder à la partie {link} à l'interieur de la traduction
	<template #link>
		//on utilise l'url et le text présent dans l'objet 'link' du fichier de traduction
		<a
			:href="$t('components.about.linkDetails.url')"
		>{{ $t('components.about.linkDetails.text') }}</a>
	</template>
</i18n>
```

Dans le fichier de traduction, nous retrouvons le label, et le link que nous avons utilisé plus haut.

```ts
export default {
	label:
		"Je certifie sur l'honneur l'exactitude de ma déclaration conformément aux {link}.",
	linkDetails: {
		text: "Conditions Générales d'Utilisation du téléservice",
		url: '/cgu'
	}
};
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
