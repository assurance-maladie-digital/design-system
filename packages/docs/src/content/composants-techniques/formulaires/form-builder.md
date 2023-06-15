---
title: FormBuilder
description: Le composant `FormBuilder` est utilisé pour afficher un questionnaire.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-alert type="warning">

Le `FormBuilder` est prévu pour être utilisé avec le bundle PHP `questionnaire-bundle` ou pour afficher des questionnaires à partir d’un objet JSON.

Si vous souhaitez implémenter un formulaire classique, utilisez les champs de formulaire de Vuetify et du Design System.

</doc-alert>

<doc-alert type="info">

Ce composant requiert l’installation de la librairie [FormBuilder](/demarrer/installation#composants/form-builder).

</doc-alert>

<doc-example file="form-builder/usage"></doc-example>

### Exemples

#### Événements

Vous pouvez écouter la mise à jour de la valeur d’un champ du formulaire en utilisant l’événement `change`, ainsi que la mise à jour de la valeur d’un champ dynamique (avec l’attribut `dynamic`) en utilisant l’événement `refresh`.

<doc-example file="form-builder/events"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="form-builder"></doc-api>
</doc-tab-item>

</doc-tabs>
