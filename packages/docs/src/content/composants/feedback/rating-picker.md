---
title: RatingPicker
description: L’élément `RatingPicker` permet de recueillir l’avis d’un utilisateur.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="rating-picker"></doc-usage>

### Exemples

#### Note sur 5 étoiles

Vous pouvez demander une note sur 5 étoiles en utilisant le type `stars`.

<doc-alert type="info">
Les questions secondaires passées dans le slot par défaut s’afficheront si la note est inférieure ou égale à trois.
</doc-alert>

<doc-example file="rating-picker/stars"></doc-example>

#### Note de 1 à 10

Vous pouvez demander une note sur 10 en utilisant le type `number`.

<doc-alert type="info">

Les questions secondaires passées dans le slot par défaut s’afficheront si la note est inférieure ou égale à sept.<br>
En mobile, le composant affichera un `VSelect` pour faciliter la saisie.

</doc-alert>

<doc-example file="rating-picker/number"></doc-example>

#### Note par émotions

Vous pouvez demander une note par émotions en utilisant le type `emotion`.

<doc-alert type="info">

Les questions secondaires passées dans le slot par défaut s’afficheront si la note n’est pas maximale.<br>
Vous pouvez utiliser la prop `item-labels` pour adapter les labels à la question posée.

</doc-alert>

<doc-example file="rating-picker/emotion"></doc-example>

#### Note par émotion en question secondaire

Vous pouvez utiliser le composant `EmotionPicker` en tant que question secondaire.

<doc-example file="rating-picker/emotion-question"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">

<doc-api name="rating-picker"></doc-api>

</doc-tab-item>

</doc-tabs>
