---
title: PaginatedTable
description: Le pattern `PaginatedTable` est utilisé pour afficher une [`VDataTable`](https://vuetifyjs.com/en/components/data-tables/) de Vuetify avec une pagination persistante.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="paginated-table/usage"></doc-example>

### Exemples

#### Pagination et tri côté serveur

Vous pouvez sauvegarder la pagination et le tri même si ceux-ci sont gérés côté serveur.

<doc-alert type="info">

Vous pouvez utiliser la prop `suffix` pour dissocier les différentes tables afin de sauvegarder leurs propriétés `options` indépendamment.

</doc-alert>

<doc-example file="paginated-table/api"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">

<doc-alert type="info">

Les propriétés non définies dans la section API seront reportées directement sur le composant `VDataTable`.

</doc-alert>

<doc-api name="paginated-table"></doc-api>
</doc-tab-item>

</doc-tabs>
