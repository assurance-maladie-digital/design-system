Le fichier `.browserslistrc` contient la liste des navigateurs que le projet supporte.

Il est utilisé par [Babel](https://babeljs.io/) et le [plugin Autoprefixer](https://github.com/postcss/autoprefixer) pour que l'application soit compatible avec ces navigateurs.

<doc-alert type="warning">
Il n'est pas recommandé d'éditer ce fichier.
</doc-alert>

## Configuration par défaut

Par défaut, le fichier contient la configuration suivante :

```bash
> 1%
IE 11
last 2 versions
```

Cette configuration permet de supporter tous les navigateurs récents mais aussi IE 11.

## Plus d'informations

Vous pouvez retrouver plus d'informations sur la documentation de [browserslist](https://github.com/browserslist/browserslist).
