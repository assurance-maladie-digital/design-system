::: slot title
# DialogBox
:::

::: slot description
L'élément `DialogBox` est utilisé pour afficher une boîte de dialogue avec des boutons d'actions.
:::

## Utilisation

<DocExample
  eager
  file="elements/dialog-box/examples/dialog-box"
/>

## API

<DocApi
	:value="['DialogBox']"
	:api="{
		DialogBox: {
			props: [
				{
					name: 'value',
					defaultValue: 'false',
					type: 'boolean',
					description: 'Contrôle la visibilité de la boîte de dialogue.'
				},
				{
					name: 'title',
					defaultValue: 'undefined',
					type: 'string',
					description: 'Le titre de la boîte de dialogue.'
				},
				{
					name: 'width',
					defaultValue: '800px',
					type: 'string',
					description: 'La largeur de la boîte de dialogue.'
				}
			],
			slots: [
				{
					name: 'title',
					description: 'Slot pour remplacer le titre par défaut.'
				},
				{
					name: 'default',
					description: 'Slot pour ajouter du contenu entre le titre et les boutons d\'actions..'
				},
				{
					name: 'actions',
					description: 'Slot pour remplacer les bouttons d\'actions par défaut.'
				},
				{
					name: 'vuetify-options',
					type: 'Options',
					defaultValue: 'undefined',
					description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.'
				}
			],
			events: [
				{
					name: 'change',
					description: 'Événement émis lorsque la boite de dialogue apparaît et disparaît.'
				},
				{
					name: 'cancel',
					description: 'Événement émis lorsque l\'utilisateur clique sur le bouton Annuler.'
				},
				{
					name: 'confirm',
					description: 'Événement émis lorsque l\'utilisateur clique sur le bouton Confirmer.'
				}
			]
		}
	}"
/>

## Playground

<DocExample file="elements/dialog-box/examples/dialog-box-playground" />

## Exemples

### Utilisation des slots

<DocInfo>

	Utilisez le slot `default` pour afficher du contenu.
	Vous pouvez en plus utiliser les slots
	- `title` pour personnaliser le titre.
	- `actions` pour personnaliser les actions.
	
</DocInfo>

<DocExample file="elements/dialog-box/examples/dialog-box-slots" />

### Personnalisation des composants

<DocInfo>

	La `DialogBox` est composée d'une `VDialog`. 
	Vous pouvez appliquer les attributs d'une `VDialog` au composant, ils seront appliqués sur celle-ci.
	Vous pouvez personnaliser certains composants avec la prop vuetify-options` contenant les clées suivantes possible :
	- `card` => `VCard`
	- `cardTitle` => `VCardTitle`
	- `spacer` => `VSpacer`
	- `closeBtn` => `VBtn`
	- `icon` => `VIcon`
	- `cardActions` => `VCardActions`
	- `actionsSpacer` => `VSpacer`
	- `cancelBtn` => `VBtn`
	- `confirmBtn` => `VBtn`

</DocInfo>

<DocExample file="elements/dialog-box/examples/dialog-box-options" />
