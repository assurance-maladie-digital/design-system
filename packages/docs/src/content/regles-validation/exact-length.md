---
title: Règle de validation exactLength
---

Il est important de lire la section [Validation d’un formulaire](/guides/validation-formulaire#validation-du-formulaire) avant de lire cette page.

La règle `exactLength` permet d’imposer la longueur d’une valeur dans un champs de saisie.

## Utilisation

<doc-indent>

Vous devez importer la règle `exactLength` :

</doc-indent>

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

## Modifier les messages d’erreur

<doc-indent>

Il est possible de modifier les messages d’erreur en utilisant l’argument `errorMessages`. Il s’agit d’un objet qui contient les différents messages d’erreur utilisé par cette règle de validation :

</doc-indent>

<doc-api name="rules/exact-length/exact-length-messages"></doc-api>

<br>Pour modifier le message d’erreur `default`, vous devez donc :

```ts
exactLengthRule = exactLength(lengthValue, ignoreSpaces, {
    default: (length: number) => `${length} caractères exactement`
});
```

Vous devez ensuite utiliser cette variable `exactLengthRule` de la même manière qu’à la section précédente.
