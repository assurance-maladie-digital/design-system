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
					name: 'noCalendar',
					defaultValue: 'false',
					type: 'boolean',
					description: 'Désactive le calendrier.'
				},
				{
					name: 'noPrependIcon',
					defaultValue: 'false',
					type: 'boolean',
					description: 'Désactive l\'icône de préfixe'
				},
				{
					name: 'appendIcon',
					defaultValue: 'false',
					type: 'boolean',
					description: 'Utilise l\'icône d\'ajout au lieu de pré\-ajouter.'
				},
				{
					name: 'textFieldActivator',
					defaultValue: 'false',
					type: 'boolean',
					description: 'Ouvre le menu du calendrier lorsque le champ de texte est cliqué.'
				},
				{
					name: 'textFieldClass',
					defaultValue: 'undefined',
					type: 'string | string[]',
					description: 'Classes pour le champ VTextField'
				},
				{
					name: 'startDate',
					defaultValue: 'undefined',
					type: 'string',
					description: 'Classes pour le champ VTextField'
				},
				{
					name: 'showWeekEnds',
					defaultValue: 'false',
					type: 'boolean',
					description: 'Affiche les week-ends dans le calendrier'
				 },
				{
					name: 'warningRules',
					type: 'ValidationRule[]',
					defaultValue: '[]',
					description: 'Un tableau de règles (même syntaxe que celles de Vuetify)'
				},
				{
					name: 'dateFormat',
					type: 'string',
					defaultValue: 'DD/MM/YYYY',
					description: 'Le format de la date à l\'intérieur du champ de texte'
				},
				{
					name: 'dateFormatReturn',
					type: 'string',
					defaultValue: 'YYYY-MM-DD',
					description: 'Le format utilisé dans le v-modèle pour l\'utilisateur'
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
					name: 'pickerDate',
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
					description: 'Ajoute un élément avant le contenu de l\'entrée'
				},
				{
					name: 'append',
					description: 'Ajoute un élément après le contenu de l\'entrée.'
				}
			]
		}
	}"
/>

## Exemples

### Date de naissance avec utilisation des slots pour modifier l'icon

<DocExample file="patterns/date-picker/examples/date-picker-birthdate" />

### Weekend

<DocExample file="patterns/date-picker/examples/date-picker-weekend" />

### Période

<DocExample file="patterns/date-picker/examples/date-picker-range" />
