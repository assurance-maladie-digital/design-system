---
title: FiltersInline
description: Le pattern `FiltersInline` est utilisé pour permettre à l’utilisateur de sélectionner des filtres directement dans la page.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="filters-inline/usage"></doc-example>

### Exemples

#### Formatage des puces

Vous pouvez modifier le formatage des puces en utilisant la propriété `chipFormat`.

<doc-alert type="info">

Le nombre de filtres sélectionnés est automatiquement calculé en fonction du nombre de puces affichées.<br>
De ce fait, si vous combinez les valeurs d’un champ dans une seule puce, le nombre de filtres sélectionnés en sera impacté.

</doc-alert>

<doc-example file="filters-inline/chip-format"></doc-example>

#### Combinaison de composants filtres

Vous pouvez utiliser plusieurs composants de filtres pour un seul et même filtre afin de pouvoir modifier un filtre à différents endroits sur une page.

<doc-example file="filters-inline/filter-combination"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="filters-inline"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Style des boutons

Vous pouvez modifier le style des boutons en utilisant les classes générées à partir des noms des filtres.

<doc-example file="filters-inline/custom-style"></doc-example>

</doc-tab-item>

</doc-tabs>
