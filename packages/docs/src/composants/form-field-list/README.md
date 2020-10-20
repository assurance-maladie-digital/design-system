---
title: FormFieldList
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
Le composant `FormFieldList` est utilisé pour afficher un formulaire composé d'une liste de champs.
:::

## Utilisation

<DocExample
  eager
  file="composants/form-field-list/examples/form-field-list"
/>

## API

<DocApi
  :value="['FormFieldList']"
  :api="{
    FormFieldList: {
      props: [
        {
          name: 'fields',
          type: 'Fields',
          required: true,
          description: 'La liste des champs à afficher.',
          example: '{\n	fieldId: Field;\n}'
        },
        {
          name: 'list-title',
          type: 'string',
          default: '\'undefined\'',
          description: 'Le titre du formulaire.'
        },
        {
          name: 'description',
          type: 'string',
          default: '\'undefined\'',
          description: 'La description du formulaire.'
        }
      ],
      events: [
        {
          name: 'change',
          description: 'Événement émis lorsque la valeur d\'un champ est mise à jour.',
          value: 'fields: Fields'
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
  file="composants/form-field-list/examples/form-field-list-playground"
  hide-code-block
/>

## Exemples

### Titre et description

Vous pouvez ajouter un titre ainsi qu'une description à votre formulaire en utilisant les props `list-title` et `description`.

<DocExample file="composants/form-field-list/examples/form-field-list-props" />

### Gestion des évènements

Vous pouvez réagir lorsque la valeur d'un champ du formulaire change grâce à l'évènement `change`, ainsi que lorsque la valeur d'un champ dynamique (avec l'attribut `dynamic: true`) change grâce à l'événement `refresh`.

<DocExample file="composants/form-field-list/examples/form-field-list-events" />
