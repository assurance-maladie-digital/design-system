Le fichier `postcss.config.js` contient la configuration du pré-processeur [PostCSS](https://github.com/postcss/postcss).

Babel est utilisé pour compiler du JavaScript moderne en JavaScript compatible avec la liste de navigateurs définie dans le fichier `.browserslistrc`.

PostCSS est utilisé pour son [plugin Autoprefixer](https://github.com/postcss/autoprefixer), qui permet d'ajouter automatiquement les préfixes pour supporter les navigateurs qui en ont besoin.

Par exemple, si vous écrivez la déclaration de styles suivante:

```css
.example {
	transition: all .5s;
}
```

Les préfixes seront automatiquement ajoutés si nécessaires :

```css
.example {
	-webkit-transition: all .5s;
	-o-transition: all .5s;
	transition: all .5s;
}
```

Les préfixes nécessaires sont déterminés à partir des données de [Can I Use](https://caniuse.com/) et de la liste de navigateurs définie dans le fichier `.browserslistrc`.

<doc-alert type="warning">
Il n'est pas recommandé d'éditer ce fichier.
</doc-alert>

## Configuration par défaut

Par défaut, la configuration active le plugin Autoprefixer.

## Plus d'informations

Vous pouvez retrouver plus d'informations sur la documentation du [plugin Autoprefixer](https://github.com/postcss/autoprefixer).
