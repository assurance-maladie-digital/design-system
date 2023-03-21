---
title: InlineFilters
description: Le pattern `InlineFilters` est utilisé pour permettre à l’utilisateur de sélectionner des filtres.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

### Créer un filtre

Chaque filtre est composé d'un `name` qui sera utilisé dans le nom du slot, d'un `label` qui servira à nommer le filtre et d'un tableau vide `chips` dans lequel les éléments de filtrage seront stockés.

<doc-example file="inline-filters/create"></doc-example>

Il est possible de rajouter une description avec `description`, de précharger une valeur avec `value` ou de vider le champ après validation avec `clearAfterValidate`.

<doc-example file="inline-filters/more-details"></doc-example>

### Modifier l'affichage de la valeur

Il est possible de modifier la manière dont les valeurs seront affichés dans les chips en utilisant `formatting`.
Dans l'exemple ci dessous, le dernier filtre a été isolé des autres par un `margin-left: 40px`.

<doc-example file="inline-filters/formatting"></doc-example>

### Changer l’icône

Pour changer l’icône il suffit d'utiliser `icon` dans l'objet filtre.

<doc-example file="inline-filters/change-icon"></doc-example>

### Limite d'affichage des chips

Il peut être intéressant de limiter le nombre de chips affichés. Pour cela, il faudra utiliser la props `chips-limit`. Si aucune limite n'est préciser, elle sera par défaut bloquée à `4`.
S'il y a plus de chips que la limite, un bouton affichera le nombre de chips restantes. En cliquant sur ce bouton, l’intégralité des chips seront visibles.

<doc-example file="inline-filters/limit-chips"></doc-example>

### Limitation à une chip

Dans certains cas, il faut limiter à une chips. Par exemple dans le cas d'une range, quand on déplace le curseur, une première chip est ajoutée, et quand on déplace la deuxième, une seconde s'affiche.
Hors nous ne voulons qu'une seule valeur.
Pour cela, il faudra ajouter à l'object `limited: true`.

<doc-example file="inline-filters/limited"></doc-example>

### Retirer le bouton réinitialiser

Pour retirer le bouton réinitialiser, vous pouvez utiliser `:hideReset="true"`.

<doc-example file="inline-filters/hide-reset"></doc-example>

### Ajouter du style

dans filtre, vous pouvez utiliser `style` dans l'objet.

<doc-example file="inline-filters/add-style"></doc-example>

### Afficher le filtre dans la barre lattérale

Vous pouvez afficher le filtre de la barre latérale en ajoutant un bouton avec `sidebar-button`, vous pouvez aussi masquer une partie des filtre dans le mode simple. Vous les retrouverez dans la barre latérale en cliquant sur le bouton.

<doc-example file="inline-filters/sidebar-button"></doc-example>

### Ajouter un bouton Appliquer

Vous pouvez afficher un bouton **Appliquer** en utilisant `apply-button` et utiliser la props `apply-function` pour faire passer la fonction qui sera utiliser par le bouton.

<doc-example file="inline-filters/apply-button"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="inline-filters"></doc-api>
</doc-tab-item>

</doc-tabs>
