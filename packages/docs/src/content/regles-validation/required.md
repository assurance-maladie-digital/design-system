---
title: Règle de validation required
---

Il est important de lire la section [Validation d’un formulaire](/guides/validation-formulaire#validation-du-formulaire) avant de lire cette page.

La règle `required` permet de rendre un champs de saisie obligatoire.

## Utilisation

<doc-indent>

Pour utiliser la règle de validation `required`, vous devez l'importer :

</doc-indent>

```ts
import { required } from '@cnamts/vue-dot/src/rules/required';
```

Puis l'ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` :

```ts
rules = [
    required
];
```

## Modifier les messages d'erreur

<doc-indent>

Il est possible de modifier les messages d’erreur par défaut, pour cela vous devez importer la fonction `requiredFn` :

</doc-indent>

```ts
import { requiredFn } from '@cnamts/vue-dot/src/rules/required';
```

Puis vous devez lui passer en argument un objet qui contient les messages d’erreur utilisés par cette règle de validation.

```ts
required = requiredFn(errorMessages);
```

<doc-api name="rules/required/required-messages"></doc-api>

<br>Pour modifier le message d’erreur `default`, vous devez donc :

```ts
required = requiredFn({
    default: 'erreur'
});
```

Vous devez ensuite utiliser cette variable `required` de la même manière qu’à la section précédente.
