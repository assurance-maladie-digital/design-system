---
title: Règle de validation required
description: La règle `required` permet de rendre obligatoire un champ de formulaire.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

Pour utiliser la règle de validation `required`, vous devez l'importer :

```ts
import { required } from '@cnamts/vue-dot/src/rules/required';
```

Puis l'ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` :

```ts
rules = [
	required
];
```

## Messages d'erreur

Vous pouvez modifier les messages d’erreur par défaut en important la fonction `requiredFn` :

```ts
import { requiredFn } from '@cnamts/vue-dot/src/rules/required';
```

Puis en passant en argument un objet contenant les messages d’erreur utilisés par cette règle de validation :

```ts
required = requiredFn({
	default: 'Ce champ est requis pour valider le formulaire.'
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="rules/required"></doc-api>
</doc-tab-item>

</doc-tabs>
