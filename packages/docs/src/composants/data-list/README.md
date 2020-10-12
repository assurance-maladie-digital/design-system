---
title: DataList
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
L'élément `DataList` est utilisé pour afficher une liste d'informations.
:::

## Utilisation

<DocExample
  eager
  file="composants/data-list/examples/data-list"
/>

## API

<DocApi
  :value="['DataList', 'DataListItem', 'DataListLoading']"
  :api="{
    DataList: {
      props: [
        {
          name: 'items',
          type: 'DataListItem[]',
          required: true,
          description: 'La liste des items à afficher.',
          example: '{\n	key: string;\n	value?: string;\n	action?: string;\n	chip?: boolean;\n	icon?: string;\n	options?: Options;\n}'
        },
        {
          name: 'icons',
          type: 'DataListIcons',
          default: 'undefined',
          description: 'La liste des différentes icônes disponibles pour les items.',
          example: '{\n	[iconName: string]: string;\n}'
        },
        {
          name: 'list-title',
          type: 'string',
          default: 'undefined',
          description: 'Le titre de la liste.'
        },
        {
          name: 'title-class',
          type: 'string',
          default: '\'mb-3 headline\'',
          description: 'Les classes à appliquer sur le titre de la liste.'
        },
        {
          name: 'row',
          type: 'boolean',
          default: 'false',
          description: 'Affiche les items de la liste horizontalement.'
        },
        {
          name: 'flex',
          type: 'boolean',
          default: 'false',
          description: 'Affiche les items en ligne avec passage à la ligne lorsqu\'il n\'y a plus de place disponible.'
        },
        {
          name: 'placeholder',
          type: 'string',
          default: '\'…\'',
          description: 'Le texte à afficher lorsqu\'il n\'y a pas de valeur.'
        },
        {
          name: 'min-width',
          type: 'string',
          default: 'undefined',
          description: 'La largeur minimum du composant.'
        },
        {
          name: 'item-width',
          type: 'string',
          default: '\'200px\'',
          description: 'La largeur de chaque item.'
        },
        {
          name: 'loading',
          type: 'boolean',
          default: 'false',
          description: 'Affiche un état de chargement.'
        },
        {
          name: 'items-number-loading',
          type: 'number',
          default: '1',
          description: 'Le nombre d\'items à afficher lors du chargement.'
        },
        {
          name: 'heading-loading',
          type: 'boolean',
          default: 'false',
          description: 'Affiche un squelette pour le titre pendant le chargement.'
        },
        {
          name: 'render-html-value',
          default: 'false',
          type: 'boolean',
          description: 'Utilise `v-html` pour afficher les valeurs.'
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
          default: 'undefined',
          description: 'La valeur à afficher.'
        },
        {
          name: 'action',
          type: 'string',
          default: 'undefined',
          description: 'Le label du bouton action à afficher.'
        },
        {
          name: 'placeholder',
          type: 'string',
          default: '\'…\'',
          description: 'Le texte à afficher lorsqu\'il n\'y a pas de valeur.'
        },
        {
          name: 'chip',
          type: 'boolean',
          default: 'false',
          description: 'Affiche la valeur dans une `VChip`.'
        },
        {
          name: 'icon',
          type: 'string',
          default: 'undefined',
          description: 'Le nom de l\'icône à afficher.'
        },
        {
          name: 'render-html-value',
          type: 'boolean',
          default: 'false',
          description: 'Utilise `v-html` pour afficher les valeurs.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          default: 'undefined',
          description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
          options: '{\n	layout: `VLayout`,\n	icon: `VIcon`,\n	chip: `VChip`,\n	actionBtn: `VBtn`\n}'
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
          default: '1',
          description: 'Le nombre d\'items à afficher pendant le chargement.'
        },
        {
          name: 'heading',
          type: 'boolean',
          default: 'false',
          description: 'Affiche un squelette pour le titre pendant le chargement.'
        },
        {
          name: 'row',
          type: 'boolean',
          default: 'false',
          description: 'Affiche les items de la liste horizontalement.'
        },
        {
          name: 'flex',
          type: 'boolean',
          default: 'false',
          description: 'Affiche les items en ligne avec passage à la ligne lorsqu\'il n\'y a plus de place disponible.'
        },
        {
          name: 'width',
          type: 'string',
          default: '\'200px\'',
          description: 'La largeur de chaque item.'
        }
      ]
    }
  }"
/>

## Playground

<DocExample
  file="composants/data-list/examples/data-list-playground"
  hide-code-block
/>

## Exemples

### Icônes

Vous pouvez spécifier une icône à afficher pour chaque item de la liste en utilisant la prop `icons` pour définir la liste des icônes disponibles.<br>
Si une icône est spécifiée mais qu'elle n'est pas trouvée dans la liste, rien ne sera affiché.

<DocInfo>

Il est nécessaire de lister manuellement toutes les icônes possible afin de n'importer que celles-ci et de garantir de meilleures performances.

</DocInfo>

<DocExample file="composants/data-list/examples/data-list-icons" />

### Bouton d'action

Vous pouvez ajouter un bouton d'action à chaque item grâce à la propriété `action` sur l'item.

<DocExample file="composants/data-list/examples/data-list-action" />

### Étiquette

Vous pouvez afficher certains items de la liste dans une `VChip` et modifier l'affichage de celle-ci grâce à la propriété `options` sur l'item.

<DocExample file="composants/data-list/examples/data-list-chip" />

### Valeurs HTML

Vous pouvez afficher les valeurs via la directive `v-html` en utilisant la prop `render-html-value`.

<DocInfo color="orange">

Attention, l'utilisation de la directive `v-html` peut être dangereuse car cela peut facilement mener à des attaques XSS. N'utilisez cette directive que sur du contenu de confiance et jamais sur du contenu fourni par l'utilisateur.

</DocInfo>

<DocExample file="composants/data-list/examples/data-list-html-value" />

### Utilisation des slots

Vous pouvez utiliser le slot `title` pour personnaliser le titre.

<DocExample file="composants/data-list/examples/data-list-slot" />

### Personnalisation des composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans l'élément `DataListItem` en utilisant la propriété `options` sur les items de la liste.

<DocExample file="composants/data-list/examples/data-list-options" />
