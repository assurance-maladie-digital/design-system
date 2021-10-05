---
title: Règle de validation minLength
description: La règle `minLength` permet d’imposer la longueur minimale d’un champ de formulaire.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

Pour utiliser la règle de validation `minLength`, vous devez l’importer :

```ts
import { minLength } from '@cnamts/vue-dot/src/rules/minLength';
```

Puis l’ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` et passer en argument la longueur minimale que le champ doit avoir :

```ts
rules = [
	minLength(lengthValue)
];
```

## Messages d’erreur

Vous pouvez modifier les messages d’erreur par défaut en passant en argument un objet contenant les messages d’erreur utilisés par cette règle de validation :

```ts
minLengthRule = minLength(lengthValue, {
	default: (min: number) => `La longueur minimale du champ est de ${min} caractères.`
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="rules/min-length"></doc-api>
</doc-tab-item>

</doc-tabs>
