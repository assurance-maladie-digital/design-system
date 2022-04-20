import { Api } from '~/types';

export const api: Api = {
	DownloadBtn: {
		props: [
			{
				name: 'file-promise',
				type: 'Promise<AxiosResponse<string>>',
				required: true,
				description: 'Le service API a appeler pour télécharger le document.'
			},
			{
				name: 'fallback-filename',
				type: 'string',
				default: 'undefined',
				description: 'Le nom du fichier à utiliser si le nom n’est pas présent dans le header `Content-Disposition` de la réponse du service API.<br>Par défaut, le nom du fichier sera la date du jour et l’heure du téléchargement.'
			},
			{
				name: 'notification',
				type: [
					'string',
					'boolean'
				],
				default: `'Document téléchargé avec succès.'`,
				description: 'Le texte de la notification de succès.<br>La valeur `false` permet de désactiver l’affichage de la notification.'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				default: 'undefined',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				example: `{
	btn: 'VBtn',
	icon: 'VIcon'
}`
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour afficher du contenu dans le bouton.'
			},
			{
				name: 'icon',
				description: 'Slot pour remplacer l’icône.'
			}
		],
		events: [
			{
				name: 'error',
				description: 'Événement émis lorsqu’il y a une erreur pendant le téléchargement du document.',
				value: 'Error'
			}
		]
	}
};
