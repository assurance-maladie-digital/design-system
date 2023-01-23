---
title: UploadWorkflow
description: Le pattern `UploadWorkflow` est utilisé pour permettre à l’utilisateur de sélectionner une liste de fichiers.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-alert type="info">

Nous avons mis à jour l’API du composant pour permettre une [sélection libre](#mode-sélection-libre), mais il est toujours possible d’utiliser [l’ancienne API](#mode-retrocompatible).

</doc-alert>

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

#### Bouton _Afficher le fichier_

Vous pouvez afficher un bouton permettant de visualiser un fichier sélectionné en utilisant l’option `showViewBtn` du composant `FileList`.

<doc-example file="upload-workflow/view-file"></doc-example>

#### Mode sélection libre

Vous pouvez laisser l’utilisateur sélectionner le nombre de fichiers qu’il souhaite en ne spécifiant pas de liste de fichiers à sélectionner.

<doc-example file="upload-workflow/unrestricted"></doc-example>

#### Prévisualisation des fichiers

Vous pouvez permettre à l’utilisateur de prévisualiser le fichier qu’il vient de sélectionner avant de valider en utilisant la prop `show-file-preview`.

<doc-alert type="info">
Seuls les fichiers de type PDF et les images peuvent être prévisualisés.
</doc-alert>

<doc-example file="upload-workflow/file-preview"></doc-example>

#### Mode rétrocompatible

Vous pouvez toujours spécifier la liste des fichiers à sélectionner en utilisant le `v-model`.

<doc-alert type="warning">

Ce mode de fonctionnement est déprécié depuis la [version 2.5.0](https://github.com/assurance-maladie-digital/design-system/releases/tag/v2.5.0) et sera supprimé dans la prochaine version majeure.

</doc-alert>

<doc-example file="upload-workflow/backward-compatible"></doc-example>
</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="upload-workflow"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans le pattern `UploadWorkflow` en utilisant la prop `vuetify-options`.

<doc-example file="upload-workflow/options"></doc-example>

### Slots

Vous pouvez utiliser les slots `title` et `modal-title` pour remplacer le titre de la section et le titre de la modale de sélection du fichier, ainsi que le slot `modal-description` pour ajouter un texte supplémentaire dans la modale de sélection du fichier.

<doc-example file="upload-workflow/slots"></doc-example>

</doc-tab-item>

</doc-tabs>

<doc-sticky-button icon="view-dashboard" title="Vue d'ensemble" target="../../demarrer/vue-ensemble"></doc-sticky-button>
