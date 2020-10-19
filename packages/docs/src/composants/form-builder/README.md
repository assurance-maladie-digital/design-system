---
title: FormBuilder
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
Le composant `FormBuilder` est utilisé pour afficher un questionnaire.
:::

<DocInfo>

Le composant `FormBuilder` permet d'afficher un questionnaire composé de sections et d'étapes en utilisant le [FormFieldList](../form-field-list/README.md), vous pouvez utiliser ce dernier pour afficher des formulaires plus simples.

</DocInfo>

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
          description: 'Le questionnaire à afficher.',
          example: '{\n	sectionId: {\n		title?: string,\n		description?: string,\n		questions: FormFieldList\n	}\n}'
        }
      ],
      events: [
        {
          name: 'change',
          description: 'Événement émis lorsque la valeur d\'un champ est mise à jour.',
          value: 'form: Form'
        },
        {
          name: 'refresh',
          description: 'Événement émis lorsque la valeur d\'un champ dynamique est mise à jour.'
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

### Gestion des évènements

Vous pouvez réagir lorsque la valeur d'un champ du formulaire change grâce à l'évènement `change`, ainsi que lorsque la valeur d'un champ dynamique (avec l'attribut `dynamic: true`) change grâce à l'événement `refresh`.

<DocExample file="composants/form-builder/examples/form-builder-events" />
