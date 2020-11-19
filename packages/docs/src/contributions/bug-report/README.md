---
title: Rapport d'erreur
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
Workflow pour suivre la résolution d'un bug
:::

# Utilisation 

Suivez ce workflow dans le cas ou il vous avez détecté un bug sur un élément du design system

<DocInfo>
    Assurez vous d'avoir bien consulter la documentation technique du design system ou de la librarie graphique vuetify avant de poursuivre
</DocInfo>

## 1 Déclarer une issue

Pour déclarer une issue il faut :
    a - Se rendre sur l'onglet `Issues` du [github du design system](https://github.com/assurance-maladie-digital/design-system/issues/new)

    b - Cliquer sur le bouton `New issue` 

    c - Sélectionné le modèle `Rapport d'erreur`

    d - Remplir les informations demander en supprimant les commentaires ou toutes autre choses non pertinantes.

## 2 Prise en charge par l'équipe DS

  a - L'équipe du DS recois une notification.

  b - Elle examine si c'est un problème UX ou seulement technique

## 3 Vrai bug ?

<DocInfo color="success">
    Le bug est accepté: is est ajouté dans le backlog du DS avec une estimation de la valeur de temps et de complexité.
</DocInfo>

<DocInfo color="blue">
    Le bug n'est pas reproduit : le support échange sur le sujet avec le rapporteur de l'issue
</DocInfo>

<DocInfo color="orange">
    Le bug est refusé: le support envera une réponse au rapporteur de l'issue pour indiquer la raison et éventuelement demander à échanger sur le sujet si besoin.
    Une notification est envoyé ensuite pour indiquer la fin de la prise en charge.
</DocInfo>

## 4 Estimation

En cas de demande acceptée. L'équipe du design system l'ajoute dans son backlog avec une estimation de valeur de temps et de complexité.

## 5 Priorisation

<DocInfo color="red">
    URGENT/CRITIQUE : Correction et livraison à chaud
</DocInfo>

<DocInfo>
    NORMAL: Traitement dans une prochaine release. Peut être réaliser par l'équipe du design system ou des contributeurs du projet demandeur avec de l'aide si besoin.
</DocInfo>

## 6 Livraison

Quand le bug est traitée, une notification est envoyée au rapporteur de l'issue ainsi que au projet.
