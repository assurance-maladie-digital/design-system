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
      props: [
        {
          name: 'items',
          required: true,
          type: 'DataListItem[]',
          description: 'La liste des items à afficher.',
          example: '{\n	key: string;\n	value?: string;\n	action?: string;\n	chip?: boolean;\n	icon?: string;\n	options?: Options;\n}'
        },
        {
          name: 'icons',
          value: 'undefined',
          type: 'DataListIcons',
          description: 'La liste des différentes icônes disponibles pour les items.',
          example: '{\n	[key: string]: string;\n}'
        },
        {
          name: 'list-title',
          type: 'string',
          value: 'undefined',
          description: 'Le titre de la liste.'
        },
        {
          name: 'title-class',
          type: 'string',
          value: '\'mb-3 headline\'',
          description: 'Les classes à appliquer sur le titre de la liste.'
        },
        {
          name: 'row',
          type: 'boolean',
          value: 'false',
          description: 'Affiche les items de la liste horizontalement.'
        },
        {
          name: 'flex',
          type: 'boolean',
          value: 'false',
          description: 'Affiche les items en ligne avec passage à la ligne lorsqu\'il n\'y a plus de place disponible.'
        },
        {
          name: 'placeholder',
          type: 'string',
          value: '\'…\'',
          description: 'Le texte à afficher lorsqu\'il n\'y a pas de valeur.'
        },
        {
          name: 'min-width',
          type: 'string',
          value: 'undefined',
          description: 'La largeur minimum du composant.'
        },
        {
          name: 'item-width',
          type: 'string',
          value: '\'200px\'',
          description: 'La largeur de chaque item.'
        },
        {
          name: 'loading',
          type: 'boolean',
          value: 'false',
          description: 'Affiche un état de chargement.'
        },
        {
          name: 'items-number-loading',
          type: 'number',
          value: '1',
          description: 'Le nombre d\'items à afficher lors du chargement.'
        },
        {
          name: 'heading-loading',
          type: 'boolean',
          value: 'false',
          description: 'Affiche un squelette pour le titre pendant le chargement.'
        }
      ],
      slots: [
        {
          name: 'title',
          description: 'Slot pour remplacer le titre par défaut.'
        }
      ],
      events: [
        {
          name: 'click:item-action',
          description: 'Événement émis lorsque l\'utilisateur clique sur le bouton d\'action d\'un item.',
          value: 'itemIndex: number'
        }
      ]
    },
    DataListItem: {
      props: [
        {
          name: 'label',
          type: 'string',
          required: true,
          description: 'Le label de la valeur.'
        },
        {
          name: 'value',
          type: 'string',
          value: 'undefined',
          description: 'La valeur à afficher.'
        },
        {
          name: 'action',
          type: 'string',
          value: 'undefined',
          description: 'Le label du bouton action à afficher.'
        },
        {
          name: 'placeholder',
          type: 'string',
          value: '\'…\'',
          description: 'Le texte à afficher lorsqu\'il n\'y a pas de valeur.'
        },
        {
          name: 'chip',
          type: 'boolean',
          value: 'false',
          description: 'Affiche la valeur dans une `VChip`.'
        },
        {
          name: 'icon',
          type: 'string',
          value: 'undefined',
          description: 'Le nom de l\'icône à afficher.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          value: 'undefined',
          description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.'
        }
      ],
      slots: [
        {
          name: 'icon',
          description: 'Slot pour remplacer l\'icône.'
        },
        {
          name: 'value',
          description: 'Slot pour remplacer le contenu de l\'item.'
        },
        {
          name: 'action',
          description: 'Slot pour remplacer le contenu de l\'action.'
        }
      ],
      events: [
        {
          name: 'click:action',
          description: 'Événement émis lorsque l\'utilisateur clique sur le bouton d\'action.'
        }
      ]
    },
    DataListLoading: {
      props: [
        {
          name: 'itemsNumber',
          type: 'number',
          value: '1',
          description: 'Le nombre d\'items à afficher pendant le chargement.'
        },
        {
          name: 'heading',
          type: 'boolean',
          value: 'false',
          description: 'Affiche un squelette pour le titre pendant le chargement.'
        },
        {
          name: 'row',
          type: 'boolean',
          value: 'false',
          description: 'Affiche les items de la liste horizontalement.'
        },
        {
          name: 'flex',
          type: 'boolean',
          value: 'false',
          description: 'Affiche les items en ligne avec passage à la ligne lorsqu\'il n\'y a plus de place disponible.'
        },
        {
          name: 'width',
          type: 'string',
          value: '\'200px\'',
          description: 'La largeur de chaque item.'
        }
      ]
    }
  }"
/>

## Playground

<DocExample file="elements/data-list/examples/data-list-playground" />

## Exemples

### Icônes

Vous pouvez spécifier une icône à afficher pour chaque item de la liste en utilisant la propriété `icons` pour définir la liste des icônes disponibles.<br>
Si une icône est spécifiée mais qu'elle n'est pas trouvée dans la liste, rien ne sera affiché.

<DocInfo>

Il est nécessaire de lister manuellement toutes les icônes possible afin de n'importer que celles-ci et de garantir de meilleures performances.

</DocInfo>

<DocExample file="elements/data-list/examples/data-list-icons" />

### Bouton d'action

Vous pouvez ajouter un bouton d'action à chaque item grâce à la propriété `action` sur l'item.

<DocExample file="elements/data-list/examples/data-list-action" />

### Étiquette

Vous pouvez afficher certains items de la liste dans une `VChip` et de modifier l'affichage de celle-ci grâce à la propriété `vuetify-options` sur l'item.

<DocExample file="elements/data-list/examples/data-list-chip" />

### Utilisation des slots

Vous pouvez utiliser le slot `title` pour personnaliser le titre.

<DocExample file="elements/data-list/examples/data-list-slot" />

### Personnalisation des composants Vuetify

Vous pouvez personnaliser les composants `VLayout`, `VIcon` et `VChip` contenus dans `DataListItem` en utilisant la propriété `vuetify-options` sur les items de la liste.

<DocExample file="elements/data-list/examples/data-list-options" />
