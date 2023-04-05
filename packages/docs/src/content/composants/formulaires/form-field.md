---
title: FormField
description: Le composant `FormField` est utilisé pour afficher un champ de formulaire.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-alert type="info">

Ce composant requiert l’installation de la librairie [FormBuilder](/demarrer/installation#composants/form-builder).

</doc-alert>

<doc-example file="form-field/usage"></doc-example>

### Exemples

#### Titre, description et texte d’aide

Vous pouvez un titre, une description ainsi qu’un texte d’aide sur le champ en utilisant les attributs `title`, `description` et `tooltip`.

<doc-alert type="warning">

Le titre ne doit pas remplacer le label, qui identifie le champ pour les utilisateurs de lecteurs d’écran.

</doc-alert>

<doc-example file="form-field/question"></doc-example>

#### Types de champs

Vous retrouvez ci-dessous un exemple de chaque type de champ et leurs spécificités.

##### Champ texte

<doc-example file="form-field/text"></doc-example>

##### Champ zone de texte

<doc-example file="form-field/textarea"></doc-example>

##### Champ nombre

<doc-alert type="info">

Pour limiter les caractères que les utilisateurs peuvent entrer à des chiffres uniquement, vous devez définir un masque avec l’attribut `mask` de l’objet `fieldOptions` en utilisant l’[API de la librairie vue-input-facade](https://ronaldjerez.github.io/vue-input-facade/).

</doc-alert>

<doc-example file="form-field/number"></doc-example>

##### Champ mot de passe

<doc-example file="form-field/password"></doc-example>

##### Champ date

<doc-example file="form-field/date"></doc-example>

##### Champ période

<doc-example file="form-field/period"></doc-example>

##### Champ intervalle

<doc-example file="form-field/range"></doc-example>

##### Champ select

<doc-example file="form-field/select"></doc-example>

##### Champ select slider

<doc-example file="form-field/select-slider"></doc-example>

<doc-example file="form-field/select-slider-thumb"></doc-example>

##### Champ select bouton

<doc-example file="form-field/select-button"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="form-field"></doc-api>
</doc-tab-item>

</doc-tabs>
