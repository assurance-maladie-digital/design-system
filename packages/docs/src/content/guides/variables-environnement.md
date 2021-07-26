---
title: Variables d’environnement
description: Création et utilisation des variables d’environnement.
---

La gestion des variables d’environnement diffère du fonctionnement décrit dans le [guide vuejs](https://cli.vuejs.org/guide/mode-and-env.html#modes). Elles sont ici stockées dans l’objet global `window` afin d’éviter de build à chaque modification de l’une d’entre elle.

## Création d’une variable d’environnement

Les variables d’environnement sont définies dans le fichier `public/js/config.js`.

```ts
window.maVariable = 'Ma valeur'
```

Il est également nécessaire d’implémenter l’interface globale `Window` dans le fichier `src/global.d.ts`.

```ts
declare global {
	interface Window {
		maVariable: string;
	}
}
```

## Utilisation d’une variable d’environnement

Pour utiliser une variable d’environnement, il suffit d’appeler l’objet javascript `window`. Il est accessible partout dans l’application.

<doc-alert type="info">

Une variable d’environnement non définie renverra la valeur `undefined`.

</doc-alert>
