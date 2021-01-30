---
title: Debounce
description: La directive `v-debounce` est utilisée pour différer une mise à jour de `v-model` sur un champ de formulaire.
position: 23
---

<doc-tabs light>

<doc-tab-item label="Utilisation">

<doc-alert type="info">

Avec les composants, il n'est pas possible d'utiliser la syntaxe `v-model.lazy`.

La solution de contournement consiste à implémenter manuellement ce comportement en appliquant la valeur avec `:value="search"` et à mettre à jour celle-ci avec une fonction, comme par exemple :<br>
`@change="e => search = e"`.

Vous pouvez consulter [l'issue associée](https://github.com/vuejs/vue/issues/6914) sur le projet Vue.js pour plus d'informations.

</doc-alert>

## Exemples

### Délai

En utilisant un modificateur, il est possible de régler le délai d'exécution.

<doc-example file="debounce/debounce-arg"></doc-example>

### Champs de formulaires natifs

Les champs de formulaires natifs sont également supportés.

<doc-example file="debounce/debounce-native"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="debounce"></doc-api>
</doc-tab-item>

</doc-tabs>
