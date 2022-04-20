---
title: DialogBox
description: L’élément `DialogBox` est utilisé pour afficher une boîte de dialogue avec des boutons d’actions.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="dialog-box"></doc-usage>

## Exemples

### Largeur

Vous pouvez modifier la largeur de la boîte de dialogue en utilisant la prop `width`.

<doc-example file="dialog-box/width"></doc-example>

### Textes des boutons

Vous pouvez modifier les textes par défaut des boutons d’actions en utilisant les props `cancel-btn-text` et `confirm-btn-text`.

<doc-example file="dialog-box/btn-text"></doc-example>

### Boutons d’actions masqués

Vous pouvez masquer les boutons d’actions en utilisant la prop `hide-actions`.

<doc-example file="dialog-box/hide-actions"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">

<doc-alert type="info">

Les propriétés non définies dans la section API seront reportées directement sur le composant `VDialog`.

</doc-alert>

<doc-api name="dialog-box"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans l’élément `DialogBox` en utilisant la prop `vuetify-options`.

<doc-example file="dialog-box/options"></doc-example>

### Slots

Vous pouvez utiliser le slot par défaut pour afficher du contenu, mais également les slots `title` et `actions` pour remplacer le titre et les boutons d’actions.

<doc-example file="dialog-box/slots"></doc-example>

</doc-tab-item>

</doc-tabs>
