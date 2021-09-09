---
title: Règle de validation maxLength
description : La règle `maxLength` permet d’imposer la longueur maximun d’une chaîne de caractère.
---

## Utilisation

<doc-indent>

Pour utiliser la règle de validation `maxLength`, vous devez l'importer :

</doc-indent>

```ts
import { maxLength } from '@cnamts/vue-dot/src/rules/maxLength';
```

Puis vous devez l’appeler avec différents arguments :

```ts
maxLengthRule = maxLength(max, errorMessages)
```

<doc-api name="rules/max-length/arguments"></doc-api>

Puis l'ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` :

```ts
rules = [
    maxLengthRule
];
```

## Modifier les messages d’erreur

<doc-indent>

Il est possible de modifier les messages d’erreur en utilisant l’argument `errorMessages`. Il s’agit d’un objet qui contient le message d’erreur utilisé par cette règle de validation :

</doc-indent>

```ts
maxLengthRule = maxLength(lengthValue, ignoreSpaces, {
    default: (max: number) => `${max} caractères maximum`
});
```
