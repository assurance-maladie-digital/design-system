::: slot title
# CustomIcon
:::

::: slot description
L'élément `CustomIcon` est utilisé pour afficher une icône personnalisée parmi celles définies dans les options du plugin.
:::

## Utilisation

<DocExample
  eager
  file="elements/custom-icon/examples/custom-icon"
/>

## API

<DocApi
  :value="['CustomIcon']"
  :api="{
    CustomIcon: {
      props: [
        {
          name: 'color',
          defaultValue: 'currentColor',
          type: 'string',
          description: 'La couleur de l\'icône (n\'importe quelle valeur CSS). Par défaut, l\'icône hérite de la couleur du texte.'
        },
        {
          name: 'small',
          defaultValue: 'false',
          type: 'boolean',
          description: 'Définit la taille de l\’icône à 1em.'
        },
        {
          name: 'medium',
          defaultValue: 'false',
          type: 'boolean',
          description: 'Définit la taille de l\’icône à 1.5em.'
        },
        {
          name: 'large',
          defaultValue: 'false',
          type: 'boolean',
          description: 'Définit la taille de l\’icône à 1.85em.'
        },
        {
          name: 'x-large',
          defaultValue: 'false',
          type: 'boolean',
          description: 'Définit la taille de l\’icône à 2.25em.'
        },
        {
          name: 'size',
          type: 'string',
          defaultValue: 'undefined',
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

<DocExample file="elements/custom-icon/examples/custom-icon-playground" />

## Exemples

### Modification de la taille et de la couleur

Vous pouvez modifier la taille et la couleur de l'icône grâce aux propriétés `size` et `color`.

<DocExample file="elements/custom-icon/examples/custom-icon-size-color" />

### Utilisation des slots

Vous pouvez utiliser le slot par défaut pour afficher une icône SVG totalement personnalisée.

<DocExample file="elements/custom-icon/examples/custom-icon-slot" />
