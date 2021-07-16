Le fichier `loader.css` contient les styles du loader affiché pendant de chargement l'application.

<doc-alert type="warning">
Il n'est pas recommandé d'éditer ce fichier.
</doc-alert>

## Loader

Le loader affiché pendant de chargement l'application est le suivant :

<doc-material-loader></doc-material-loader>

<doc-alert type="info">

Sur IE 11, le loader est en version simplifiée car les animations sur les balises `<svg>` ne sont pas supportées.

</doc-alert>

## Code HTML

Le code HTML du loader se situe dans le fichier `public/index.html` :

```html
<div class="spinner-block">
	<svg
		class="spinner"
		width="65px"
		height="65px"
		viewBox="0 0 66 66"
		preserveAspectRatio="xMinYMin meet"
	>
		<circle
			class="path"
			fill="none"
			stroke-width="6"
			stroke-linecap="round"
			cx="33"
			cy="33"
			r="30"
		></circle>
	</svg>

	Chargement…
</div>
```
