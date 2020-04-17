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
      props: [{
        name: 'text-to-copy',
        defaultValue: 'undefined',
        type: 'string | function',
        description: 'Le texte a copier ou une fonction qui le retourne. La fonction sera exécutée lors du clic sur le bouton.'
      },
      {
        name: 'label',
        defaultValue: 'undefined',
        type: 'string',
        description: 'Le label accessible du bouton. Cette propriété est nécessaire pour rendre le bouton accessible aux lecteurs d\'écrans, n\'hésitez pas à décrire ce que va copier le bouton.'
      },
      {
        name: 'hide-tooltip',
        type: 'boolean',
        defaultValue: 'false',
        description: 'Masquer le `VTooltip`.'
      },
      {
        name: 'tooltip-duration',
        type: 'number',
        defaultValue: '2500',
        description: 'La durée d\'affichage du tooltip en millisecondes.'
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
