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
				name: 'notification',
				type: [
					'boolean',
					'string'
				],
				default: `'Document téléchargé avec succès.'`,
				description: 'Le texte de la notification de succès.<br>La valeur `false` permet de désactiver l\'affichage de la notification.'
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
				description: 'Slot pour remplacer l\'icône par défaut.'
			}
		],
		events: [
			{
				name: 'error',
				description: 'Événement émis lorsqu\'il y a une erreur pendant le téléchargement du document.',
				value: 'Error'
			}
		]
	}
};
