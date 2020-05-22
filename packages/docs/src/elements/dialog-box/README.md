::: slot title
# DialogBox
:::

::: slot description
L'élément `DialogBox` est utilisé pour afficher une liste d'informations.
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
					description: 'Afficher la boîte de dialogue ou non, valeur par défaut false, boîte de dialogue non affichée'
				},
				{
					name: 'title',
					defaultValue: 'undefined',
					type: 'string',
					description: 'Le titre de la boîte de dialogue'
				},
				{
					name: 'width',
					defaultValue: '800px',
					type: 'string',
					description: 'Le titre de la boîte de dialogue'
				}
			],
			slots: [
				{
					name: 'title',
					description: 'Slot pour remplacer le titre par défaut.'
				},
				{
					name: 'default',
					description: 'Slot pour ajouter du contenu entre les sltos `title` et les `actions`.'
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
					description: 'Événement émis lorsque la boite de dialog apparait/disparait'
				},
				{
					name: 'cancel',
					description: 'Événement émis lorsque l\'utilisateur clique sur le bouton pour annuler'
				},
				{
					name: 'confirm',
					description: 'Événement émis lorsque l\'utilisateur clique sur le bouton pour confirmer'
				}
			]
		}
	}"
/>

## Playground

<DocExample file="elements/dialog-box/examples/dialog-box-playground" />

## Exemples

### Utilisation des slots

Utilisez le slot `default` pour afficher du contenu.
Vous pouvez en plus utiliser les slots
- `title` pour personnaliser le titre.
- `actions` pour personnaliser les actions.

<DocExample file="elements/dialog-box/examples/dialog-box-slots" />

### Personnalisation des composants

Le composant accepte les props vuetify de `VDialog`

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

<DocExample file="elements/dialog-box/examples/dialog-box-options" />

### Utilisation des évènements

<DocExample file="elements/dialog-box/examples/dialog-box-events" />
