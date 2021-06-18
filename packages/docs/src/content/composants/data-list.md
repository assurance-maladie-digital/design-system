---
title: DataList
description: L'élément `DataList` est utilisé pour afficher une liste d'informations.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="data-list"></doc-usage>

## Exemples

### Icônes

Vous pouvez spécifier une icône à afficher pour chaque item de la liste en utilisant la prop `icons` afin de définir la liste des icônes disponibles.
Si une icône est spécifiée mais qu'elle n'est pas trouvée dans la liste, rien ne sera affiché.

<doc-alert type="info">
Il est nécessaire de lister manuellement toutes les icônes possible afin de n'importer que celles que vous allez utiliser et de garantir de meilleures performances.
</doc-alert>

<doc-example file="data-list/icons"></doc-example>

### Bouton d'action

Vous pouvez ajouter un bouton d'action à chaque item en utilisant la propriété `action` sur l'item.

<doc-example file="data-list/action"></doc-example>

### Étiquette

Vous pouvez afficher certains items de la liste dans une `VChip` et modifier l'affichage de celle-ci en utilisant la propriété `options` sur l'item.

<doc-example file="data-list/chip"></doc-example>

### Valeurs HTML

Vous pouvez afficher les valeurs via la directive `v-html` en utilisant la prop `render-html-value`.

<doc-alert type="warning">

Attention, l'utilisation de la directive `v-html` peut être dangereuse car cela peut facilement mener à des attaques XSS. N'utilisez cette directive que sur du contenu de confiance et jamais sur du contenu fourni par l'utilisateur.

</doc-alert>

<doc-example file="data-list/html-value"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="data-list"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans l'élément `DataListItem` en utilisant la propriété `options` sur les items de la liste.

<doc-example file="data-list/options"></doc-example>

### Slots

Vous pouvez utiliser le slot `title` pour personnaliser le titre.

<doc-example file="data-list/slot"></doc-example>

</doc-tab-item>

</doc-tabs>
