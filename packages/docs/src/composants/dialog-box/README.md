---
title: DialogBox
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
L'élément `DialogBox` est utilisé pour afficher une boîte de dialogue avec des boutons d'actions.
:::

## Utilisation

<DocExample
  eager
  file="composants/dialog-box/examples/dialog-box"
/>

## API

<DocApi
  :value="['DialogBox']"
  :api="{
    DialogBox: {
      props: [
        {
          name: 'value',
          type: 'boolean',
          default: 'false',
          description: 'Contrôle la visibilité de la boîte de dialogue.'
        },
        {
          name: 'title',
          type: 'string',
          default: 'undefined',
          description: 'Le titre de la boîte de dialogue.'
        },
        {
          name: 'width',
          type: 'string',
          default: '800px',
          description: 'La largeur de la boîte de dialogue.'
        },
        {
          name: 'cancel-btn-text',
          type: 'string',
          default: 'Annuler',
          description: 'Le texte du bouton Annuler.'
        },
        {
          name: 'confirm-btn-text',
          type: 'string',
          default: 'Valider',
          description: 'Le texte du bouton Valider.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          default: 'undefined',
          description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
          options: '{\n	card: `VCard`,\n	cardTitle: `VCardTitle`,\n	spacer: `VSpacer`,\n	closeBtn: `VBtn`,\n	icon: `VIcon`,\n	cardActions: `VCardActions`,\n	actionsSpacer: `VSpacer`,\n	cancelBtn: `VBtn`,\n	confirmBtn: `VBtn`\n}'
        }
      ],
      slots: [
        {
          name: 'default',
          description: 'Slot pour ajouter du contenu entre le titre et les boutons d\'actions.'
        },
        {
          name: 'title',
          description: 'Slot pour remplacer le titre par défaut.'
        },
        {
          name: 'actions',
          description: 'Slot pour remplacer les boutons d\'actions par défaut.'
        }
      ],
      events: [
        {
          name: 'change',
          description: 'Événement émis lorsque la boite de dialogue apparaît et disparaît.'
        },
        {
          name: 'cancel',
          description: 'Événement émis lorsque l\'utilisateur clique sur le bouton Annuler.'
        },
        {
          name: 'confirm',
          description: 'Événement émis lorsque l\'utilisateur clique sur le bouton Valider.'
        }
      ]
    }
  }"
/>

## Playground

<DocExample
  file="composants/dialog-box/examples/dialog-box-playground"
  hide-code-block
/>

## Exemples

### Modification de la largeur

Vous pouvez modifier la largeur de la boîte de dialogue avec l'attribut `width`.

<DocExample file="composants/dialog-box/examples/dialog-box-width" />

### Modification des textes des boutons

Vous pouvez modifier les textes par défaut des boutons d'actions avec les attributs `cancel-btn-text` et `confirm-btn-text`.

<DocExample file="composants/dialog-box/examples/dialog-box-btn-text" />

### Utilisation des slots

Vous pouvez utiliser le slot par défaut pour afficher du contenu, mais aussi les slots `title` et `actions` pour remplacer le titre et les boutons d'actions.

<DocExample file="composants/dialog-box/examples/dialog-box-slots" />

### Personnalisation des composants

Vous pouvez personnaliser les composants Vuetify contenus dans `DialogBox` en utilisant la prop `vuetify-options`.

<DocInfo>

L'élément `Dialogbox` est composé d'un `VDialog`. Vous pouvez appliquer les attributs d'un `VDialog` au composant, ils seront appliqués sur celui-ci.

</DocInfo>

<DocExample file="composants/dialog-box/examples/dialog-box-options" />
