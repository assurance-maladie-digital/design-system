---
title: TableToolbar
description: Le pattern `TableToolbar` est utilisé pour afficher une barre au-dessus des tableaux.
position: 20
---

<doc-tabs light>

<doc-tab-item label="Utilisation">

## Exemples

### Mode chargement

Vous pouvez afficher le composant en mode chargement grâce à la prop `loading`.

<doc-example file="table-toolbar/table-toolbar-loading"></doc-example>

### Mode ajout

Vous pouvez afficher un bouton pour permettre une action d'ajout grâce à la prop `show-add-btn`.

Il est aussi possible d'ajouter un label au bouton avec la prop `add-btn-label`.

<doc-example file="table-toolbar/table-toolbar-add"></doc-example>

### Personnalisation du texte pour le nombre de lignes

Pour l'indicateur du nombre de lignes, par défaut il est indiqué le texte 'ligne' ou 'lignes' automatiquement s'il y en a plusieurs.

Il est possible de modifier ce texte avec la prop `row-text`.

<doc-example file="table-toolbar/table-toolbar-row-text"></doc-example>

### Afficher le nombre de lignes filtrées

Vous pouvez afficher le nombre de lignes filtrées par rapport au nombre total avec la prop `nb-filtered`.

<doc-example file="table-toolbar/table-toolbar-nb-filtered"></doc-example>

### Label de recherche

Vous pouvez modifier le label de la recherche avec la prop `search-label`.

<doc-example file="table-toolbar/table-toolbar-search-label"></doc-example>

### Eléments personnalisés avant le recherche

Vous pouvez afficher des éléments à gauche de la recherche avec le slot `search-left`.

<doc-example file="table-toolbar/table-toolbar-search-left"></doc-example>

### Personnalisation des composants

Vous pouvez personnaliser les composants Vuetify contenus dans l'élément `TableToolbar` en utilisant la prop `vuetify-options`.

<doc-example file="table-toolbar/table-toolbar-options"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="table-toolbar"></doc-api>
</doc-tab-item>

</doc-tabs>
