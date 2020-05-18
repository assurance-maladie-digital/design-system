::: slot title
# FileList
:::

::: slot description
L'élément `FileList` est utilisé pour afficher une liste des fichiers.
:::

## Utilisation

<DocExample
  eager
  file="patterns/file-list/examples/file-list"
/>

## API

<DocApi
	:value="['FileList']"
	:api="{
		FileList: {
			props: [
				{
					name: 'showViewBtn',
					defaultValue: 'false',
					type: 'boolean',
					description: 'Affichez le bouton `afficher le fichier` pour les fichiers avec le statut `success`'
				},
				{
					name: 'files',
					required: 'true',
					type: 'FileItem[]',
					description: 'La liste des fichiers à afficher'
				},
				{
					name: 'hideListDivider',
					defaultValue: 'false',
					type: 'boolean',
					description: 'Ne pas afficher le séparateur sur le dernier élément'
				}
			],
			events: [
				{
					name: 'retry',
					description: 'Événement émis lorsque l\'utilisateur clique sur le bouton d\'action \'réessayer\' (visible quand le statut est `error`)',
					value: 'fileId: number'
				},
				{
					name: 'view-file',
					description: 'Événement émis lorsque l\'utilisateur clique sur le bouton pour voir le fichier (visible quand le statut est `success` et qu\'il y a la props `showVienwBtn`)',
					value: 'file: FileItem'
				},
				{
					name: 'delete-file',
					description: 'Événement émis lorsque l\'utilisateur clique sur le bouton pour supprimer le fichier (visible quand le statut est `success`)',
					value: 'fileId: number'
				}
			]
		}
	}"
/>

## Playground

<DocExample file="patterns/file-list/examples/file-list-playground" />

## Exemples

### Evènements

Déclenchement des évènements

<DocExample file="patterns/file-list/examples/file-list-events" />