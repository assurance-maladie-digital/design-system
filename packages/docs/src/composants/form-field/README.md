---
title: FormField
---

::: slot title
# {{ $frontmatter.title }}
:::

::: slot description
Le composant `FormField` est utilisé pour afficher un champ de formulaire.
:::

## Utilisation

<DocExample
  eager
  file="composants/form-field/examples/form-field"
/>

## API

<DocApi
  :value="['FormField']"
  :api="{
    FormField: {
      props: [
        {
          name: 'field',
          type: 'Field',
          required: true,
          description: 'Le champ à afficher.',
          example: '{\n	type: string;\n	value: FieldValue;\n	title?: string;\n	description?: string;\n	tooltip?: string;\n	multiple?: boolean;\n	fieldOptions?: FieldOptions;\n	items?: FieldItem[];\n	other?: OtherField;\n	mask?: string;\n	dynamic?: boolean;\n}'
        }
      ],
      events: [
        {
          name: 'change',
          description: 'Événement émis lorsque la valeur du champ change.'
        }
      ]
    }
  }"
/>

## Playground

<DocExample
  file="composants/form-field/examples/form-field-playground"
  hide-code-block
/>

## Exemples

### Titre, description et texte d'aide

Vous pouvez un titre, une description ainsi qu'un texte d'aide sur le champ en utilisant les attributs `title`, `description` et `tooltip`.

<DocInfo color="orange">

Le titre ne doit pas remplacer le label, qui identifie le champ pour les utilisateurs de lecteurs d'écran.

</DocInfo>

<DocExample file="composants/form-field/examples/form-field-question" />

### Types de champs

#### Champ texte

<DocExample file="composants/form-field/examples/form-field-text" />

#### Champ zone de texte

<DocExample file="composants/form-field/examples/form-field-textarea" />

#### Champ nombre

<DocInfo>

Le champ nombre demande obligatoirement un mask qui utilise le module `vue-input-facade` avec des `#` pour les chiffres<br>
Voir la documentation <https://www.npmjs.com/package/vue-input-facade> pour plus d'informations sur les usages possibles

</DocInfo>

<DocExample file="composants/form-field/examples/form-field-number" />

#### Champ mot de passe

<DocExample file="composants/form-field/examples/form-field-password" />

#### Champ date

<DocExample file="composants/form-field/examples/form-field-date" />

#### Champ période

<DocExample file="composants/form-field/examples/form-field-period" />

#### Champ select

<DocExample file="composants/form-field/examples/form-field-select" />

#### Champ select slider

<DocExample file="composants/form-field/examples/form-field-select-slider" />

#### Champ select button

<DocExample file="composants/form-field/examples/form-field-select-button" />
