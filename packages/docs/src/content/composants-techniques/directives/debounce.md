---
title: Debounce
description: La directive `v-debounce` est utilisée pour différer la mise à jour d’un `v-model` sur un champ de formulaire.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="debounce/usage"></doc-example>

<doc-alert type="info">

Avec les composants Vue.js, il n’est pas possible d’utiliser la syntaxe `v-model.lazy`.

La solution de contournement consiste à implémenter manuellement ce comportement en appliquant la valeur avec `:value="search"` et à mettre à jour celle-ci avec une fonction, comme par exemple :<br>
`@change="e => search = e"`.

Vous pouvez consulter [l’issue associée](https://github.com/vuejs/vue/issues/6914) sur le projet Vue.js pour plus d’informations.

</doc-alert>

## Exemples

### Délai

Vous pouvez modifier le délai d’exécution en utilisant un modificateur.

<doc-example file="debounce/arg"></doc-example>

### Champs de formulaires natifs

Les champs de formulaires natifs sont également supportés.

<doc-example file="debounce/native"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="debounce"></doc-api>
</doc-tab-item>

</doc-tabs>
