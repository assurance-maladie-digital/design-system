---
title: Règle de validation exactLength
description : La règle `required` permet d’imposer la longueur d’une chaîne de caractère.
---

## Utilisation

<doc-indent>

Pour utiliser la règle de validation `exactLength`, vous devez l'importer :

</doc-indent>

```ts
import { exactLength } from '@cnamts/vue-dot/src/rules/exactLength';
```

Puis vous devez l’appeler avec différents arguments :

```ts
exactLengthRule = exactLength(lengthValue, ignoreSpaces, errorMessages)
```

<doc-api name="rules/exact-length/arguments"></doc-api>

Puis l'ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` :

```ts
rules = [
    exactLengthRule
];
```

## Modifier les messages d’erreur

<doc-indent>

Il est possible de modifier les messages d’erreur en utilisant l’argument `errorMessages`. Il s’agit d’un objet qui contient le message d’erreur utilisé par cette règle de validation :

</doc-indent>

```ts
exactLengthRule = exactLength(lengthValue, ignoreSpaces, {
    default: (length: number) => `${length} caractères exactement`
});
```
