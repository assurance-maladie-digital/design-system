---
title: ContextualMenu
description: L’élément `ContextualMenu` est utilisé pour afficher un menu avec une liste d’ancres pour la navigation.
---

<doc-alert-bridge class="mb-8">

Ce composant est disponible sur la version Bridge.

</doc-alert-bridge>

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="contextual-menu/usage"></doc-example>


<doc-alert type="info">

Pour faire fonctionner le scroll avec des ancres, vous pouvez avoir besoin d’ajouter le [helper `scrollBehavior`](/composants-techniques/helpers/scroll-behavior/) à la configuration de Vue Router.

</doc-alert>

### Exemples

#### Titres de niveaux différents

Vous pouvez afficher des titres de niveaux différents en ajoutant la propriété `level` sur les items.

<doc-example file="contextual-menu/levels"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="contextual-menu"></doc-api>
</doc-tab-item>

</doc-tabs>
