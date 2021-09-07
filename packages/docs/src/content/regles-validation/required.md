---
title: Règle de validation required
---

Il est important de lire la section [Validation d’un formulaire](/guides/validation-formulaire#validation-du-formulaire) avant de lire cette page.

La règle `required` permet de rendre un champs de saisie obligatoire.

## Utilisation par défaut

Vous devez importer la règle `required` :

```ts
import { required } from '@cnamts/vue-dot/src/rules/required';
```

Puis vous devez l’utiliser dans un tableau qui sera utilisé sur un champs de saisie via la props `rules` (cette props attend un tableau de règles de validation) :

```ts
rules = [
    required
];
```

<doc-alert type="info">

Le message d’erreur par défaut est : `Ce champs est requis.`.

</doc-alert>

## Personnalisation

Il est possible de personnaliser l’utilisation de cette règle, pour cela vous devez importer la fonction `requiredFn` :

```ts
import { requiredFn } from '@cnamts/vue-dot/src/rules/required';
```

Cette fonction attend un objet qui contient ses options :

```ts
required = requiredFn(option);
```

Vous devez ensuite utiliser cette variable `required` de la même manière qu’à la section précédente.

## Options

<doc-rule-option-table name="required"></doc-rule-option-table>
