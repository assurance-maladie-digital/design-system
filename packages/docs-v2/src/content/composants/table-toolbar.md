---
title: TableToolbar
description: Le pattern `TableToolbar` est utilisé pour afficher une barre au-dessus des tableaux.
position: 21
---

<doc-tabs light>

<doc-tab-item label="Utilisation">

## Exemples

### Bouton *Ajouter*

Vous pouvez afficher un bouton permettant une action d'ajout en utilisant la prop `show-add-btn`.

<doc-example file="table-toolbar/add-btn"></doc-example>

### Nombre de lignes filtrées

Vous pouvez afficher le nombre de lignes filtrées par rapport au nombre total en utilisant la prop `nb-filtered`.

<doc-example file="table-toolbar/nb-filtered"></doc-example>

### Mode chargement

Vous pouvez afficher le composant en mode chargement en utilisant la prop `loading`, cela va désactiver les éléments interactifs.

<doc-example file="table-toolbar/loading"></doc-example>

### Textes par défaut

Il est possible de modifier le texte du nombre de lignes en utilisant la prop `row-text` (la marque du pluriel est ajoutée automatiquement).

Il est également possible de modifier le texte du champ *Recherche* en utilisant la prop `search-label` ainsi que celui du bouton *Ajouter* en utilisant la prop `add-btn-label`.

<doc-example file="table-toolbar/labels"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="table-toolbar"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans le pattern `TableToolbar` en utilisant la prop `vuetify-options`.

<doc-example file="table-toolbar/options"></doc-example>

### Slots

Vous pouvez utiliser le slot `search-left` pour ajouter du contenu à gauche du champ *Recherche*.

<doc-example file="table-toolbar/slots"></doc-example>

</doc-tab-item>

</doc-tabs>
