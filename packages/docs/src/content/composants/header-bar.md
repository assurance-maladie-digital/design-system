---
title: HeaderBar
description: Le pattern `HeaderBar` est utilisé pour afficher l’en-tête d’une page.
---

<doc-tabs>

<doc-tab-item label="Utilisation">
<doc-usage name="header-bar"></doc-usage>

## Exemples

### SearchBar

Vous pouvez ajouter une `SearchBar` à votre `Header`. Vous pouvez récupérer la valeur du champ de recherche à l’aide de `@search`;

<doc-example file="header-bar/search-bar"></doc-example>

### NavBar

Vous pouvez ajouter un `SubHeader` à votre `Header`. Vous pouvez configurer indépandament le thème du `SubHeader` en fonction de vos besoins avec la props `nav-bar`;

<doc-example file="header-bar/nav-bar"></doc-example>

### Theme

Vous pouvez utiliser la props `theme` pour appliquer une configuration pré-enregistrée à votre `Header` ou paramétrer `theme: 'custom'` pour personnaliser le composant;

<doc-example file="header-bar/theme"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="header-bar"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

## Slots

### Slot *daughter-brand*

Vous pouvez ajouter une marque fille à côté du logo en utilisant ce slot.

<doc-example file="header-bar/daughter-brand"></doc-example>

### Slot *user-bar*

Vous pouvez afficher une barre d’outils, un menu contextuel, ou encore ce que bon vous semble dans la zone de droite du header. Cette zone est entièrement personnalisable.

<doc-example file="header-bar/user-bar"></doc-example>

### Slot *navigation* & *responsive-nav*

Vous pouvez utiliser le sub-header pour afficher un menu de navigation entièrement personnalisable via le slot `navigation`. A l'aide du slot `responsive-nav`, vous pouvez créer un menu différent pour la navigation mobile.

<doc-example file="header-bar/navigation"></doc-example>

Vous pouvez également utiliser le sub-header avec le slot `navigation` pour afficher tout autre contenu de votre convenance. Le nom du slot n’impose pas le contenu.
Pour forcer l’affichage du sub-header en version mobile, vous devez utiliser la props `nav-bar`.

<doc-example file="header-bar/navigation-alt"></doc-example>

### Slot *sub-bar*

Vous pouvez complètement réécrire le sub header si la configuration actuelle ne vous convient pas en utilisant ce slot.

<doc-example file="header-bar/sub-bar"></doc-example>

### Slot *brand*

Vous pouvez complètement réécrire le header et la section du logo en associant le slot `brand` et la props `theme: custom`.

<doc-example file="header-bar/brand"></doc-example>

</doc-tab-item>

</doc-tabs>
