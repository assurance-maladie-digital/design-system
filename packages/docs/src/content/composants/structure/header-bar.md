---
title: HeaderBar
description: Le pattern `HeaderBar` est utilisé pour afficher l’en-tête d’une page ainsi qu’une barre de navigation.
---

<doc-tabs>

<doc-tab-item label="Utilisation">
<doc-usage name="header-bar"></doc-usage>

### Exemples

#### Titre et sous-titre

Vous pouvez afficher un titre et un sous-titre en utilisant les props `service-title` et `service-sub-title`.

<doc-alert type="info">
Le sous-titre sera automatiquement masqué sur les écrans mobiles.
</doc-alert>

<doc-example file="header-bar/title-sub-title"></doc-example>

#### Menu de navigation

Vous pouvez afficher un menu de navigation en utilisant la prop `navigation-items`.

<doc-example file="header-bar/navigation-bar"></doc-example>

#### Marque partenaire

Vous pouvez afficher une marque partenaire en utilisant le slot `secondary-logo`.

<doc-alert type="info">
L’utilisation de ce slot va masquer le séparateur vertical après le logo de l’Assurance Maladie, la signature du logo, ainsi que le logo secondaire.
</doc-alert>

<doc-example file="header-bar/secondary-logo-slot"></doc-example>

#### Slot par défaut

Vous pouvez ajouter du contenu dans la partie droite du header en utilisant le slot par défaut.

<doc-example file="header-bar/default-slot"></doc-example>

#### Contenu supplémentaire dans la barre de navigation

Vous pouvez ajouter du contenu avant ou après le contenu principal de la barre de navigation en utilisant les slots `navigation-bar-prepend` et `navigation-bar-secondary-content`.

<doc-example file="header-bar/navigation-bar-slots"></doc-example>

#### Contenu supplémentaire dans le menu mobile

Vous pouvez ajouter du contenu avant ou après le contenu principal du menu sur mobile en utilisant les slots `navigation-drawer-prepend` et `navigation-drawer-append`.

<doc-example file="header-bar/drawer-slots"></doc-example>

#### Thème

Vous pouvez utiliser un thème différent en utilisant la prop `theme`.

<doc-example file="header-bar/themes"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">

<doc-alert type="info">

Les propriétés non définies dans la section API seront reportées directement sur le composant `VAppBar`.

</doc-alert>

<doc-api name="header-bar"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Largeur interne

Vous pouvez définir une largeur interne en utilisant la prop `inner-width`.

<doc-example file="header-bar/inner-width"></doc-example>

### Bouton menu dans la barre de navigation

Vous pouvez afficher le bouton pour activer le menu dans la barre de navigation sur les écrans mobiles en utilisant la prop `show-nav-bar-menu-btn`.

<doc-example file="header-bar/nav-bar-menu-btn"></doc-example>

### Marque personnalisée

Vous pouvez personnaliser le contenu de la marque (titre, sous-titre…) en utilisant le slot `brand-content`.

<doc-example file="header-bar/brand-content"></doc-example>

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans le pattern `Header` en utilisant la prop `vuetify-options`.

<doc-example file="header-bar/options"></doc-example>

### Slots

Vous pouvez remplacer le contenu de la barre de navigation ainsi que du menu sur les écrans mobiles en utilisant les slots `navigation-bar-content` et `navigation-drawer-content`.

<doc-example file="header-bar/slots"></doc-example>

</doc-tab-item>

</doc-tabs>
