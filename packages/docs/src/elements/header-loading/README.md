::: slot title
# HeaderLoading
:::

::: slot description
L'élément `HeaderLoading` est une extension du composant `VSkeletonLoader`, il est utilisé pour afficher un élément de chargement avec des dimensions personnalisées.
:::

## Utilisation

Vous pouvez entrer des dimensions dans l'exemple ci-dessous et observer le comportement du composant.

<DocExample
  eager
  file="elements/header-loading/examples/header-loading"
/>

## API

<DocApi
  :value="['HeaderLoading']"
  :api="{
    HeaderLoading: {
      props: [
        {
          name: 'width',
          default: '\'100px\'',
          type: 'string',
          description: 'La largeur du composant.'
        },
        {
          name: 'height',
          default: '\'1rem\'',
          type: 'string',
          description: 'La hauteur du composant.'
        }
      ]
    }
  }"
/>
