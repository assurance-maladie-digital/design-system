---
title: Règle de validation exactLength
description: La règle `exactLength` permet d’imposer la longueur d’une chaîne de caractères.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

Pour utiliser la règle de validation `exactLength`, vous devez l'importer :

```ts
import { exactLength } from '@cnamts/vue-dot/src/rules/exactLength';
```

Puis l'ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` et passer en argument la longueur exacte que le champ doit avoir :

```ts
rules = [
	exactLength(lengthValue)
];
```

## Messages d’erreur

Vous pouvez modifier les messages d’erreur par défaut en passant en argument un objet contenant les messages d’erreur utilisés par cette règle de validation :

```ts
exactLengthRule = exactLength(lengthValue, ignoreSpaces, {
	default: (length: number) => `${length} caractères exactement`
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="rules/exact-length"></doc-api>
</doc-tab-item>

</doc-tabs>
