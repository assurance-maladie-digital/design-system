import { Api } from "~/types";

export const api: Api = {
	AccessibilityBanner: {
		props: [
			{
				name: "accessibility-route",
				type: "RawLocation",
				default: `{ name: '#main' }`,
				description:
					"La valeur de la prop `to` du lien vers la page *Personnaliser mes choix*.",
			},
			{
				name: "vuetify-options",
				type: "Options",
				description:
					"Personnalisation des composants Vuetify en utilisant la directive `customizable`.",
				default: "undefined",
				example: `{
					sheet: 'VSheet',
					spacer: 'VSpacer',
					actionsSpacer: 'VSpacer',
					acceptBtn: 'VBtn'
				}`,
			},
		]
	},
};
