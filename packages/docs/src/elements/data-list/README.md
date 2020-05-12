::: slot title
# DataList
:::

::: slot description
L'élément `DataList` est utilisé pour afficher une liste d'informations.
:::

## Utilisation

<DocExample
  eager
  file="elements/data-list/examples/data-list"
/>

## API

<DocApi
  :value="['DataList', 'DataListItem']"
  :api="{
    DataList: {
      props: [{
        name: 'list',
        defaultValue: 'undefined',
        type: 'DataListItem[]',
        description: 'La liste à afficher.'
      },
      {
        name: 'icons',
        defaultValue: 'undefined',
        type: 'DataListIcons',
        description: 'La liste des différentes icônes à afficher.'
      },
      {
        name: 'list-title',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Le titre de la liste.'
      },
      {
        name: 'title-class',
        type: 'string',
        defaultValue: '\'mb-3 headline\'',
        description: 'Les classes à appliquer sur le titre de la liste.'
      },
      {
        name: 'row',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Affiche les items de la liste horizontalement.'
      },
      {
        name: 'vuetify-options',
        type: 'Options',
        defaultValue: 'undefined',
        description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.'
      }],
      slots: [{
        name: 'icon',
        description: 'Slot pour remplacer l\'icône par défaut.'
      },
      {
        name: 'tooltip',
        description: 'Slot pour remplacer le contenu du tooltip.'
      }]
    },
    DataListItem: {
      props: [{
        name: 'label',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Le label de la valeur.'
      },
      {
        name: 'value',
        type: 'string',
        defaultValue: 'undefined',
        description: 'La valeur a afficher.'
      },
      {
        name: 'placeholder',
        type: 'string',
        defaultValue: '\'…\'',
        description: 'Le texte à afficher lorsqu\'il n\'y a pas de valeur.'
      },
      {
        name: 'chip',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Affiche la valeur dans un élément `VChip`.'
      },
      {
        name: 'icon',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Icône SVG à afficher.'
      },
      {
        name: 'vuetify-options',
        type: 'Options',
        defaultValue: 'undefined',
        description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.'
      }],
      slots: [{
        name: 'icon',
        description: 'Slot pour remplacer l\'icône.'
      },
      {
        name: 'value',
        description: 'Slot pour remplacer le contenu de l\'item.'
      }]
    }
  }"
/>
<!-- 
## Exemples

### Tooltip masqué

Vous pouvez masquer le tooltip en utilisant la propriété `hide-tooltip`.

<DocExample file="elements/copy-btn/examples/copy-btn-no-tooltip" />

### Utilisation des slots

Vous pouvez utiliser les slots pour personnaliser l'icône ainsi que le contenu du tooltip.

<DocExample file="elements/copy-btn/examples/copy-btn-slots" />

### Personnalisation des composants Vuetify

Grâce à la directive `customizable`, il est possible de personnaliser les composants `VMenu`, `VBtn` et `VIcon` contenus dans `CopyBtn`.

<DocExample file="elements/copy-btn/examples/copy-btn-vuetify-options" /> -->
