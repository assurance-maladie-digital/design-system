::: slot title
# SubHeader
:::

::: slot description
Le pattern `SubHeader` est utilisé pour afficher un bloc d'informations sous l'en-tête principale.
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
					description: 'Masque le bouton de retour.'
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
					description: 'Liste des composants `DataList` en mode colonne.'
				},
				{
					name: 'loading',
					defaultValue: 'false',
					type: 'boolean',
					description: 'Liste des composants `DataList` en mode colonne.'
				}
			],
			slots: [
				{
					name: 'back-btn',
					description: 'Slot pour remplacer le bouton de retour.'
				},
				{
					name: 'title',
					description: 'Slot pour remplacer le titre.'
				},
				{
					name: 'sub-title',
					description: 'Slot pour remplacer le sous-titre.'
				},
				{
					name: 'right-content',
					description: 'Slot pour remplacer le contenu situé à droite.'
				},
				{
					name: 'additional-informations',
					description: 'Slot pour ajouter des informations complémentaires.'
				}
			]
		}
	}"
/>

## Exemples

### Action

Vous pouvez ajouter une action sur les items des différentes listes situées à droite.

<DocExample file="patterns/sub-header/examples/sub-header-action" />

### Chargement

Vous pouvez afficher le composant en mode chargement.

<DocExample file="patterns/sub-header/examples/sub-header-loading" />

### Utilisation des slots

Vous pouvez utiliser les slots pour remplacer certains contenus par défaut ou pour en ajouter :

- `back-btn` : le bouton de retour
- `title` : le titre
- `sub-title` : le sous-titre
- `right-content` : le contenu situé à droite
- `additional-informations` : informations complémentaires

<DocExample file="patterns/sub-header/examples/sub-header-slots" />
