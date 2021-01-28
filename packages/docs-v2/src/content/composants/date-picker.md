---
title: DatePicker
description: Le pattern `DatePicker` est un composant utilisé pour permettre à l'utilisateur de sélectionner ou de saisir une date.
position: 7
---

<doc-tabs light>

<doc-tab-item label="Utilisation">

## Exemples

### Outlined

Vous pouvez afficher le `VTextField` en mode `outlined` grâce à la prop du même nom. Cela va aussi mettre l'icône en mode `append` et modifier la position du menu.

<doc-example file="date-picker/date-picker-outlined"></doc-example>

### Date de naissance

Vous pouvez permettre à l'utilisateur de sélectionner une date naissance plus facilement en utilisant la prop `birthdate`.

<doc-alert type="info">

L'utilisateur sélectionnera l'année en premier, puis le mois et enfin le jour et ne peut pas sélectionner une date future.

</doc-alert>

<doc-example file="date-picker/date-picker-birthdate"></doc-example>

### Weekends

Vous pouvez afficher les weekends dans le calendrier en utilisant la prop `show-weekends`.

<doc-example file="date-picker/date-picker-weekends"></doc-example>

### Période

Vous pouvez créer une période en fournissant une date de début via la prop `start-date`. Lorsque l'utilisateur aura sélectionné une date date le calendrier, la période sera alors affichée dans le calendrier.

<doc-alert type="info">
Lorsque que la date de début est située avant la date sélectionnée (période « négative »), la période n'est pas affichée.
</doc-alert>

<doc-example file="date-picker/date-picker-range"></doc-example>

### Format

Vous pouvez modifier le format de la date affichée dans le `VTextField` en utilisant la prop `date-format` ainsi que le format utilisé avec le `v-model` en utilisant la prop `date-format-return`.

<doc-alert type="info">
Par défaut un masque limitant les caractères pouvant être saisis dans le `VTextField` est calculé à partir de la prop `date-format`, mais vous pouvez le redéfinir en utilisant la prop `mask` en utilisant l'[API de la librairie vue-input-facade](https://ronaldjerez.github.io/vue-input-facade/).
</doc-alert>

<doc-example file="date-picker/date-picker-format"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="date-picker"></doc-api>
</doc-tab-item>

</doc-tabs>
