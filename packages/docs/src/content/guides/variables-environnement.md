---
title: Variables d’environnement
description: Création et utilisation des variables d’environnement.
---

## Création d'une variable d’environnement

Les variables d’environnement sont définies dans le fichier `public/js/config.js`. Elles sont stockées dans l'objet javascript `window` de l'onglet en cours. Elles sont accessibles partout dans l’application.

```ts
window.envVariable = 'Ma valeur'
```

Il est est également nécéssaire d’implémenter l’interface globale `Window` dans le fichier `src/global.d.ts`.

```ts
declare global {
	interface Window {
		envVariable: string;
	}
}
```

## Utilisation d’une variable d’environnement

Pour utiliser une variable d'environnement, il suffit d'appeler l'objet javascript `window`.

<doc-alert type="info">

Une variable d’environnement non définie renverra la valeur `undefined`.

</doc-alert>
