---
title: FormBuilder
---
::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
Le composant `FormBuilder` est utilisé pour afficher une questionnaire.
:::

## Utilisation

<DocExample
  eager
  file="composants/form-builder/examples/form-builder"
/>

## API

<DocApi
  :value="['FormBuilder']"
  :api="{
    FormBuilder: {
      props: [
        {
          name: 'form',
          type: 'Form',
          required: true,
          description: 'Le questionnaire à afficher',
          example: '{\n sectionId: {\n  title: string,\n  description: string,\n  questions: FormFieldList\n }\n}'
        }
      ],
      events: [
        {
          name: 'change',
          description: 'Événement émis lorsque l\'utilisateur change la valeur d\'un champ',
          value: 'form: Form'
        },
        {
          name: 'refresh',
          description: 'Événement émis lorsque l\'utilisateur change la valeur d\'un champ dynamique'
        }
      ]
    }
  }"
/>

## Playground

<DocExample
  file="composants/form-builder/examples/form-builder-playground"
  hide-code-block
/>

## Exemples

### Formulaire simple

<DocExample
  file="composants/form-builder/examples/form-builder-example"
/>

### Gestion des évènements

Vous pouvez réagir lorsque le formulaire est mise à jour grâce à l'évènement `change` ainsi que réagir aussi aux champs dynamique changés grâce à l'événement `refresh`.

<DocExample
  file="composants/form-builder/examples/form-builder-events"
/>
