---
title: FiltersSideBar
description: Le pattern `FiltersSideBar` est utilisé pour permettre à l’utilisateur de sélectionner des filtres dans un panel dédié.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

### Utilisation

<doc-example file="filters-side-bar/usage"></doc-example>

### Modifier l'affichage de la valeur

Il est possible de modifier la manière dont les valeurs seront affichés dans les chips en utilisant `formatting`.
Dans l'exemple ci dessous, le dernier filtre a été isolé des autres par un `margin-left: 40px`.

<doc-example file="filters-side-bar/formatting"></doc-example>

### Limitation à une chip

Dans certains cas, il faut limiter à une chips. Par exemple dans le cas d'une range, quand on déplace le curseur, une première chip est ajoutée, et quand on déplace la deuxième, une seconde s'affiche.
Hors nous ne voulons qu'une seule valeur.
Pour cela, il faudra ajouter à l'object `limited: true`.

<doc-example file="filters-side-bar/limited"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="filters-side-bar"></doc-api>
</doc-tab-item>

</doc-tabs>
