---
title: HeaderBar
description: Le pattern `HeaderBar` est utilisé pour afficher l’en-tête d’une page ainsi qu’une barre de navigation.
---

<doc-tabs>

<doc-tab-item label="Utilisation">
<doc-usage name="header-bar"></doc-usage>

## Exemples

### Titre et sous-titre

Vous pouvez afficher un titre et un sous-titre en utilisant les props `service-title` et `service-sub-title`.

<doc-alert type="info">
Le sous-titre sera automatiquement masqué sur les écrans mobiles.
</doc-alert>

<doc-example file="header-bar/title-sub-title"></doc-example>

### Menu de navigation

Vous pouvez afficher un menu de navigation en utilisant la prop `navigation-items`.

<doc-example file="header-bar/navigation-bar"></doc-example>

### Marque partenaire

Vous pouvez afficher une marque partenaire en utilisant le slot `secondary-logo`.

<doc-alert type="info">
L’utilisation de ce slot va masquer le séparateur vertical après le logo de l’Assurance Maladie et masquer la signature du logo.
</doc-alert>

<doc-example file="header-bar/secondary-logo-slot"></doc-example>

### Slot par défaut

Vous pouvez ajouter du contenu dans la partie droite du header en utilisant le slot par défaut.

<doc-example file="header-bar/default-slot"></doc-example>

### Thème

Vous pouvez utiliser un thème différent en utilisant la prop `theme`.

<doc-example file="header-bar/themes"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="header-bar"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

</doc-tab-item>

</doc-tabs>
