---
title: Règle de validation isDateValid
description: La règle `isDateValid` permet de vérifier la validité d’une date.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

Pour utiliser la règle de validation `isDateValid`, vous devez l’importer :

```ts
import { isDateValid } from '@cnamts/vue-dot/src/rules/isDateValid';
```

Puis l’ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` :

```ts
rules = [
	isDateValid
];
```

## Messages d’erreur

Vous pouvez modifier les messages d’erreur par défaut en important la fonction `isDateValidFn` :

```ts
import { isDateValidFn } from '@cnamts/vue-dot/src/rules/isDateValid';
```

Puis en passant en argument un objet contenant les messages d’erreur utilisés par cette règle de validation :

```ts
isDateValidRule = isDateValidFn({
	default: 'La date saisie n’est pas valide.',
	wrongFormat: 'Le format de la date n’est pas valide.',
	monthNotMatch: 'Le jour saisi dépasse le nombre de jours dans le mois correspondant.',
	notALeapYear: 'Le jour saisi est invalide car l’année correspondante n’est pas une année bissextile.'
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="rules/is-date-valid"></doc-api>
</doc-tab-item>

</doc-tabs>
