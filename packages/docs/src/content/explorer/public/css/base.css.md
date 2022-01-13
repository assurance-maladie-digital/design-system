Le fichier `base.css` contient les styles globaux de l'application.

Il est également utilisé pour afficher les pages en-dehors de l'application Vue.js telles que la page de chargement ou la page d'erreur si JavaScript est désactivé.

<doc-alert type="warning">
Il n'est pas recommandé d'éditer ce fichier.
</doc-alert>

## Contenu par défaut

Par défaut, le fichier a le contenu suivant :

```css
* {
	margin: 0;
	padding: 0;
	border: 0;
	max-width: 100%;
	box-sizing: border-box;
	scroll-behavior: smooth;
	font-family: 'Open Sans', sans-serif;
}
```

Ce bloc permet de réinitialiser certaines propriétés comme les espacements, le comportement du défilement, la taille maximale des éléments et la police par défaut.

```css
html,
body {
	/* Font size defined by the browser */
	font-size: 100%;
}
```

Ce bloc permet d'utiliser la taille de police définie par le navigateur au lieu d'une taille de police fixe.<br>
Cela est important pour l'accessibilité, car certaines personnes augmentent la taille de police de leur navigateur et il est important de respecter celle-ci.

```css
/* Hide the application while Vue.js is loading */
[v-cloak] {
	display: none;
}
```

Ce bloc permet de masquer l'application pendant de le chargement de celle-ci afin de ne pas afficher les éléments dynamiques non compilés comme par exemple `{{ $t('…') }}`.

```css
#app {
	width: 100%;
	display: flex;
	min-height: 100vh;
	background: #f8f9fc;
}
```

Ce bloc permet de définir mise en page par défaut, la taille et la couleur de fond de l'élément `#app`.

```css
/* Apply default transition to links */
a {
	transition: .25s;
}
```

Ce bloc permet d'appliquer une transition par défaut sur tous les liens.
