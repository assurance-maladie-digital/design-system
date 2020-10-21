---
title: ErrorPage
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
Le template `ErrorPage` est utilisé pour afficher une page d'erreur.
:::

## Utilisation

<DocExample
  eager
  new-in="2.0.0-beta.2"
  file="composants/error-page/examples/error-page"
/>

## API

<DocApi
  :value="['PageCard']"
  :api="{
    PageCard: {
      props: [
        {
          name: 'page-title',
          type: 'string',
          required: true,
          description: 'Le titre de la page.'
        },
        {
          name: 'message',
          type: 'string',
          required: true,
          description: 'Le message d\'erreur à afficher à l\'utilisateur.'
        },
        {
          name: 'code',
          type: 'string',
          default: 'undefined',
          description: 'Le code HTTP de l\'erreur.'
        },
        {
          name: 'btn-text',
          type: 'string',
          default: '\'Retour à l\'accueil\'',
          description: 'Le message du bouton d\'action.'
        },
        {
          name: 'btn-route',
          type: 'Next',
          default: '{ name: \'home\' }',
          description: 'La valeur de la prop `to` du bouton d\'action.'
        },
        {
          name: 'no-btn',
          type: 'boolean',
          default: 'false',
          description: 'Désactive le bouton d\'action.'
        }
      ]
    }
  }"
/>

## Playground

<DocExample
  file="composants/error-page/examples/error-page-playground"
  hide-code-block
/>

## Exemples

### Affichage d'un code d'erreur

Vous pouvez afficher un code d'erreur HTTP en utilisant la prop `code`.

<DocExample file="composants/error-page/examples/error-page-code" />

### Masquer le bouton d'action

Vous pouvez masquer le bouton d'action en utilisant la prop `no-btn`.

<DocExample file="composants/error-page/examples/error-page-no-btn" />
