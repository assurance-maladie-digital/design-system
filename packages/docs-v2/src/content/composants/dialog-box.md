---
title: DialogBox
description: L'élément `DialogBox` est utilisé pour afficher une boîte de dialogue avec des boutons d'actions.
position: 8
---

<doc-tabs light>

<doc-tab-item label="Utilisation">

## Exemples

### Modification de la largeur

Vous pouvez modifier la largeur de la boîte de dialogue avec l'attribut `width`.

<doc-example file="dialog-box/dialog-box-width"></doc-example>

### Modification des textes des boutons

Vous pouvez modifier les textes par défaut des boutons d'actions avec les attributs `cancel-btn-text` et `confirm-btn-text`.

<doc-example file="dialog-box/dialog-box-btn-text"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="dialog-box"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans l'élément `DialogBox` en utilisant la prop `vuetify-options`.

<doc-example file="dialog-box/dialog-box-options"></doc-example>

### Utilisation des slots

Vous pouvez utiliser le slot par défaut pour afficher du contenu, mais aussi les slots `title` et `actions` pour remplacer le titre et les boutons d'actions.

<doc-alert type="info">

Vous pouvez personnaliser les composants Vuetify contenus dans l'élément `DialogBox` en utilisant la prop `vuetify-options`.

</doc-alert>

<doc-example file="dialog-box/dialog-box-slots"></doc-example>

</doc-tab-item>

</doc-tabs>
