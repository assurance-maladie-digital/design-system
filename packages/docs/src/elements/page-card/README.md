::: slot title
# PageCard
:::

::: slot description
L'élément `PageCard` est utilisé pour afficher une page.
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
					name: 'min-height',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Définit une hauteur minimale de `500px`.'
				},
				{
					name: 'no-shadow',
					type: 'boolean',
					defaultValue: 'false',
					description: 'Supprime l\'ombre de la `VCard`.'
				},
				{
					name: 'card-class',
					type: 'string',
					defaultValue: 'undefined',
					description: 'Les classes à appliquer à la `VCard.`'
				},
				{
					name: 'card-padding',
					type: 'string',
					defaultValue: '\'px-6 py-4\'',
					description: 'Le padding à appliquer à la `VCard`.'
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
					name: 'default',
					description: 'Slot pour afficher du contenu.'
				}
			]
		}
	}"
/>

## Playground

<DocExample file="elements/page-card/examples/page-card-playground" />

## Exemples

### Conteneur transparent

Vous pouvez transformer la `PageCard` en simple conteneur en la rendant transparente et en désactivant son ombre ainsi que son espacement interne.

<DocExample file="elements/page-card/examples/page-card-transparent" />

### Largeur personnalisée

Vous pouvez modifier la largeur de la `PageCard` en utilisant la propriété `width`.

<DocInfo>

La `PageCard` est composée d'une `VCard` contenue dans un `VLayout`. Vous pouvez appliquer les attributs d'une `VCard` au composant, ils seront appliqués sur celle-ci.

</DocInfo>

<DocExample file="elements/page-card/examples/page-card-width" />
