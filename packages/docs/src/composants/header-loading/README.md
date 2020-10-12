---
title: HeaderLoading
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
L'élément `HeaderLoading` est une extension du composant `VSkeletonLoader`, il est utilisé pour afficher un élément de chargement avec des dimensions personnalisées.
:::

## Utilisation

Vous pouvez entrer des dimensions dans l'exemple ci-dessous et observer le comportement du composant.

<DocExample
  eager
  file="composants/header-loading/examples/header-loading"
/>

## API

<DocApi
  :value="['HeaderLoading']"
  :api="{
    HeaderLoading: {
      props: [
        {
          name: 'width',
          type: 'string',
          default: '\'100px\'',
          description: 'La largeur du composant.'
        },
        {
          name: 'height',
          type: 'string',
          default: '\'1rem\'',
          description: 'La hauteur du composant.'
        }
      ]
    }
  }"
/>
