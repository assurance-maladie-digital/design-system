---
title: DataListGroup
description: Le pattern `DataListGroup` est utilisé pour afficher une liste de `DataList`.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="data-list-group"></doc-usage>

### Exemples

#### Icônes

Vous pouvez spécifier une icône à afficher pour chaque item de la `DataList` en utilisant la prop `icons` afin de définir la liste des icônes disponibles.
Si une icône est spécifiée mais qu’elle n’est pas trouvée dans la liste, rien ne sera affiché.

<doc-alert type="info">
Il est nécessaire de lister manuellement toutes les icônes afin de n’importer que celles que vous allez utiliser et ainsi de garantir de meilleures performances.
</doc-alert>

<doc-example file="data-list-group/icons"></doc-example>

#### Bouton d’action

Vous pouvez ajouter un bouton d’action à un item en utilisant la propriété `action` sur celui-ci.

<doc-example file="data-list-group/action"></doc-example>

#### Valeurs HTML

Vous pouvez afficher les valeurs via la directive `v-html` en utilisant la prop `render-html-value`.

<doc-alert type="warning">

Attention, l’utilisation de la directive `v-html` peut être dangereuse car cela peut facilement mener à des attaques XSS. N’utilisez cette directive que sur du contenu de confiance et jamais sur du contenu fourni par l’utilisateur.

</doc-alert>

<doc-example file="data-list-group/html-value"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="data-list-group"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans l'élément `DataListItem` en utilisant la propriété `options` sur les items des listes.

<doc-example file="data-list-group/options"></doc-example>

</doc-tab-item>

</doc-tabs>
