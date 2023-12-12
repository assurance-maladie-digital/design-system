---
title: ContextualMenu
description: L’élément `ContextualMenu` est utilisé pour afficher un menu avec une liste d’ancres pour la navigation.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="contextual-menu/usage"></doc-example>


<doc-alert type="info">

  Pour faire fonctionner le scroll vers les ancres, vous pouvez avoir besoin d'ajouter la propriété `scrollBehavior` à la configuration de vue-router.

  Plus d'information sur la documentation de vue-router:<br>
  [https://v3.router.vuejs.org/guide/advanced/scroll-behavior.html](https://v3.router.vuejs.org/guide/advanced/scroll-behavior.html)

</doc-alert>

```ts
scrollBehavior(to, _from, _savedPosition) {
  if (to.hash) {
    return {
      selector: to.hash
    };
  }
}
```

### Exemples

#### Titres de niveaux différents

Vous pouvez afficher des titres de niveaux différents en ajoutant la propriété `level` sur les items.

<doc-example file="contextual-menu/levels"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="contextual-menu"></doc-api>
</doc-tab-item>

</doc-tabs>
