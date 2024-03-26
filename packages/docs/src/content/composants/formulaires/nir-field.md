---
title: NirField
description: Le pattern `NirField` est utilisé pour permettre à l’utilisateur de saisir un numéro de Sécurité sociale (NIR).
---

<doc-alert-bridge class="mb-8">

Ce composant est disponible sur la version Bridge.

</doc-alert-bridge>

<doc-tabs>

<doc-tab-item label="Utilisation">

Le champ `NirField` est composé d’un ou de deux [`VTextField`](https://vuetifyjs.com/en/components/text-fields/) et applique un masque limitant les caractères pouvant être saisis, ainsi qu’une validation sur la longueur des champs.

<doc-usage name="nir-field"></doc-usage>

### Exemples

#### Obligatoire

Vous pouvez rendre la saisie d’une valeur obligatoire en utilisant la prop `required`.

<doc-example file="nir-field/required"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">

<doc-alert type="info">

Les propriétés non définies dans la section API seront reportées directement sur les composants `VTextField`.

</doc-alert>

<doc-api name="nir-field"></doc-api>
</doc-tab-item>

</doc-tabs>
