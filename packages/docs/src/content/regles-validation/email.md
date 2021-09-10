---
title: Règle de validation email
description: La règle `email` permet de vérifier la validité du format d'une adresse email.**
---

<doc-tabs>

<doc-tab-item label="Utilisation">

Pour utiliser la règle de validation `email`, vous devez l'importer :

```ts
import { email } from '@cnamts/vue-dot/src/rules/email';
```

Puis l'ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` :

```ts
rules = [
	email
];
```

## Messages d'erreur

Vous pouvez modifier les messages d’erreur par défaut en important la fonction `emailFn` :

```ts
import { emailFn } from '@cnamts/vue-dot/src/rules/email';
```

Puis en passant en argument un objet contenant les messages d’erreur utilisés par cette règle de validation :

```ts
required = requiredFn({
	default: 'Le format de l’adresse email n’est pas valide.'
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="rules/email"></doc-api>
</doc-tab-item>

</doc-tabs>
