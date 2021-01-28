---
title: SubHeader
description: Le pattern `SubHeader` est utilisé pour afficher un bloc d'informations sous l'en-tête principale.
position: 19
---

<doc-tabs light>

<doc-tab-item label="Utilisation">

## Exemples

### Listes de données

Vous pouvez afficher des listes de données en utilisant la prop `data-lists`.

<doc-info type="info">

Vous pouvez afficher les valeurs dans les DataList via la directive `v-html` en utilisant la prop `render-html-value`.

</doc-info>

<doc-info type="warning">

Attention, l'utilisation de la directive `v-html` peut être dangereuse car cela peut facilement mener à des attaques XSS. N'utilisez cette directive que sur du contenu de confiance et jamais sur du contenu fourni par l'utilisateur.

</doc-info type="info">

<doc-example file="sub-header/sub-header-data-lists"></doc-example>

### Boutons d'actions

Vous pouvez ajouter des boutons actions dans les listes de données en utilisant la propriété `action` sur les items.

<doc-example file="sub-header/sub-header-action"></doc-example>

### Informations complémentaires

Vous pouvez afficher des informations complémentaires en utilisant le slot `additional-informations`.

<doc-example file="sub-header/sub-header-additional-infos"></doc-example>

### Mode chargement

Vous pouvez afficher le composant en mode chargement grâce à la prop `loading`.

<doc-info type="info">

Vous pouvez utiliser les props `items-number-loading` et `heading-loading` sur chaque [DataList](../data-list/README.md) pour contrôler le nombre d'items à afficher pendant le chargement ainsi que la visibilité du squelette de chargement pour le titre.

</doc-info>

<doc-example file="sub-header/sub-header-loading"></doc-example>

### Utilisation des slots

Vous pouvez utiliser les slots pour remplacer les contenus par défaut ou pour en ajouter.

<doc-example file="sub-header/sub-header-slots"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="sub-header"></doc-api>
</doc-tab-item>

</doc-tabs>
