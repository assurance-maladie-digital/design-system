---
title: BackBtn
description: L’élément `BackBtn` est utilisé pour permettre à l’utilisateur de revenir à la page précédente.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="back-btn"></doc-usage>

<doc-alert type="info">

Par défaut, le composant `BackBtn` n'effectue aucune action, vous devez implémenter une redirection ou une action lors du clic sur le bouton.

</doc-alert>

</doc-tab-item>

<doc-tab-item label="API">

<doc-alert type="info">

Les propriétés non définies dans la section API seront reportées directement sur le composant `VBtn`.

</doc-alert>

<doc-api name="back-btn"></doc-api>

</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Dark mode

Vous pouvez utiliser la propriété `dark` pour afficher le bouton dans le thème sombre.

<doc-example file="back-btn/dark"></doc-example>

### Slots

Vous pouvez utiliser le slot par défaut pour remplacer le texte du bouton et le slot `icon` pour remplacer l'icône par défaut.

<doc-example file="back-btn/slots"></doc-example>

</doc-tab-item>

</doc-tabs>
