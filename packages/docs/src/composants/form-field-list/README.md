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
          example: '{\n	fieldId: Field\n}'
        },
        {
          name: 'list-title',
          type: 'string',
          required: false,
          description: 'Le titre du formulaire.'
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          description: 'La description du formulaire.'
        }
      ],
      events: [
        {
          name: 'change',
          description: 'Événement émis lorsque la valeur d\'un champ change.',
          value: 'fields: Fields'
        },
        {
          name: 'refresh',
          description: 'Événement émis lorsque la valeur d\'un champ dynamique change.'
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

### Gestion des évènements

`change` :  Lorsque l'utilisateur change une valeur d'un champ. Renvoi la nouvelle liste en paramètre.<br>

Vous pouvez réagir lorsque le formulaire est mise à jour grâce à l'évènement `change` ainsi que réagir aussi aux champs dit 'dynamique' changés grâce à l'événement `refresh` seulement lorsque le champ possède la propriété `dynamic: true`.

<DocExample
  file="composants/form-field-list/examples/form-field-list-events"
/>

### Gestion des propriétés: Titre et description

Les propriétés Titre et Description ne sont pas obligatoire.

<DocExample
  file="composants/form-field-list/examples/form-field-list-props"
/>
