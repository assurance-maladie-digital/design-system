---
title: Règle de validation maxLength
description: La règle `maxLength` permet d’imposer la longueur maximale d’un champ de formulaire.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

Pour utiliser la règle de validation `maxLength`, vous devez l'importer :

```ts
import { maxLength } from '@cnamts/vue-dot/src/rules/maxLength';
```

Puis l'ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` et passer en argument la longueur maximale que le champ doit avoir :

```ts
rules = [
	maxLength(lengthValue)
];
```

## Messages d’erreur

Vous pouvez modifier les messages d’erreur par défaut en passant en argument un objet contenant les messages d’erreur utilisés par cette règle de validation :

```ts
maxLengthRule = maxLength(lengthValue, {
	default: (max: number) => `La longueur maximale du champ est de ${max} caractères.`
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="rules/max-length"></doc-api>
</doc-tab-item>

</doc-tabs>
