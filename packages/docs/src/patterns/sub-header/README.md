::: slot title
# SubHeader
:::

::: slot description
Le pattern `SubHeader` est utilisé pour afficher un bloc d'informations sous l'en-tête principale.
:::

## Utilisation

<DocExample
  eager
  file="patterns/sub-header/examples/sub-header"
/>

## API

<DocApi
  :value="['SubHeader']"
  :api="{
    SubHeader: {
      props: [
        {
          name: 'hide-back-btn',
          type: 'boolean',
          default: 'false',
          description: 'Masque le bouton de retour.'
        },
        {
          name: 'back-btn-text',
          default: '\'Retour\'',
          type: 'string',
          description: 'Le texte du bouton retour.'
        },
        {
          name: 'title-text',
          type: 'string',
          default: 'undefined',
          description: 'Le texte du titre.'
        },
        {
          name: 'sub-title-text',
          default: 'undefined',
          type: 'string',
          description: 'Le texte du sous-titre.'
        },
        {
          name: 'data-lists',
          default: 'undefined',
          type: 'DataListsItem[]',
          description: 'Liste des composants `DataList` en mode colonne.'
        },
        {
          name: 'render-html-value',
          default: 'false',
          type: 'boolean',
          description: 'Utilise `v-html` pour afficher les valeurs dans les `DataList`.'
        },
        {
          name: 'loading',
          default: 'false',
          type: 'boolean',
          description: 'Affiche un état de chargement.'
        }
      ],
      slots: [
        {
          name: 'back-btn',
          description: 'Slot pour remplacer le bouton retour.'
        },
        {
          name: 'title',
          description: 'Slot pour remplacer le titre.'
        },
        {
          name: 'sub-title',
          description: 'Slot pour remplacer le sous-titre.'
        },
        {
          name: 'right-content',
          description: 'Slot pour remplacer le contenu situé à droite.'
        },
        {
          name: 'additional-informations',
          description: 'Slot pour ajouter des informations complémentaires.'
        }
      ],
      events: [
        {
          name: 'click:list-item',
          description: 'Événement émis lorsque l\'utilisateur clique sur un bouton d\'une liste.',
          value: '{\n	dataListIndex: number,\n	itemIndex: number\n}'
        },
        {
          name: 'back',
          description: 'Événement émis lorsque l\'utilisateur clique sur le bouton retour.'
        }
      ]
    }
  }"
/>

## Playground

<DocExample file="patterns/sub-header/examples/sub-header-playground" />

## Exemples

### Listes de données

Vous pouvez afficher des listes de données en utilisant la propriété `data-lists`.

<DocInfo>

Vous pouvez afficher les valeurs dans les DataList via la directive `v-html` en utilisant la propriété `render-html-value`.

</DocInfo>

<DocInfo color="orange">

Attention, l'utilisation de la directive `v-html` peut être dangereuse car cela peut facilement mener à des attaques XSS. N'utilisez cette directive que sur du contenu de confiance et jamais sur du contenu fourni par l'utilisateur.

</DocInfo>

<DocExample file="patterns/sub-header/examples/sub-header-data-lists" />

### Boutons d'actions

Vous pouvez ajouter des boutons actions dans les listes de données en utilisant la propriété `action` sur les items.

<DocExample file="patterns/sub-header/examples/sub-header-action" />

### Informations complémentaires

Vous pouvez afficher des informations complémentaires en utilisant le slot `additional-informations`.

<DocExample file="patterns/sub-header/examples/sub-header-additional-infos" />

### Mode chargement

Vous pouvez afficher le composant en mode chargement grâce à la propriété `loading`.

<DocInfo>

Vous pouvez utiliser les propriétés `itemsNumberLoading` et `headingLoading` sur chaque [DataList](../../elements/data-list/README.md) pour contrôler le nombre d'items à afficher pendant le chargement ainsi que la visibilité du squelette de chargement pour le titre.

</DocInfo>

<DocExample file="patterns/sub-header/examples/sub-header-loading" />

### Utilisation des slots

Vous pouvez utiliser les slots pour remplacer les contenus par défaut ou pour en ajouter.

<DocExample file="patterns/sub-header/examples/sub-header-slots" />
