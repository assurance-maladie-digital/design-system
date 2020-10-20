---
title: LangBtn
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
L'élément `LangBtn` est utilisé pour permettre à l'utilisateur de choisir une langue.
:::

## Utilisation

<DocExample
  eager
  file="composants/lang-btn/examples/lang-btn"
/>

## API

<DocApi
  :value="['LangBtn']"
  :api="{
    LangBtn: {
      props: [
        {
          name: 'available-languages',
          type: 'string[] | AllLanguagesChar',
          default: '[\'fr\', \'en\']',
          description: 'Liste des langues disponibles (format *ISO 639-1*). Utilisez `*` pour afficher toutes les possibilités.'
        },
        {
          name: 'hide-down-arrow',
          type: 'boolean',
          default: 'false',
          description: 'Masque la flèche vers le bas à l\'intérieur du bouton.'
        },
        {
          name: 'label',
          type: 'string',
          default: '\'Choix de la langue. Actuellement\'',
          description: 'Le label accessible du bouton.'
        },
        {
          name: 'value',
          type: 'string',
          default: '\'fr\'',
          description: 'La langue sélectionnée.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          default: 'undefined',
          description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
          options: '{\n	menu: `VMenu`,\n	btn: `VBtn`,\n	icon: `VIcon`,\n	list: `VList`,\n	listItem: `VListItem`,\n	listItemTitle: `VListItemTitle`\n}'
        }
      ],
      events: [
        {
          name: 'change',
          description: 'Événement émis lorsque la valeur est mise à jour.',
          value: 'lang: string'
        }
      ]
    }
  }"
/>

## Playground

<DocExample
  file="composants/lang-btn/examples/lang-btn-playground"
  hide-code-block
/>

## Exemples

### Langues disponibles

Vous pouvez modifier les langues disponibles dans la liste en utilisant la prop `available-languages`.

<DocExample file="composants/lang-btn/examples/lang-btn-available-languages" />

### Personnalisation des composants

Vous pouvez personnaliser les composants Vuetify contenus dans l'élement `LangBtn` en utilisant la prop `vuetify-options`.

<DocExample file="composants/lang-btn/examples/lang-btn-options" />
