---
title: Règle de validation email
---

Il est important de lire la section [Validation d’un formulaire](/guides/validation-formulaire#validation-du-formulaire) avant de lire cette page.

La règle `email` permet de la validité du format d'une adresse courielle.

## Utilisation

<doc-indent>

Vous devez importer la règle `email` :

</doc-indent>

```ts
import { email } from '@cnamts/vue-dot/src/rules/email';
```

Puis vous devez l’utiliser dans un tableau qui sera utilisé sur un champs de saisie via la props `rules` (cette props attend un tableau de règles de validation) :

```ts
rules = [
    email
];
```

## Modifier les messages d'erreur

<doc-indent>

Il est possible de modifier les messages d’erreur, pour cela vous devez importer la fonction `requiredFn` :

</doc-indent>

```ts
import { emailFn } from '@cnamts/vue-dot/src/rules/email';
```

Puis vous devez lui passer en argument un objet qui contient les messages d’erreur utilisés par cette règle de validation.

```ts
required = emailFn(errorMessages);
```

<doc-api name="rules/email"></doc-api>

<br>Pour modifier le message d’erreur, vous devez donc :

```ts
required = emailFn({
    default: 'erreur'
});
```

Vous devez ensuite utiliser cette variable `email` de la même manière qu’à la section précédente.
