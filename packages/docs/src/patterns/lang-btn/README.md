::: slot title
# LangBtn
:::

::: slot description
L'élément `LangBtn` est utilisé pour afficher une liste d'informations.
:::

## Utilisation

<DocExample
  eager
  file="patterns/lang-btn/examples/lang-btn"
/>

## API

<DocApi
	:value="['LangBtn']"
	:api="{
		LangBtn: {
			props: [
				{
					name: 'availableLanguages',
					type: 'string[] | AllLanguagesChar',
					defaultValue: '*',
					description: 'Liste des langues disponibles, toutes par défaut (*).'
				},
				{
					name: 'hideDownArrow',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Masque la flèche vers le bas à l\'intérieur du bouton d\'activation.'
				},
				{
					name: 'flags',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Active le mode drapeaux.'
				},
				{
					name: 'flagsUrl',
					type: 'string',
					defaultValue: '/img/flags/',
					description: 'L\'emplacement des drapeaux.'
				},
				{
					name: 'flagsExt',
					type: 'string',
					defaultValue: 'svg',
					description: 'L\'extension des drapeaux.'
				},
				{
					name: 'currentLangTextBtn',
					type: 'boolean',
					defaultValue: 'true',
					description: 'Affiche le nom de la langue actuelle à l\'intérieur du bouton activateur.'
				},
				{
					name: 'ariaLabel',
					type: 'string',
					defaultValue: 'Choix de la langue. Actuellement :',
					description: 'Le label du composant.'
				},
				{
					name: 'value',
					type: 'string',
					defaultValue: 'fr.',
					description: 'La langue sélectionnée'
				}
			],
			events: [
				{
					name: 'change',
					description: 'Événement émis lorsque la valeur change',
					value: 'lang: string'
				}
			]
		}
	}"
/>

## Playground

<DocExample
  eager
  file="patterns/lang-btn/examples/lang-btn-playground"
/>