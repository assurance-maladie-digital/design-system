---
title: FormFieldList
description: Le composant `FormFieldList` est utilisé pour afficher un formulaire composé d'une liste de champs.
position: 13
---

<doc-tabs light>

<doc-tab-item label="Utilisation">

## Exemples

### Titre et description

Vous pouvez ajouter un titre ainsi qu'une description à votre formulaire en utilisant les props `list-title` et `description`.

<doc-example file="form-field-list/form-field-list-props"></doc-example>

### Gestion des évènements

Vous pouvez réagir lorsque la valeur d'un champ du formulaire change grâce à l'évènement `change`, ainsi que lorsque la valeur d'un champ dynamique (avec l'attribut `dynamic: true`) change grâce à l'événement `refresh`.

<doc-example file="form-field-list/form-field-list-events"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="form-field-list"></doc-api>
</doc-tab-item>

</doc-tabs>
