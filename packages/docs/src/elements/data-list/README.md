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
  :value="['DataList', 'DataListItem', 'DataListLoading']"
  :api="{
    DataList: {
      props: [{
        name: 'items',
        defaultValue: 'undefined',
        type: 'DataListItem[]',
        description: 'La liste des items à afficher.'
      },
      {
        name: 'icons',
        defaultValue: 'undefined',
        type: 'DataListIcons',
        description: 'La liste des différentes icônes disponible pour les items'
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
        name: 'flex',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Affiche les items avec passsage s\'il n\'y a plus de place disponible.'
      },
      {
        name: 'placeholder',
        type: 'string',
        defaultValue: '...',
        description: 'Affiche un exemple de texte quand il n\'y a pas de valeur.'
      },
      {
        name: 'minWidth',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Largeur minimum du composant.'
      },
      {
        name: 'width',
        type: 'string',
        defaultValue: '200px',
        description: 'Largeur de chaque item.'
      },
      {
        name: 'loading',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Mode chargement des données, liée avec [itemsNumberLoading] et [headingLoading].'
      },
      {
        name: 'itemsNumberLoading',
        type: 'number',
        defaultValue: '1',
        description: 'Affiche un modèle d\'item pour chaque nombre pendant le chargement si loading = true.'
      },
      {
        name: 'headingLoading',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Affiche un modèle du titre pendant le chargement si loading = true.'
      }],
      slots: [{
        name: 'title',
        description: 'Slot pour remplacer le titre par défaut.'
      }],
      events: [{
        name: 'click:item-action',
        description: 'Emis lorsque l\'on click sur le bouton d\'action d\'un item',
        value: '`itemIndex: number`'
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
        name: 'action',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Le label du bouton action a afficher.'
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
      },
      {
        name: 'action',
        description: 'Slot pour remplacer le contenu de l\'action'
      }]
    },
    DataListLoading: {
      props: [{
        name: 'itemsNumber',
        type: 'number',
        defaultValue: '1',
        description: 'Affiche un ou plusieurs item(s) en chargement en fonction du nombre'
      },
      {
        name: 'heading',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Affiche un modèle de chargement de titre'
      },
      {
        name: 'row',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Affiche les items de la liste horizontalement.'
      },
      {
        name: 'flex',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Affiche les items avec passsage s\'il n\'y a plus de place disponible.'
      },
      {
        name: 'title-class',
        type: 'string',
        defaultValue: '\'mb-3 headline\'',
        description: 'Les classes à appliquer sur le titre de la liste.'
      },
      {
        name: 'width',
        type: 'string',
        defaultValue: '200px',
        description: 'Largeur de chaque item.'
      }]
    }
  }"
/>

## Exemples

### Playground

<DocExample file="elements/data-list/examples/data-list-playground" />

### Layout

Modification possible de la largeur du composant ou de chaque item

<DocExample file="elements/data-list/examples/data-list-layout" />

### Utilisation du slot 'title'

Vous pouvez utiliser le slot pour personnaliser le titre

<DocExample file="elements/data-list/examples/data-list-slot" />

### Utilisation des slots d'item

Vous pouvez utiliser le slot 'icon' pour personnaliser l'icon
Vous pouvez utiliser le slot 'action' pour personnaliser l'action

<DocExample file="elements/data-list/examples/data-list-item-slots" />
