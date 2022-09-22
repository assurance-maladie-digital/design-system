---
title: FiltersSideBar
description: Le pattern `FiltersSideBar` est utilisé pour permettre à l’utilisateur de sélectionner des filtres dans un panel dédié.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="filters-side-bar/usage"></doc-example>

### Exemples

#### Formatage des puces

Vous pouvez modifier le formatage des puces en utilisant la propriété `chipFormat`.

<doc-alert type="info">

Le nombre de filtres sélectionnés est automatiquement calculé en fonction du nombre de puces affichées.<br>
De ce fait, si vous combinez les valeurs d’un champ dans une seule puce, le nombre de filtres sélectionnés en sera impacté.

</doc-alert>

<doc-example file="filters-side-bar/chip-format"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="filters-side-bar"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Style des panneaux

Vous pouvez modifier le style des panneaux en utilisant les classes générées à partir des noms des filtres.

<doc-example file="filters-side-bar/custom-style"></doc-example>

</doc-tab-item>

</doc-tabs>
