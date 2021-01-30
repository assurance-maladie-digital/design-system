---
title: TableToolbar
description: Le pattern `TableToolbar` est utilisé pour afficher une barre au-dessus des tableaux.
position: 21
---

<doc-tabs light>

<doc-tab-item label="Utilisation">

## Exemples

### Bouton ajouter

Vous pouvez afficher un bouton *Ajouter* en utilisant la prop `show-add-btn`.

<doc-example file="table-toolbar/table-toolbar-add"></doc-example>

### Nombre de lignes filtrées

Vous pouvez afficher le nombre de lignes filtrées par rapport au nombre total en utilisant la prop `nb-filtered`.

<doc-example file="table-toolbar/table-toolbar-nb-filtered"></doc-example>

### Mode chargement

Vous pouvez afficher le composant en mode chargement en utilisant la prop `loading`, cela va désactiver les éléments interactifs.

<doc-example file="table-toolbar/table-toolbar-loading"></doc-example>

### Personnalisation du texte pour le nombre de lignes

Il est également possible de modifier le texte du bouton en utilisant prop `add-btn-label`.

Pour l'indicateur du nombre de lignes, par défaut il est indiqué le texte 'ligne' ou 'lignes' automatiquement s'il y en a plusieurs.

Il est possible de modifier ce texte avec la prop `row-text`.

<doc-example file="table-toolbar/table-toolbar-row-text"></doc-example>

### Label de recherche

Vous pouvez modifier le label de la recherche avec la prop `search-label`.

<doc-example file="table-toolbar/table-toolbar-search-label"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="table-toolbar"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans le pattern `TableToolbar` en utilisant la prop `vuetify-options`.

<doc-example file="table-toolbar/table-toolbar-options"></doc-example>

### Slots

Vous pouvez utiliser le slot `search-left` pour ajouter du contenu à gauche du champ *Recherche*.

<doc-example file="table-toolbar/table-toolbar-slots"></doc-example>

</doc-tab-item>

</doc-tabs>
