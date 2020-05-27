::: slot title
# SubHeader
:::

::: slot description
L'élément `SubHeader` est un composant qui affiche des informations sous l'en-tête principal
:::

## Utilisation

<DocExample
  eager
  file="patterns/sub-header/examples/sub-header"
/>

## API

<DocApi
	:value="['SubHeader']"
	:api="{
		SubHeader: {
			props: [
				{
					name: 'hide-back-btn',
					defaultValue: 'false',
					type: 'boolean',
					description: 'Masquer le bouton de retour.'
				},
				{
					name: 'back-btn-text',
					defaultValue: 'Retour',
					type: 'string',
					description: 'Le texte du bouton retour.'
				},
				{
					name: 'title-text',
					type: 'string',
					description: 'Le texte du titre.'
				},
				{
					name: 'sub-title-text',
					defaultValue: 'undefined',
					type: 'string',
					description: 'Le texte du sous-titre.'
				},
				{
					name: 'data-lists',
					defaultValue: 'undefined',
					type: 'DataListsItem[]',
					description: 'Liste des composants DataList en mode colonne.'
				},
				{
					name: 'loading',
					defaultValue: 'false',
					type: 'boolean',
					description: 'Liste des composants DataList en mode colonne.'
				}
			],
			slots: [
				{
					name: 'back-btn',
					description: 'Slot pour remplacer le bouton de retour.'
				},
				{
					name: 'title',
					description: 'Slot pour personaliser le titre.'
				},
				{
					name: 'sub-title',
					description: 'Slot pour personaliser le sous titre.'
				},
				{
					name: 'additional-informations',
					description: 'Slot pour ajouter des informations complémentaires.'
				},
				{
					name: 'right-content',
					description: 'Slot pour remplacer la `DataList` dans le contenue de droite.'
				}
			]
		}
	}"
/>

## Exemples

### Action

Vous pouvez ajouter une action sur chaque item des différentes listes de droite

<DocExample file="patterns/sub-header/examples/sub-header-action" />

### Chargement

Vous pouvez affiche le composant avec des listes d'items en chargement

<DocExample file="patterns/sub-header/examples/sub-header-loading" />

### Utilisation des slots

Vous pouvez utiliser les slots pour 
- Le bouton de retour
- Le titre
- Le sous titre
- Des informations supplémentaires
- Modifier le contenue de droite à la place de la propriété `data-lists`

<DocExample file="patterns/sub-header/examples/sub-header-slots" />
