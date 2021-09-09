---
title: Règle de validation minLength
---

Il est important de lire la section [Validation d’un formulaire](/guides/validation-formulaire#validation-du-formulaire) avant de lire cette page.

La règle `minLength` permet d’imposer la longueur minimal d’une valeur dans un champs de saisie.

## Utilisation

<doc-indent>

Vous devez importer la règle `minLength` :

</doc-indent>

```ts
import { minLength } from '@cnamts/vue-dot/src/rules/minLength';
```

Puis vous devez l’appeler avec différents arguments :

```ts
minLengthRule = minLength(min, errorMessages)
```

<doc-api name="rules/min-length/min-length"></doc-api>

<br>Puis la mettre dans un tableau qui sera utilisé sur un champs de saisie via la props `rules` :

```ts
rules = [
    minLengthRule
];
```

## Modifier les messages d’erreur

<doc-indent>

Il est possible de modifier les messages d’erreur en utilisant l’argument `errorMessages`. Il s’agit d’un objet qui contient les différents messages d’erreur utilisé par cette règle de validation :

</doc-indent>

<doc-api name="rules/min-length/min-length-messages"></doc-api>

<br>Pour modifier le message d’erreur `default`, vous devez donc :

```ts
minLengthRule = minLength(lengthValue, ignoreSpaces, {
    default: (min: number) => `${min} caractères minimum`
});
```

Vous devez ensuite utiliser cette variable `minLengthRule` de la même manière qu’à la section précédente.
