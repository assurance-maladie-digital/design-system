---
title: Règle de validation notBeforeDate
description: La règle `notBeforeDate` permet de vérifier qu’une date est postérieure à une autre date.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

Pour utiliser la règle de validation `notBeforeDate`, vous devez l’importer :

```ts
import { notBeforeDate } from '@cnamts/vue-dot/src/rules/notBeforeDate';
```

Puis l’ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` et passer en argument la date maximale :

```ts
rules = [
	notBeforeDate(date)
];
```

## Messages d’erreur

Vous pouvez modifier les messages d’erreur par défaut en passant en argument un objet contenant les messages d’erreur utilisés par cette règle de validation :

```ts
notBeforeDateRule = notBeforeDate(date, {
	default: (date: string) => `La date doit être postérieure au ${date}.`
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="rules/not-before-date"></doc-api>
</doc-tab-item>

</doc-tabs>
