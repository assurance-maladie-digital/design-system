::: slot title
# DatePicker
:::

::: slot description
L'élément `DatePicker` est un champ utiliser pour valider une date entrée par l'utilisateur.
Ce composant est assemblé a partir d'éléments vuetify `VDatePicker`, `VTextField` et `VMenu`
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
					name: 'no-calendar',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Désactive le calendrier.'
				},
				{
					name: 'no-prepend-icon',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Désactive l\'icône de préfixe'
				},
				{
					name: 'append-icon',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Utilise l\'icône d\'ajout au lieu de pré\-ajouter.'
				},
				{
					name: 'text-field-activator',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Ouvre le menu du calendrier lorsque le champ de texte est cliqué.'
				},
				{
					name: 'text-field-class',
					type: 'string | string[]',
					defaultValue: 'undefined',
					description: 'Classes pour le champ VTextField'
				},
				{
					name: 'start-date',
					type: 'string',
					defaultValue: 'undefined',
					description: 'Classes pour le champ VTextField'
				},
				{
					name: 'show-week-ends',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Affiche les week-ends dans le calendrier'
				 },
				{
					name: 'warning-rules',
					type: 'ValidationRule[]',
					defaultValue: '[]',
					description: 'Un tableau de règles (même syntaxe que celles de Vuetify)'
				},
				{
					name: 'date-format',
					type: 'string',
					defaultValue: 'DD/MM/YYYY',
					description: 'Le format de date pour l\'utilisateur'
				},
				{
					name: 'date-format-return',
					type: 'string',
					defaultValue: 'YYYY-MM-DD',
					description: 'Le format de date pour le traitement'
				},
				{
					name: 'value',
					type: 'string',
					defaultValue: '',
					description: 'La valeur du champ'
				},
				{
					name: 'mask',
					type: '[String, Boolean]',
					defaultValue: '',
					description: 'Chaîne de masque personnalisée. Par défaut, elle est calculée à partir de dateFormat. Si false est transmis, n\'appliquez pas de masque.'
				},
				{
					name: 'birthdate',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Active le mode date de naissance.'
				},
				{
					name: 'picker-date',
					type: 'string',
					defaultValue: 'undefined',
					description: 'Propriété de Vuetify DatePicker qui a besoin du modificateur .sync.'
				},
				{
					name: 'error',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Propriété de Vuetify qui a besoin du modificateur .sync'
				},
				{
					name: 'vuetify-options',
					type: 'Options',
					defaultValue: 'undefined',
					description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.'
				}
			],
			slots: [
				{
					name: 'prepend',
					description: 'Ajoute un élément avant le champ'
				},
				{
					name: 'append',
					description: 'Ajoute un élément après le champ.'
				}
			]
		}
	}"
/>

## Playground

<DocExample file="patterns/date-picker/examples/date-picker-playground" />

## Exemples

### Date de naissance

<DocExample file="patterns/date-picker/examples/date-picker-birthdate" />

### Weekend

<DocExample file="patterns/date-picker/examples/date-picker-weekend" />

### Période

<DocExample file="patterns/date-picker/examples/date-picker-range" />

### Format

Il est possible de modifier le format côté utilisateur avec l'attribut `date-format` et le format de retour pour le traitement avec `date-format-return`

<DocInfo>

Il est conseiller d'appliquer un mask avec l'attribut `mask` qui doit correspondre à l'attribut `date-format` avec des `#` pour chaque chiffre affin de restreindre l'écriture de l'utilisateur. Voir code exemple.

</DocInfo>

<DocInfo color="warning">

Attention: Les formats mois et/ou année ne sont pas gérés, il faut pour cela essayer avec le composant vuetify `VDatePicker`

</DocInfo>

<DocExample file="patterns/date-picker/examples/date-picker-format" />

### Règles de validation

Il est possible de récupérer l'état de validation du champ avec la propriété `error` qui doit être synchroniser avec `.sync`,
ex: `:error.sync="error"`

Il est possible d'avoir 2 types de règles de validations :
- `rules` : règles qui invalide le champ en erreur avec la couleur du thème 'error'
- `warningRules` : règles qui conseille de changer la valeur avec la couleur du thème 'warning'

Il existe les règles de validations suivantes dans vue-dot que vous pouvez ajouter à ces 2 types :
- `required`
- `isDateValid`
- `notAfterToday`
- `notBeforeToday`

<DocInfo>

Vous pouvez crée vos règles de validations. Ce sont des fonctions qui renvoient `true` quand la valeur est correct sinon une chaine de caractère ou `false`
ex: `(value) => Boolean(value) || 'la date est invalide'`

</DocInfo>

<DocExample file="patterns/date-picker/examples/date-picker-rules" />

### Personnalisation des composants

Vous pouvez personnaliser les composants Vuetify contenus dans `DatePicker` en utilisant la propriété `vuetify-options` avec les propriétés suivantes :

- `textField` : `VTextField`
- `datePicker` : `VDatePicker`
- `icon` : `VIcon`
- `btn` : `VBtn`
- `menu` : `VMenu`

<DocExample file="patterns/date-picker/examples/date-picker-options" />
