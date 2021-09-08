---
title: Règle de validation exactLength
---

Il est important de lire la section [Validation d’un formulaire](/guides/validation-formulaire#validation-du-formulaire) avant de lire cette page.

La règle `exactLength` permet d’imposer la longueur d’une valeur dans un champs de saisie.

## Utilisation

Vous devez importer la règle `exactLength` :

```ts
import { exactLength } from '@cnamts/vue-dot/src/rules/exactLength';
```

Puis vous devez l’appeler avec différents arguments :

```ts
exactLengthRule = exactLength(lengthValue, ignoreSpaces, errorMessages)
```

<doc-api name="rules/exact-length/exact-length"></doc-api>

<br>Puis la mettre dans un tableau qui sera utilisé sur un champs de saisie via la props `rules` :

```ts
rules = [
    exactLengthRule
];
```

## Modifier le message d’erreur

<doc-indent>

Il est possible de modifier le message d’erreur en utilisant l’argument `errorMessages` :

</doc-indent>

<doc-api name="rules/exact-length/exact-length-messages"></doc-api>

<br>Pour modifier le message d’erreur, vous devez donc utiliser `exactLengthRule` de cette façon :

```ts
exactLengthRule = exactLength(lengthValue, ignoreSpaces, {
    default: (length: number) => `${length} caractères exactement`
});
```

Vous devez ensuite utiliser cette variable `exactLengthRule` de la même manière qu’à la section précédente.
