---
title: Variables d’environnement
description: Ajout et utilisation de variables d’environnement.
---

Par défaut, dans Vue CLI, les variables d’environnement sont [définies en utilisant le système de variables Node.js](https://cli.vuejs.org/guide/mode-and-env.html#environment-variables), mais cela requiert de reconstruire l’application pour chaque environnement et à chaque modification de valeur.

Pour répondre à cette problématique, les variables d’environnement sont stockées dans l’objet global `window` et sont définies dans un fichier généré dynamiquement pour chaque environnement.

## Ajout d’une variable d’environnement

Les variables d’environnement sont définies dans le fichier `public/js/config.js` :

```ts
window.MA_VARIABLE = 'Ma valeur';
```

En local, vous pouvez modifier directement ce fichier. Pour que les variables fonctionnent sur vos différents environnements, vous devez modifier le fichier `public/js/config.js.env` :

```ts
window.MA_VARIABLE = '{{ MA_VARIABLE }}';
```

La valeur `{{ MA_VARIABLE }}` sera interprétée lors du déploiement et remplacée dynamiquement par la valeur définie sur l’environnement.

Il est également nécessaire d’implémenter l’interface globale `Window` dans le fichier `src/global.d.ts` afin que TypeScript reconnaisse cette nouvelle propriété :

```ts
declare global {
	interface Window {
		MA_VARIABLE: string;
	}
}
```

<doc-alert type="warning">

Vous ne devez pas stocker d’informations sensibles dans les variables d’environnement car celles-ci peuvent être consultées publiquement.

</doc-alert>

## Utilisation d’une variable d’environnement

Pour utiliser une variable d’environnement, vous pouvez utiliser l’objet `window` qui est accessible globalement dans votre application :

```ts
if (window.MA_VARIABLE === 'true') {
	// …
}
```

<doc-alert type="info">

Une variable d’environnement non définie aura la valeur `undefined`, si la valeur est renseignée, celle-ci sera une chaîne de caractères.

</doc-alert>
