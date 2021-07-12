---
title: FormFieldList
description: Le composant `FormFieldList` est utilisé pour afficher un formulaire composé d’une liste de champs.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-alert type="info">

Ce composant requiert l’installation de la librairie [FormBuilder](/demarrer/installation#composants/form-builder).

</doc-alert>

<doc-example file="form-field-list/usage"></doc-example>

## Exemples

### Titre et description

Vous pouvez ajouter un titre et une description en utilisant les props `list-title` et `description`.

<doc-example file="form-field-list/props"></doc-example>

### Événements

Vous pouvez écouter la mise à jour de la valeur d’un champ du formulaire en utilisant l’événement `change`, ainsi que la mise à jour de la valeur d’un champ dynamique (avec l’attribut `dynamic`) en utilisant l’événement `refresh`.

<doc-example file="form-field-list/events"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="form-field-list"></doc-api>
</doc-tab-item>

</doc-tabs>
