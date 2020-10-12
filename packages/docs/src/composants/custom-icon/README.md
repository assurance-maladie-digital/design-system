---
title: CustomIcon
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
L'élément `CustomIcon` est utilisé pour afficher une icône personnalisée parmi celles définies dans les options du plugin.
:::

## Utilisation

<DocExample
  eager
  file="composants/custom-icon/examples/custom-icon"
/>

## API

<DocApi
  :value="['CustomIcon']"
  :api="{
    CustomIcon: {
      props: [
        {
          name: 'color',
          type: 'string',
          default: '\'currentColor\'',
          description: 'La couleur de l\'icône (n\'importe quelle valeur CSS). Par défaut, l\'icône hérite de la couleur du texte.'
        },
        {
          name: 'small',
          type: 'boolean',
          default: 'false',
          description: 'Définit la taille de l\’icône à 1em.'
        },
        {
          name: 'medium',
          type: 'boolean',
          default: 'false',
          description: 'Définit la taille de l\’icône à 1.5em.'
        },
        {
          name: 'large',
          type: 'boolean',
          default: 'false',
          description: 'Définit la taille de l\’icône à 1.85em.'
        },
        {
          name: 'x-large',
          type: 'boolean',
          default: 'false',
          description: 'Définit la taille de l\’icône à 2.25em.'
        },
        {
          name: 'size',
          type: 'string',
          default: 'undefined',
          description: 'Applique une taille CSS personnalisée (largeur / hauteur) à l\'icône. Par défaut, la taille est de 1,35em.'
        }
      ],
      slots: [
        {
          name: 'default',
          description: 'Slot pour remplacer le contenu de l\'icône.'
        }
      ]
    }
  }"
/>

## Playground

<DocExample
  file="composants/custom-icon/examples/custom-icon-playground"
  hide-code-block
/>

## Exemples

### Modification de la taille et de la couleur

Vous pouvez modifier la taille et la couleur de l'icône grâce aux props `size` et `color`.

<DocExample file="composants/custom-icon/examples/custom-icon-size-color" />

### Utilisation des slots

Vous pouvez utiliser le slot par défaut pour afficher une icône SVG totalement personnalisée.

<DocExample file="composants/custom-icon/examples/custom-icon-slot" />
