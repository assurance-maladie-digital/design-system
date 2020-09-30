::: slot title

# FormFieldList

:::

::: slot description

L'élément `FormFieldList` est utilisé pour afficher une liste de champs de formulaire pré définie avec le composant `FormField`.

:::

## Pré-requis

<DocInfo>

Pour l'installation, voir installation des dépendences dans la documentation du composant parent `FormBuilder`

</DocInfo>

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
          description: 'La liste des champs à afficher',
          example: '{\n fieldId: Field\n}'
        },
        {
          name: 'listTitle',
          type: 'string',
          required: false,
          description: 'Le titre du formulaire'
        },
        {
          name: 'description',
          type: 'string',
          required: false,
          description: 'La description du formulaire'
        }
      ],
      events: [
        {
          name: 'change',
          description: 'Événement émis lorsque l\'utilisateur change la valeur d\'un champ',
          value: 'fields: Fields'
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
  file="composants/form-field-list/examples/form-field-list-playground"
  hide-code-block
/>

## Exemples

### Gestion des évènements

`change` :  Lorsque l'utilisateur change une valeur d'un champ. Renvoi la nouvelle liste en paramètre.<br>
`refresh` :  Lorsque l'utilisateur change une valeur d'un champ avec la propriété `dynamic: true`

<DocExample
  file="composants/form-field-list/examples/form-field-list-events"
/>

### Gestion des propriétés: Titre et description

Les propriétés Titre et Description ne sont pas obligatoire.

<DocExample
  file="composants/form-field-list/examples/form-field-list-props"
/>
