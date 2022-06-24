---
title: UploadWorkflow
description: Le pattern `UploadWorkflow` est utilisé pour permettre à l’utilisateur de sélectionner une liste de fichiers.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="upload-workflow/usage"></doc-example>

### Exemples

#### Événements

Vous pouvez réagir lorsque la liste des fichiers est mise à jour en utilisant l’événement `change`, et réagir aux erreurs de validation en utilisant l’événement `error`.

<doc-example file="upload-workflow/events"></doc-example>

#### Un seul fichier

Lorsque que la liste ne contient qu’un seul fichier, la boîte de dialogue demandant à l’utilisateur de choisir quel fichier il a sélectionné ne sera pas affichée.

<doc-example file="upload-workflow/single-file"></doc-example>

#### Fichiers optionnels

Vous pouvez spécifier des fichiers optionnels en utilisant la prop `optional`.

<doc-example file="upload-workflow/optional"></doc-example>

#### Bouton *Afficher le fichier*

Vous pouvez afficher un bouton permettant de visualiser un fichier sélectionné en utilisant l’option `showViewBtn` du composant `FileList`.

<doc-example file="upload-workflow/view-file"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="upload-workflow"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans le pattern `UploadWorkflow` en utilisant la prop `vuetify-options`.

<doc-example file="upload-workflow/options"></doc-example>

### Slots

Vous pouvez utiliser les slots `title` et `modal-title` pour remplacer le titre de la section et le titre de la modale de sélection du fichier.

<doc-example file="upload-workflow/slots"></doc-example>

</doc-tab-item>

</doc-tabs>
