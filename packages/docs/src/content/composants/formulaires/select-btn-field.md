---
title: SelectBtnField
description: Le pattern `SelectBtnField` est utilisé pour permettre à l’utilisateur de sélectionner une valeur dans une liste.
---

<doc-alert-bridge class="mb-8">

Ce composant est disponible sur la version Bridge.

</doc-alert-bridge>

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="select-btn-field/usage"></doc-example>

### Exemples

#### Multiple

Vous pouvez permettre à l’utilisateur de sélectionner plusieurs valeurs en utilisant la prop `multiple`.

<doc-example file="select-btn-field/multiple"></doc-example>

#### Item unique

Vous pouvez créer un bouton qui désélectionne tous les autres boutons en utilisant la prop `unique`.

<doc-example file="select-btn-field/unique"></doc-example>

#### Inline

Vous pouvez afficher les boutons de sélection sur une seule ligne en utilisant la prop `inline`.

<doc-example file="select-btn-field/inline"></doc-example>

#### Messages d’aide

Vous pouvez afficher un message d’aide en utilisant la prop `hint`.

<doc-example file="select-btn-field/hint"></doc-example>

#### Erreur

Vous pouvez afficher une erreur en utilisant la prop `error`.

<doc-alert type="info">

Vous pouvez utiliser le modificateur `.sync` pour réinitialiser l’erreur lorsque l’utilisateur modifie la valeur du champ.

</doc-alert>

<doc-example file="select-btn-field/error"></doc-example>

#### Messages d’erreur

Vous pouvez afficher des messages d’erreur en utilisant la prop `error-messages`.

<doc-alert type="info">

Vous pouvez utiliser le modificateur `.sync` pour réinitialiser les messages d’erreur lorsque l’utilisateur modifie la valeur du champ.

</doc-alert>

<doc-example file="select-btn-field/error-messages"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">

<doc-api name="select-btn-field"></doc-api>
</doc-tab-item>

</doc-tabs>
