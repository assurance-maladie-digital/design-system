---
title: Règle de validation notAfterDate
description: La règle `notAfterDate` permet de vérifier qu’une date est antérieure ou égale à une autre date.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

Pour utiliser la règle de validation `notAfterDate`, vous devez l’importer :

```ts
import { notAfterDate } from '@cnamts/vue-dot/src/rules/notAfterDate';
```

Puis l’ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` et passer en argument la date maximale :

```ts
rules = [
	notAfterDate(date)
];
```

## Messages d’erreur

Vous pouvez modifier les messages d’erreur par défaut en passant en argument un objet contenant les messages d’erreur utilisés par cette règle de validation :

```ts
notAfterDateRule = notAfterDate(date, {
	default: (date: string) => `La date doit être antérieure ou égale au ${date}.`
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="rules/not-after-date"></doc-api>
</doc-tab-item>

</doc-tabs>
