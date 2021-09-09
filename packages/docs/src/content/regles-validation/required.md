---
title: Règle de validation required
---

Il est important de lire la section [Validation d’un formulaire](/guides/validation-formulaire#validation-du-formulaire) avant de lire cette page.

La règle `required` permet de rendre un champs de saisie obligatoire.

## Utilisation

<doc-indent>

Vous devez importer la règle `required` :

</doc-indent>

```ts
import { required } from '@cnamts/vue-dot/src/rules/required';
```

Puis vous devez l’utiliser dans un tableau qui sera utilisé sur un champs de saisie via la props `rules` (cette props attend un tableau de règles de validation) :

```ts
rules = [
    required
];
```

## Modifier les messages d'erreur

<doc-indent>

Il est possible de modifier les messages d’erreur, pour cela vous devez importer la fonction `requiredFn` :

</doc-indent>

```ts
import { requiredFn } from '@cnamts/vue-dot/src/rules/required';
```

Puis vous devez lui passer en argument un objet qui contient les messages d’erreur utilisés par cette règle de validation.

```ts
required = requiredFn(errorMessages);
```

<doc-api name="rules/required"></doc-api>

<br>Pour modifier le message d’erreur, vous devez donc :

```ts
required = requiredFn({
    default: 'erreur'
});
```

Vous devez ensuite utiliser cette variable `required` de la même manière qu’à la section précédente.
