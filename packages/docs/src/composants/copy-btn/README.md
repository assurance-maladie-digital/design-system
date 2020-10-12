---
title: CopyBtn
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
L'élément `CopyBtn` est utilisé pour afficher un bouton permettant à l'utilisateur de copier du texte.
:::

## Utilisation

Cliquez sur le bouton ci-dessous, le texte contenu dans le champ de formulaire sera alors copié.

<DocExample
  eager
  file="composants/copy-btn/examples/copy-btn"
/>

## API

<DocApi
  :value="['CopyBtn']"
  :api="{
    CopyBtn: {
      props: [
        {
          name: 'text-to-copy',
          type: 'string | function',
          required: true,
          description: 'Le texte à copier ou une fonction qui le retourne. La fonction sera exécutée lors du clic sur le bouton.'
        },
        {
          name: 'label',
          type: 'string',
          required: true,
          description: 'Le label accessible du bouton. Cette prop est nécessaire pour rendre le bouton accessible aux lecteurs d\'écrans, n\'hésitez pas à décrire ce que va copier le bouton.'
        },
        {
          name: 'hide-tooltip',
          type: 'boolean',
          default: 'false',
          description: 'Masque le `VTooltip`.'
        },
        {
          name: 'tooltip-duration',
          type: 'number',
          default: '2500',
          description: 'La durée d\'affichage du tooltip en millisecondes.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          default: 'undefined',
          description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
          options: '{\n	menu: `VMenu`,\n	btn: `VBtn`,\n	icon: `VIcon`\n}'
        }
      ],
      slots: [
          {
          name: 'icon',
          description: 'Slot pour remplacer l\'icône par défaut.'
        },
        {
          name: 'tooltip',
          description: 'Slot pour remplacer le contenu du tooltip.'
        }
      ]
    }
  }"
/>

## Exemples

### Tooltip masqué

Vous pouvez masquer le tooltip en utilisant la prop `hide-tooltip`.

<DocExample file="composants/copy-btn/examples/copy-btn-no-tooltip" />

### Utilisation des slots

Vous pouvez utiliser les slots pour personnaliser l'icône ainsi que le contenu du tooltip.

<DocExample file="composants/copy-btn/examples/copy-btn-slots" />

### Personnalisation des composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans `CopyBtn` en utilisant la prop `vuetify-options`.

<DocExample file="composants/copy-btn/examples/copy-btn-vuetify-options" />
