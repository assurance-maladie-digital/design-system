---
title: RatingPicker
description: Fortement inspiré du composant [VRating](https://v2.vuetifyjs.com/en/components/ratings), l’élément `RatingPicker` permet de receuillir l'avis d'un utilisateur.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

## Type de Question possible

Selon le type, la question se presente soit :
- `EmotionPicker` avec 2 ou 3 icones resumant l'état d'esprit
- `StarPicker` avec 5 étoiles pour resumer sa satisfaction
- `NumberPicker` avec des chiffres de 1 à 10 pour resumer sa satisfaction


#### `StarPicker` - une note sur 5 étoiles.

Le label s'affiche sous les étoiles au rollover.

Les questions secondaires s'afficheront si la note est de `3` ou moins.

<doc-example file="rating-picker/stars"></doc-example>

#### `NumberPicker` - Une note de 1 à 10.

Les label indiquent à quoi correspond les deux notes 1 et 10 via des labels.

Les questions secondaires s'afficheront si la note est de `7` ou moins.

<doc-example file="rating-picker/numbers"></doc-example>

#### `EmotionPicker` - Une évaluation par émotion

Le nombre de choix utilise la prop `length` qui n'accepte que 2 ou 3.

Il est possible de changer les labels des émotions avec la prop `item-labels`.

Les questions secondaires s'afficheront si la note n'est pas maximale.

<doc-example file="rating-picker/emotions"></doc-example>


## Les questions secondaires

Les question secondaires n'apparaissent que si le retour de l'utilisateur n'est pas amplement saistfait.
Voici quelques exemples  :

#### Un `EmotionPicker` pour preciser l'état d'esprit

<doc-example file="rating-picker/emotions-second-step"></doc-example>

#### Un `FormBuilder` pour faire une question à choix multiple

<doc-example file="rating-picker/multi-answer"></doc-example>


#### Un `FormBuilder` pour afficher une zone de texte

<doc-example file="rating-picker/text-area"></doc-example>


## Récupération des données

Les données peuvent être récupérées par l'intermédiaire d'un event input, `@input` comme le VRating.

<doc-example file="rating-picker/datas"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">

<doc-alert type="info">

Les propriétés de la section API sont directement inspiré du composant [`VRating`](https://v2.vuetifyjs.com/en/api/v-rating/).

</doc-alert>

<doc-api name="rating-picker"></doc-api>

</doc-tab-item>

<doc-tab-item label="Personnalisation">

Il est possible de masquer les boutons de fermeture.
Pour l'activer, il faut utiliser la props `hide-close-buttons`.

<doc-example file="rating-picker/close-buttons"></doc-example>

</doc-tab-item>

</doc-tabs>
