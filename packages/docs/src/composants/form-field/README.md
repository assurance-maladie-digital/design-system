::: slot title

# FormField

:::

::: slot description

L'élément `FormField` est utilisé pour afficher un champ de formulaire/question.

:::

## Pré-requis

<DocInfo>

Configuration: voir les pré-requis du composant `FormBuilder`.

</DocInfo>

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
          description: 'Champ/question à afficher',
          example: '{\n type: string,\n title: string,\n description: string,\n tooltip: string,\n value: FormValue, fieldOptions: FieldOptions\n}'
        }
      ],
      events: [
        {
          name: 'change',
          description: 'Événement émis lorsque l\'utilisateur change la valeur du champ',
          value: 'form: Form'
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

### Question avec description et tooltip

<DocExample
  file="composants/form-field/examples/form-field-question"
/>

### Champs générique de vuetify

<DocInfo>

NOTE : Le champ nombre demande obligatoirement un mask qui utilise le module `vue-input-facade` avec des `#` pour les chiffres<br>
Voir la documentation <https://www.npmjs.com/package/vue-input-facade> pour plus d'informations sur les usages possibles

</DocInfo>

<DocExample
  file="composants/form-field/examples/form-field-vuetify"
/>

### Champs de choix

<DocInfo>

Le type de champ  `select` par défaut est composé d'un `VSelect`. Vous pouvez appliquer les attributs d'un `VSelect` au composant.<br>

<br>
Cependant, il existe des sous types de rendu différent:<br>
   `select` peut avoir plusieurs rendu utilisateur différents avec les sous types suivant configurable dans `fieldOptions.type` :<br>
   `choiceSlider` => Rend un aspect de type slide, voir la documentation vuetify<br>
   `choiceButton` => Rend un aspect de type bouton.
<br>

Il est possible d'afficher aussi un champ autre. Voir exemples.

</DocInfo>

<DocExample
  file="composants/form-field/examples/form-field-select"
/>

### Champs de dates

Il existe 2 types de champs date:<br>
   `date` => Voir documentation du composant `DatePicker` de `vue-dot` pour connaitre les options possible.<br>
   `period` => Est composé de deux composant `DatePicker` de `vue-dot`. Il est donc possible de changé les options de chacune des dates avec les propriétés `from` et `to` dans `fieldOptions`

<DocExample
  file="composants/form-field/examples/form-field-dates"
/>

### Gestion de l'évènement

Vous pouvez réagir lorsque le champ est mise à jour grâce à l'évènement `change`

<DocExample
  file="composants/form-field/examples/form-field-event"
/>
