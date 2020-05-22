::: slot title
# PageCard
:::

::: slot description
L'élément `PageCard` est utilisé pour avoir un corps de base de page.
:::

## Utilisation

<DocExample
  eager
  file="elements/page-card/examples/page-card"
/>

## API

<DocApi
	:value="['PageCard']"
	:api="{
		PageCard: {
			props: [
				{
					name: 'minHeight',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Réglez la hauteur minimale sur 500 pixels.'
				},
				{
					name: 'noShadow',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Supprimer l\'ombre de VCard.'
				},
				{
					name: 'cardClass',
					type: 'string',
					defaultValue: 'undefined',
					description: 'Personnalise les classes de la VCard.'
				},
				{
					name: 'cardPadding',
					type: 'string',
					defaultValue: 'px-6 py-4',
					description: 'Personnalise le remplissage de la VCard. Séparer cela de la `cardClass` permet de changer une classe sans avoir à définir le remplissage si non nécessaire'
				}
			],
			slots: [
				{
					name: 'default',
					description: 'Slot pour afficher du cotenu.'
				}
			]
		}
	}"
/>

## Playground

<DocExample file="elements/page-card/examples/page-card-playground" />

## Exemple

### Transparent

<DocExample file="elements/page-card/examples/page-card-transparent" />


