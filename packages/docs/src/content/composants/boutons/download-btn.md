---
title: DownloadBtn
description: L’élément `DownloadBtn` est utilisé pour permettre à l’utilisateur de télécharger un document provenant d’une API.
---

<!-- NotificationBar is required to display notifications from DownloadBtn -->
<notification-bar></notification-bar>

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-alert type="info">

Ce composant requiert l’utilisation du pattern [`NotificationBar`](/composants/feedback/notification-bar) pour afficher les notifications de succès et d’erreur.

</doc-alert>

<doc-usage name="download-btn"></doc-usage>

### Exemples

#### Nom et type du document

Le nom et le type du document sont récupérés des headers HTTP `Content-Disposition` et `Content-Type`.

<doc-example file="download-btn/name-type"></doc-example>

#### Nom par défaut

Vous pouvez utiliser la prop `fallback-filename` pour définir un nom de fichier par défaut s’il n’est pas présent dans le header `Content-Disposition`.

Si cette propriété n’est pas présente, le nom par défaut sera la date du jour et l’heure de téléchargement.

<doc-example file="download-btn/fallback-filename"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">

<doc-alert type="info">

Les propriétés non définies dans la section API seront reportées directement sur le composant `VBtn`.

</doc-alert>

<doc-api name="download-btn"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans l’élément `DialogBox` en utilisant la prop `vuetify-options`.

<doc-example file="download-btn/options"></doc-example>

### Slots

Vous pouvez utiliser le slot par défaut pour afficher du contenu, mais aussi les slots `title` et `actions` pour remplacer le titre et les boutons d’actions.

<doc-example file="download-btn/slots"></doc-example>

</doc-tab-item>

</doc-tabs>

<doc-sticky-button icon="view-dashboard" title="Vue d'ensemble" target="../../demarrer/vue-ensemble"></doc-sticky-button>
