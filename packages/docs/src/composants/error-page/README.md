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
          name: 'cta',
          type: 'string',
          default: '\'Retour à l\'accueil\'',
          description: 'Le message du bouton d\'action.'
        },
        {
          name: 'btnRoute',
          type: 'Next',
          default: '{ name: \'home\' }',
          description: 'La valeur de la prop `to` du bouton d\'action.'
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
