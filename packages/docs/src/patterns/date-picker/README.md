::: slot title
# DatePicker
:::

::: slot description
Le pattern `DatePicker` est un composant utilisé pour permettre à l'utilisateur de sélectionner ou de saisir une date.
:::

## Utilisation

<DocExample
  eager
  file="patterns/date-picker/examples/date-picker"
/>

## API

<DocApi
  :value="['DatePicker']"
  :api="{
    DatePicker: {
      props: [
        {
          name: 'value',
          type: 'string',
          default: '\'\'',
          description: 'La date sélectionnée.'
        },
        {
          name: 'outlined',
          type: 'boolean',
          default: 'false',
          description: 'Affiche le `VTextField` en mode `outlined`.'
        },
        {
          name: 'no-calendar',
          type: 'boolean',
          default: 'false',
          description: 'Désactive le calendrier.'
        },
        {
          name: 'no-prepend-icon',
          type: 'boolean',
          default: 'false',
          description: 'Supprime l\'icône avant le `VTextField`.'
        },
        {
          name: 'append-icon',
          type: 'boolean',
          default: 'false',
          description: 'Affiche le bouton du calendrier dans le `VTextField`.'
        },
        {
          name: 'text-field-activator',
          type: 'boolean',
          default: 'false',
          description: 'Affiche le calendrier lors du clic sur le `VTextField`.'
        },
        {
          name: 'text-field-class',
          type: 'string | string[]',
          default: 'undefined',
          description: 'Les classes à appliquer au `VTextField`.'
        },
        {
          name: 'start-date',
          type: 'string',
          default: 'undefined',
          description: 'La date de début de la période.'
        },
        {
          name: 'show-weekends',
          type: 'boolean',
          default: 'false',
          description: 'Affiche les weekends dans le calendrier.'
        },
        {
          name: 'warning-rules',
          type: 'ValidationRule[]',
          default: '[]',
          description: 'Les règles d\'alertes, qui ne bloquent pas la validation.'
        },
        {
          name: 'date-format',
          type: 'string',
          default: '\'DD/MM/YYYY\'',
          description: 'Le format de la date affichée dans le `VTextField`.'
        },
        {
          name: 'date-format-return',
          type: 'string',
          default: '\'YYYY-MM-DD\'',
          description: 'Le format de la date utilisé avec le `v-model`.'
        },
        {
          name: 'mask',
          type: 'string | boolean',
          default: 'undefined',
          description: 'Masque limitant les caractères pouvant être saisis dans le `VTextField`.'
        },
        {
          name: 'birthdate',
          type: 'boolean',
          default: 'false',
          description: 'Simplifie la sélection d\'une date de naissance.'
        },
        {
          name: 'picker-date',
          type: 'string',
          default: 'undefined',
          description: 'Le mois / l\'année affiché, à utiliser avec le modificateur `.sync`.'
        },
        {
          name: 'error',
          type: 'boolean',
          default: 'false',
          description: 'Mets le `VTextField` en erreur manuellement, à utiliser avec le modificateur `.sync`.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          default: 'undefined',
          description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
          options: '{\n	textField: `VTextField`,\n	datePicker: `VDatePicker`,\n	icon: `VIcon`,\n	btn: `VBtn`,\n	menu: `VMenu`\n}'
        }
      ],
      slots: [
        {
          name: 'prepend',
          description: 'Slot pour ajouter du contenu avant le `VTextField` et remplacer le bouton par défaut.'
        },
        {
          name: 'append',
          description: 'Slot pour ajouter du contenu dans le `VTextField` et remplacer le bouton par défaut.'
        }
      ]
    }
  }"
/>

## Playground

<DocExample file="patterns/date-picker/examples/date-picker-playground" />

## Exemples

### Outlined

Vous pouvez afficher le `VTextField` en mode `outlined` grâce à la propriété du même nom. Cela va aussi mettre l'icône en mode `append` et modifier la position du menu.

<DocExample file="patterns/date-picker/examples/date-picker-outlined" />

### Date de naissance

Vous pouvez permettre à l'utilisateur de sélectionner une date naissance plus facilement en utilisant la propriété `birthdate`.

<DocInfo>

L'utilisateur sélectionnera l'année en premier, puis le mois et enfin le jour et ne peut pas sélectionner une date future.

</DocInfo>

<DocExample file="patterns/date-picker/examples/date-picker-birthdate" />

### Weekends

Vous pouvez afficher les weekends dans le calendrier en utilisant la propriété `show-weekends`.

<DocExample file="patterns/date-picker/examples/date-picker-weekends" />

### Période

Vous pouvez créer une période en fournissant une date de début via la propriété `start-date`. Lorsque l'utilisateur aura sélectionné une date date le calendrier, la période sera alors affichée dans le calendrier.

<DocInfo>

Lorsque que la date de début est située avant la date sélectionnée (période « négative »), la période n'est pas affichée.

</DocInfo>

<DocExample file="patterns/date-picker/examples/date-picker-range" />

### Format

Vous pouvez modifier le format de la date affichée dans le `VTextField` en utilisant la propriété `date-format` ainsi que le format utilisé avec le `v-model` en utilisant la propriété `date-format-return`.

<DocInfo>

Par défaut un masque limitant les caractères pouvant être saisis dans le `VTextField` est calculé à partir de la propriété `date-format`, mais vous pouvez le redéfinir en utilisant la propriété `mask` en utilisant l'[API de la librairie vue-input-facade](https://ronaldjerez.github.io/vue-input-facade/).

</DocInfo>

<DocExample file="patterns/date-picker/examples/date-picker-format" />

### Règles de validation

Vous pouvez appliquer des [règles de validation Vuetify](https://vuetifyjs.com/fr-FR/components/inputs/#rules) au `VTextField` contenu dans le composant en utilisant la propriété `rules`.

Vous pouvez aussi ajouter des règles d'alertes, qui ne bloquent pas la validation, en utilisant la propriété `warning-rules`.

Pour cela, vous pouvez utiliser les règles de validation inclues dans la librairie, comme :
- `required`
- `isDateValid`
- `notAfterToday`
- `notBeforeToday`

<DocExample file="patterns/date-picker/examples/date-picker-rules" />

### Personnalisation des composants

Vous pouvez personnaliser les composants Vuetify contenus dans `CopyBtn` en utilisant la propriété `vuetify-options`.

<DocInfo>

Le pattern `DatePicker` est composé d'un `VTextField`. Vous pouvez appliquer les attributs du `VTextField` au composant, ils seront appliqués sur celui-ci.

</DocInfo>

<DocExample file="patterns/date-picker/examples/date-picker-options" />
