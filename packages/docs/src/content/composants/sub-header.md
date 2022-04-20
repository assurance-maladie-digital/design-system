---
title: SubHeader
description: Le pattern `SubHeader` est utilisé pour afficher un bloc d’informations sous l’en-tête principale.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="sub-header"></doc-usage>

## Exemples

### Listes de données

Vous pouvez afficher des listes de données en utilisant la prop `data-list-group-items`.

<doc-alert type="info">

Vous pouvez afficher les valeurs dans les DataList via la directive `v-html` en utilisant la prop `render-html-value`.

</doc-alert>

<doc-alert type="warning">

Attention, l’utilisation de la directive `v-html` peut être dangereuse car cela peut facilement mener à des attaques XSS. N’utilisez cette directive que sur du contenu de confiance et jamais sur du contenu fourni par l’utilisateur.

</doc-alert>

<doc-example file="sub-header/data-list-group"></doc-example>

### Boutons d’actions

Vous pouvez ajouter des boutons d’actions dans les listes de données en utilisant la propriété `action` sur les items.

<doc-example file="sub-header/action"></doc-example>

### Informations complémentaires

Vous pouvez afficher des informations complémentaires en utilisant le slot `additional-informations`.

<doc-example file="sub-header/additional-infos"></doc-example>

### Mode chargement

Vous pouvez afficher le composant en mode chargement en utilisant la prop `loading`.

<doc-alert type="info">

Vous pouvez utiliser les props `items-number-loading` et `heading-loading` sur chaque [DataList](/composants/data-list) pour contrôler le nombre d’items à afficher pendant le chargement ainsi que la visibilité du squelette de chargement pour le titre.

</doc-alert>

<doc-example file="sub-header/loading"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="sub-header"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Slots

Vous pouvez utiliser les slots pour remplacer les contenus par défaut ou pour en ajouter.

<doc-example file="sub-header/slots"></doc-example>

</doc-tab-item>

</doc-tabs>
