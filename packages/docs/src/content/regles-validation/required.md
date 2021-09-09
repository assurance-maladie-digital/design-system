---
title: Règle de validation required
description: La règle `required` permet de rendre un champ de formulaire obligatoire.
---

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

Ensuite, vous devez lui passer en argument un objet qui contient les messages d’erreur utilisés par cette règle de validation :

```ts
required = requiredFn({
    default: 'erreur'
});
