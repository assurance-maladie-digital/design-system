---
title: NewFilter
description: Le pattern `NewFilter` est utilisé pour permettre à l’utilisateur de sélectionner des filtres.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="new-filter/usage"></doc-example>

### Mode simple ou mode complexe

Vous pouvez utiliser le composant en **mode simple** si vous avez peu de filtres à ajouter en utilisant `:simple-mode="true"`.
Si vous avez beaucoup de filtres, il vaudra mieux utiliser le **mode complexe** en passant `simple-mode` à `false`.

</doc-usage><doc-example file="new-filter/complex-mode"></doc-example>

### Créer un filtre

Chaque filtre est composé d'un `name` qui sera utilisé dans le nom du slot, d'un `label` qui servira à nommer le filtre et d'un tableau vide `chips` dans lequel les éléments de filtrage seront stockés.

<doc-example file="new-filter/create"></doc-example>

Il est possible de rajouter une description avec `description`, de précharger une valeur avec `value` ou de vider le champ aprés validation avec `clearAfterValidate`.

<doc-example file="new-filter/more-details"></doc-example>

### Modifier l'affichage de la valeur

Il est possible de modifier la manière dont les valeurs seront affichés dans les chips en utilisant `formatting`.
Dans l'exemple ci dessous, le dernier filtre a été isolé des autres par un `margin-left: 40px`.

<doc-example file="new-filter/formatting"></doc-example>

### Plusieurs champs dans un filtre

Pour avoir plusieurs champs dans un seul filtre, il faut creer un composant.

<doc-example file="new-filter/period"></doc-example>

### Changer l'icone

Pour changer l'icone il suffit d'utiliser `icon` dans l'objet filtre.

<doc-example file="new-filter/change-icon"></doc-example>

### Limite d'affichage des chips

Il peut être interessant de limiter le nombre de chips affichés. Pour cela, il faudra utiliser la props `chips-limit`. Si aucune limite n'est préciser, elle sera par defaut bloquée à `4`.
S'il y a plus de chips que la limite, un bouton affichera le nombre de chips restantes. En cliquant sur ce bouton, l'integralité des chips seront visibles.

<doc-example file="new-filter/limit-chips"></doc-example>

### Limitation à une chip

Dans certains cas, il faut limiter à une chips. Par exemple dans le cas d'une range, quand on déplace le curseur, une première chip est ajoutée, et quand on déplace la deuxième, une seconde s'affiche.
Hors nous ne voulons qu'une seule valeur.
Pour cela, il faudra ajouter à l'object `limited: true`.

<doc-example file="new-filter/limited"></doc-example>

### Retirer le bouton reinitialiser en Mode simple

Pour retirer le bouton reinitialiser en `mode simple`, vous pouvez utiliser `:hideReset="true"`.

<doc-example file="new-filter/hide-reset"></doc-example>

### Ajouter du style

dans filtre, vous pouvez utiliser `style` dans l'objet.

<doc-example file="new-filter/add-style"></doc-example>

### Afficher le filtre complexe en mode simple

Vous pouvez afficher le filtre de la barre latérale en ajoutant un bouton avec `sidebar-button`, vous pouvez aussi masquer une partie des filtre dans le mode simple. Vous les retrouverez dans la barre latérale en cliquant sur le bouton.

<doc-example file="new-filter/sidebar-button"></doc-example>

### Ajouter un bouton Appliquer

Vous pouvez afficher un bouton **Appliquer** en utilisant `apply-button` et utiliser la props `apply-function` pour faire passer la fonction qui sera utiliser par le bouton.

<doc-example file="new-filter/apply-button"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="new-filter"></doc-api>
</doc-tab-item>

</doc-tabs>
