---
title: Règle de validation minLength
description : La règle `minLength` permet d’imposer la longueur minimun d’une chaîne de caractère.
---

## Utilisation

<doc-indent>

Pour utiliser la règle de validation `minLength`, vous devez l'importer :

</doc-indent>

```ts
import { minLength } from '@cnamts/vue-dot/src/rules/minLength';
```

Puis vous devez l’appeler avec différents arguments :

```ts
minLengthRule = minLength(min, errorMessages)
```

<doc-api name="rules/min-length/arguments"></doc-api>

Puis l'ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` :

```ts
rules = [
    minLengthRule
];
```

## Modifier les messages d’erreur

<doc-indent>

Il est possible de modifier les messages d’erreur en utilisant l’argument `errorMessages`. Il s’agit d’un objet qui contient le message d’erreur utilisé par cette règle de validation :

</doc-indent>

```ts
minLengthRule = minLength(lengthValue, ignoreSpaces, {
    default: (min: number) => `${min} caractères minimum`
});
```
