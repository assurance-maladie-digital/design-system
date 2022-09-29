---
title: Gestion des textes
description: Externalisation des textes et internationalisation.
---

## Externalisation des textes

Afin de simplifier le template des composants et l’édition des textes, nous vous recommandons d’écrire les textes dans des fichiers dédiés.

Ces fichiers dédiés sont organisés dans une architecture similaire à l’organisation des composants et des views, et sont utilisés dans ceux-ci à l’aide de [Vue i18n](https://kazupon.github.io/vue-i18n/).

Dans le dossier `translations`, vous trouverez un dossier `fr` qui correspond aux textes pour la langue française. À l’intérieur, la liste des fichiers de traduction doit être référencée dans le fichier `src/translations/index.ts`.

Chaque fichier de traduction contient les textes d’un composant ou d’une page :

```ts
export default {
	title: 'Le titre',
	description: {
		block1: 'Le premier bloc de description.',
		block2: 'Le deuxième bloc de description.'
	}
};
```

Pour utiliser ces traductions, vous pouvez utiliser la fonction `$t` :

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

Pour gérer le pluriel ainsi que la quantité, vous pouvez définir les variations dans les traductions :

```ts
user: 'utilisateur | utilisateurs',
file: 'Pas de fichier | Un fichier | {count} fichiers'
```

Et utiliser la fonction `$tc` :

```vue
<p>{{ $tc('user', 1) }}</p>
<p>{{ $tc('user', 2) }}</p>

<p>{{ $tc('file', 0) }}</p>
<p>{{ $tc('file', 1) }}</p>
<p>{{ $tc('file', 10, { count: 10 }) }}</p>
```

<doc-alert type="info">
Si la quantité n’est pas spécifiée, c’est la valeur au singulier qui sera utilisée par défaut.
</doc-alert>

### Valeur dynamique

Vous pouvez définir des emplacements avec des valeurs dynamiques :

```ts
fileLabel: 'Fichier {filename}'
```

Puis il suffit de fournir à la fonction de traduction `$t` un objet qui contient toutes les valeurs que l'on souhaite afficher, les noms des clés de l'objet détermineront quels emplacements seront remplacés par quelles valeurs.

Pour spécifier la valeur, vous devez utiliser le second argument de la fonction `$t` :

```vue
<p>{{ $t('fileLabel', { filename: 'image.png' }) }}</p>
```

### La balise `i18n`

Pour insérer du contenu HTML dans une traduction, il est recommandé d’utiliser la balise `i18n`.

Par exemple, pour insérer un lien vers les Conditions Générales d’Utilisation dans une case à cocher :

```vue
<VCheckbox
	v-model="cgu"
	:label="$t('components.cguCheckbox.label')"
>
	<template #label>
		<i18n
			path="components.cguCheckbox.label"
			tag="span"
		>
			<template #link>
				<a
					:href="$t('components.cguCheckbox.linkDetails.url')"
					@click.stop
				>
					{{ $t('components.cguCheckbox.linkDetails.text') }}
				</a>
			</template>
		</i18n>
	</template>
</VCheckbox>
```

Le fichier de traduction correspondant :

```ts
export default {
	label: 'Je certifie sur l’honneur l’exactitude de ma déclaration conformément aux {link}.',
	linkDetails: {
		text: 'Conditions Générales d’Utilisation du téléservice',
		url: '/cgu'
	}
};
```

## Internationalisation

Vous pouvez ajouter d'autres langues en créant un nouveau dossier dans `translations` et en ajoutant la langue à la liste des langues supportées dans le fichier `src/translations/index.ts`.

Par exemple, vous pouvez créer le fichier `translations/es/home.ts` pour ajouter l'Espagnol :

```ts
export default {
	title: 'El título',
	description: {
		block1: 'El primer bloque de descripción.',
		block2: 'El segundo bloque de descripción.'
	}
};
```

<doc-alert type="info">

Lorsque vous ajoutez des sous-dossiers, pensez à ajouter un fichier `index.ts` qui exporte les fichiers de traduction du sous-dossier.

</doc-alert>

### Changement de la langue

Pour changer la langue de l'application, vous pouvez utiliser la fonction `loadLanguageAsync` définie dans le fichier `src/i18n.ts` :

```ts
loadLanguageAsync('es');
```

Cette fonction va charger les traductions de manière asynchrone, modifier la langue utilisée par Vue i18n et définir le header `Accept-Language` via [axios](https://axios-http.com/) ainsi que l'attribut `lang` sur la balise `<html>`.
