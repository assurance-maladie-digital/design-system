---
title: FileUpload
description: Le pattern `FileUpload` est utilisé pour permettre à l'utilisateur de sélectionner ou de glisser-déposer des fichiers.
position: 10
---

<doc-tabs light>

<doc-tab-item label="Utilisation">

## Exemples

### Règles de validation

Vous pouvez modifier taille maximale d'un fichier ainsi que les extensions autorisées avec les props `file-size-max` et `allowed-extensions`.

<doc-alert type="info">

Vous pouvez spécifier la prop `accept` pour définir quels types de fichiers l'utilisateur peut sélectionner. Par défaut, celle-ci est calculée automatiquement à partir de la prop `allowed-extensions`.

</doc-alert>

<doc-example file="file-upload/file-upload-rules"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="file-upload"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Utilisation des slots

#### Textes et icône

Vous pouvez utiliser les slots `action-text`, `or`, `button-text`, `info-text` et `icon` pour remplacer les textes et l'icône par défaut.

<doc-example file="file-upload/file-upload-slots"></doc-example>

#### Contenu par défaut

Vous pouvez utiliser le slot `placeholder` pour remplacer le contenu par défaut.

<doc-example file="file-upload/file-upload-slot-placeholder"></doc-example>

</doc-tab-item>

</doc-tabs>
