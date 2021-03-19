Le fichier `tsconfig.js` permet de configurer le compilateur de TypeScript ainsi que de spécifier les fichiers qui composent le projet.

<doc-alert type="warning">
Il n'est pas recommandé d'éditer ce fichier.
</doc-alert>

## Configuration par défaut

Par défaut, le fichier contient beaucoup d'options de configuration. Voici les éléments les plus significatifs :

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

## Plus d'informations

Vous pouvez retrouver plus d'informations sur la documentation de [TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).
