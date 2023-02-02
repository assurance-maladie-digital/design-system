---
title: RatingPicker
description: L’élément `RatingPicker` permet de receuillir l'avis d'un utilisateur.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

## Question principale

La question principale peut être posée seule ou suivie de questions secondaires si la noté est considéré comme mauvaise.
La réponse à la question principale n'est plus modifiable après la selection.
La note est récupérée de trois façons :

#### Une note sur 5 étoiles.

Les questions secondaires s'afficheront si la note est de `3` ou moins.

<doc-example file="rating-picker/stars"></doc-example>

#### Une note de 1 à 10

Les label indiquent à quoi correspond les notes 1 et 10 via des labels.

Les questions secondaires s'afficheront si la note est de `7` ou moins.

<doc-example file="rating-picker/numbers"></doc-example>

#### Une évaluation par émotion

Les questions secondaires s'afficheront si la note est de `medium` ou moins.

<doc-example file="rating-picker/emotions"></doc-example>

Il est possible de n'afficher que deux choix en utilisant le `simpleMode`.

<doc-example file="rating-picker/emotions-2"></doc-example>

Il est possible de changer les labels des émotions.

<doc-example file="rating-picker/emotions-labels"></doc-example>

## Les questions secondaires

Les questions secondaires apparaissent les unes après les autres à mesure que l'utilisateur y répond.
Les réponses aux questions secondaires sont modifiables jusqu'à la validation finale.
Les notes sont récupérée de trois façons :

#### Une évaluation par émotion

Avec les émotions également mais la réponse reste modifiable jusqu'à la validation finale.

<doc-example file="rating-picker/emotions-second-step"></doc-example>

#### Une réponse à choix multiple

<doc-example file="rating-picker/multi-answer"></doc-example>

La réponse à choix multiple peut laisser la possibilité d'une réponse différente que celles proposées

<doc-example file="rating-picker/multi-answer-others"></doc-example>

#### Une zone de texte

<doc-example file="rating-picker/text-area"></doc-example>

#### Suite de question secondaire

Il est possible d'ajouter plusieurs question secondaire en les ajoutants dans le tableau `questionsList`.

<doc-example file="rating-picker/multi-questions"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">

<doc-alert type="info">

Les propriétés non définies dans la section API seront reportées directement sur le composant `VBtn`.

</doc-alert>

<doc-api name="rating-picker"></doc-api>

</doc-tab-item>

<doc-tab-item label="Personnalisation">

Le mode avec ombre n'est pas actif par defaut.
Pour l'activer, il faut utiliser la props `shadow-mode`.

<doc-example file="rating-picker/shadow-mode"></doc-example>

Le fond vert après validation n'est pas actif par defaut.
Pour l'activer, il faut ajouter `true` dans les objets `afterValidate`.
Les deux parties peuvent avoir un fond différent.

<doc-example file="rating-picker/green-background"></doc-example>

Il est possible de masquer les boutons de fermeture.
Pour l'activer, il faut utiliser la props `hide-close-buttons`.

<doc-example file="rating-picker/close-buttons"></doc-example>

</doc-tab-item>

</doc-tabs>
