---
title: Règle de validation matchPattern
description: La règle `matchPattern` permet de valider la valeur d’un champ de formulaire en fonction d’une expression régulière.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

Pour utiliser la règle de validation `matchPattern`, vous devez l’importer :

```ts
import { matchPattern } from '@cnamts/vue-dot/src/rules/matchPattern';
```

Puis l’ajouter dans un tableau qui sera utilisé sur un champ de formulaire via la prop `rules` :

```ts
rules = [
  matchPattern(pattern)
];
```

## Messages d’erreur

Vous pouvez modifier les messages d’erreur par défaut en passant en argument un objet contenant les messages d’erreur utilisés par cette règle de validation :

```ts
matchPatternRule = matchPattern(pattern, {
  default: () => `Le champ ne correspond pas au format attendu.`
});
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="rules/match-pattern"></doc-api>
</doc-tab-item>

</doc-tabs>
