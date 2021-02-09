---
title: DownloadBtn
description: L'élément `DownloadBtn` est utilisé pour permettre à l'utilisateur de télécharger un document provenant d'une API.
position: 9
---

<notification-bar></notification-bar>

<doc-tabs light>

<doc-tab-item label="Utilisation">

<doc-usage name="download-btn"></doc-usage>

## Exemples

### Nom et type du document

Le nom et le type du document sont récupérés des headers HTTP `Content-Disposition` et `Content-Type`.

<doc-example file="download-btn/name-type"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="download-btn"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans l'élément `DialogBox` en utilisant la prop `vuetify-options`.

<doc-example file="download-btn/options"></doc-example>

### Slots

Vous pouvez utiliser le slot par défaut pour afficher du contenu, mais aussi les slots `title` et `actions` pour remplacer le titre et les boutons d'actions.

<doc-example file="download-btn/slots"></doc-example>

</doc-tab-item>

</doc-tabs>
