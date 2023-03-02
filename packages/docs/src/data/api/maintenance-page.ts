import { Api } from '~/types';

export const api: Api = {
	MaintenancePage: {
		props: [
			{
				name: "page-title",
				type: "string",
				required: true,
				description: "Le titre de la page.",
			},
			{
				name: "message",
				type: "string",
				required: true,
				description: "Le message d’erreur à afficher à l’utilisateur.",
			},
			{
				name: "image",
				type: "boolean",
				default: false,
				description: "Affiche une image d'illustration.",
			},
			{
				name: "image-src",
				type: "string",
				default: "undefined",
				description: "L’URL de l’image d’illustration.",
			}
		],
	},
};
