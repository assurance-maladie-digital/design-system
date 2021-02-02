---
title: DatePicker
description: Le pattern `DatePicker` est un composant utilisé pour permettre à l'utilisateur de sélectionner ou de saisir une date.
position: 7
---

<doc-tabs light>

<doc-tab-item label="Utilisation">

## Exemples

### Outlined

Vous pouvez afficher le `VTextField` en mode `outlined` en utilisant la prop du même nom. Cela va également mettre l'icône en mode `append` et modifier la position du menu.

<doc-example file="date-picker/outlined"></doc-example>

### Date de naissance

Vous pouvez permettre à l'utilisateur de sélectionner une date naissance plus facilement en utilisant la prop `birthdate`.

<doc-alert type="info">
L'utilisateur sélectionnera l'année en premier, puis le mois et enfin le jour et ne peut pas sélectionner une date future.
</doc-alert>

<doc-example file="date-picker/birthdate"></doc-example>

### Weekends

Vous pouvez afficher les weekends dans le calendrier en utilisant la prop `show-weekends`.

<doc-example file="date-picker/weekends"></doc-example>

### Période

Vous pouvez créer une période en fournissant une date de début via la prop `start-date`. Lorsque l'utilisateur aura sélectionné une date date le calendrier, la période sera alors affichée dans le calendrier.

<doc-alert type="info">
Lorsque que la date de début est située avant la date sélectionnée (période « négative »), la période n'est pas affichée.
</doc-alert>

<doc-example file="date-picker/range"></doc-example>

### Format

Vous pouvez modifier le format de la date affichée dans le `VTextField` en utilisant la prop `date-format` ainsi que le format utilisé avec le `v-model` en utilisant la prop `date-format-return`.

<doc-alert type="info">

Par défaut un masque limitant les caractères pouvant être saisis dans le `VTextField` est calculé à partir de la prop `date-format`, mais vous pouvez le redéfinir en utilisant la prop `mask` en utilisant l'[API de la librairie vue-input-facade](https://ronaldjerez.github.io/vue-input-facade/).

</doc-alert>

<doc-example file="date-picker/format"></doc-example>

### Règles de validation

Vous pouvez appliquer des [règles de validation Vuetify](https://vuetifyjs.com/fr-FR/components/inputs/#rules) au `VTextField` contenu dans le composant en utilisant la prop `rules`.

Vous pouvez aussi ajouter des règles d'alertes, qui ne bloquent pas la validation, en utilisant la prop `warning-rules`.

Pour cela, vous pouvez utiliser les règles de validation inclues dans la librairie, comme :
- `required`
- `isDateValid`
- `notAfterToday`
- `notBeforeToday`

<doc-example file="date-picker/rules" /></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="date-picker"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans le pattern `DatePicker` en utilisant la prop `vuetify-options`.

<doc-example file="date-picker/options"></doc-example>

</doc-tab-item>

</doc-tabs>
