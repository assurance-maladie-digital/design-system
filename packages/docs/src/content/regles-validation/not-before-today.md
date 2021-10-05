---
title: Règle de validation notBeforeToday
description: La règle `notBeforeToday` permet de vérifier qu’une date est postérieure à la date du jour.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

Pour utiliser la règle de validation `notBeforeToday`, vous devez l’importer :

```ts
import { notBeforeToday } from '@cnamts/vue-dot/src/rules/notBeforeToday';
```

Puis l'ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` :

```ts
rules = [
	notBeforeToday
];
```

## Messages d’erreur

Vous pouvez modifier les messages d’erreur par défaut en important la fonction `notBeforeTodayFn` :

```ts
import { notBeforeTodayFn } from '@cnamts/vue-dot/src/rules/notBeforeToday';
```

Puis en passant en argument un objet contenant les messages d’erreur utilisés par cette règle de validation :

```ts
notBeforeTodayRule = notBeforeTodayFn({
	default: 'La date doit être postérieure à aujourd’hui.'
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="rules/not-before-today"></doc-api>
</doc-tab-item>

</doc-tabs>
