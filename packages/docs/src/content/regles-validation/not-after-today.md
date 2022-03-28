---
title: Règle de validation notAfterToday
description: La règle `notAfterToday` permet de vérifier qu’une date est antérieure ou égale à la date du jour.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

Pour utiliser la règle de validation `notAfterToday`, vous devez l’importer :

```ts
import { notAfterToday } from '@cnamts/vue-dot/src/rules/notAfterToday';
```

Puis l’ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` :

```ts
rules = [
	notAfterToday
];
```

## Messages d’erreur

Vous pouvez modifier les messages d’erreur par défaut en important la fonction `notAfterTodayFn` :

```ts
import { notAfterTodayFn } from '@cnamts/vue-dot/src/rules/notAfterTodayFn';
```

Puis en passant en argument un objet contenant les messages d’erreur utilisés par cette règle de validation :

```ts
notAfterTodayRule = notAfterTodayFn({
	default: 'La date doit être antérieure ou égale à aujourd’hui.'
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="rules/not-after-today"></doc-api>
</doc-tab-item>

</doc-tabs>
