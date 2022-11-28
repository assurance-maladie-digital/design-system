import { Api } from "~/types";

export const api: Api = {
	SearchFilter: {
		props: [
			{
				name: "height",
				type: "string",
				required: false,
				description: "La hauteur du sous-filtre",
			},
			{
				name: "multiple",
				type: "boolean",
				required: false,
				description: "Permet une sélection multiple",
			},
			{
				name: "labelChip",
				type: "boolean",
				required: false,
				description: "Permet d'afficher les items sous forme de chips de couleur",
			}
		],
	}
};
