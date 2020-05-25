::: slot title
# DialogBox
:::

::: slot description
L'élément `DialogBox` est utilisé pour afficher une boîte de dialogue avec des boutons d'actions.
:::

## Utilisation

<DocExample
  eager
  file="elements/dialog-box/examples/dialog-box"
/>

## API

<DocApi
  :value="['DialogBox']"
  :api="{
    DialogBox: {
      props: [
        {
          name: 'value',
          defaultValue: 'false',
          type: 'boolean',
          description: 'Contrôle la visibilité de la boîte de dialogue.'
        },
        {
          name: 'title',
          defaultValue: 'undefined',
          type: 'string',
          description: 'Le titre de la boîte de dialogue.'
        },
        {
          name: 'width',
          defaultValue: '800px',
          type: 'string',
          description: 'La largeur de la boîte de dialogue.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          defaultValue: 'undefined',
          description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.'
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
          description: 'Événement émis lorsque l\'utilisateur clique sur le bouton Confirmer.'
        }
      ]
    }
  }"
/>

## Playground

<DocExample file="elements/dialog-box/examples/dialog-box-playground" />

## Exemples

### Utilisation des slots

Vous pouvez utiliser le slot par défaut pour afficher du contenu, mais aussi les slots `title` et `actions` pour remplacer le titre et les boutons d'actions.

<DocExample file="elements/dialog-box/examples/dialog-box-slots" />

### Modification de la largeur

Vous pouvez modifier la largeur de la boîte de dialogue avec l'attribut `width`.

<DocExample file="elements/dialog-box/examples/dialog-box-width" />

### Personnalisation des composants

Vous pouvez personnaliser les composants Vuetify contenus dans `DialogBox` en utilisant la propriété `options` avec les propriétés suivantes :

- `card` : `VCard`
- `cardTitle` : `VCardTitle`
- `spacer` : `VSpacer`
- `closeBtn` : `VBtn`
- `icon` : `VIcon`
- `cardActions` : `VCardActions`
- `actionsSpacer` : `VSpacer`
- `cancelBtn` : `VBtn`
- `confirmBtn` : `VBtn`

<DocInfo>

L'élément `Dialogbox` est composé d'un `VDialog`. Vous pouvez appliquer les attributs d'un `VDialog` au composant, ils seront appliqués sur celui-ci.

</DocInfo>

<DocExample file="elements/dialog-box/examples/dialog-box-options" />
