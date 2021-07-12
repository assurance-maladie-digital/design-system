Le fichier `tsconfig.js` contient la configuration du compilateur de [TypeScript](https://www.typescriptlang.org/) ainsi que la liste des fichiers qui composent le projet.

<doc-alert type="warning">

Il n’est pas recommandé d’éditer ce fichier, hormis la section `types`.

</doc-alert>

## Configuration par défaut

Par défaut, le fichier contient plusieurs options de configuration, voici les éléments les plus significatifs :

### Types

```json
"types": [
	"node",
	"jest",
	"vuetify",
	"webfontloader"
]
```

Ce bloc permet de définir la liste des packages fournissant des définitions de types à importer.

<doc-alert type="info">

Si vous utilisez des dépendances et que celles-ci ont une définition de types incluse dans [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped), vous pouvez l’ajouter dans ce bloc.

</doc-alert>

### Alias

```json
"paths": {
	"@/*": [
		"src/*"
	],
	"@/tests-unit/*": [
		"tests/unit/*"
	],
	"@/tests-unit": [
		"tests/unit/"
	]
}
```

Ce bloc permet de définir des alias pour certains chemins. Vous pouvez utiliser ces alias dans votre code afin de le rendre plus lisible.

## Plus d’informations

Vous pouvez retrouver plus d’informations sur la documentation de [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
