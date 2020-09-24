::: slot title
# PageCard
:::

::: slot description
L'élément `PageCard` est utilisé pour afficher une page.
:::

## Utilisation

<DocExample
  eager
  file="composants/page-card/examples/page-card"
/>

## API

<DocApi
  :value="['PageCard']"
  :api="{
    PageCard: {
      props: [
        {
          name: 'min-height',
          type: 'boolean',
          default: 'false',
          description: 'Définit une hauteur minimale de `500px`.'
        },
        {
          name: 'card-class',
          type: 'string',
          default: 'undefined',
          description: 'Les classes à appliquer à la `VCard.`'
        },
        {
          name: 'card-padding',
          type: 'string',
          default: '\'px-6 py-4\'',
          description: 'Le padding à appliquer à la `VCard`.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          default: 'undefined',
          description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
          options: '{\n	layout: `VLayout`\n}'
        }
      ],
      slots: [
        {
          name: 'default',
          description: 'Slot pour afficher du contenu.'
        }
      ]
    }
  }"
/>

## Playground

<DocExample
  file="composants/page-card/examples/page-card-playground"
  hide-code-block
/>

## Exemples

### Conteneur transparent

Vous pouvez transformer la `PageCard` en simple conteneur en la rendant transparente et en désactivant son ombre ainsi que son espacement interne.

<DocExample file="composants/page-card/examples/page-card-transparent" />

### Largeur personnalisée

Vous pouvez modifier la largeur de la `PageCard` en utilisant la propriété `width`.

<DocInfo>

L'élément `PageCard` est composée d'une `VCard` contenue dans un `VLayout`. Vous pouvez appliquer les attributs d'une `VCard` au composant, ils seront appliqués sur celle-ci.

</DocInfo>

<DocExample file="composants/page-card/examples/page-card-width" />
