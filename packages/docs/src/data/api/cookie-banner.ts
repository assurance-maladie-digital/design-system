import { Api } from '~/types';

export const api: Api = {
	CookieBanner: {
		props: [
			{
				name: 'cookies-route',
				type: 'RawLocation',
				default: `{ name: 'cookies' }`,
				description: 'La valeur de la prop `to` du lien vers la page *Personnaliser mes choix*.'
			},
			{
				name: 'vuetify-options',
				type: 'Options',
				description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
				default: 'undefined',
				example: `{
	sheet: 'VSheet',
	spacer: 'VSpacer',
	closeBtn: 'VBtn',
	icon: 'VIcon',
	actionsSpacer: 'VSpacer',
	customizeBtn: 'VBtn',
	rejectBtn: 'VBtn',
	acceptBtn: 'VBtn'
}`
			}
		],
		slots: [
			{
				name: 'default',
				description: 'Slot pour remplacer la description.'
			}
		]
	}
};
