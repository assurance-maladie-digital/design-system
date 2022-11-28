import { Api } from "~/types";

export const api: Api = {
	// FilterModule: {
	// 	props: [
	// 		{
	// 			name: 'filters',
	// 			type: 'FilterItem[]',
	// 			required: true,
	// 			description: 'Tableau de champs à afficher.',
	// 			example: `{
	// 				clearAfterValidate: boolean;
	// 				limited: boolean;
	// 				label: string;
	// 				name: string;
	// 				description: string;
	// 				icon: string;
	// 				selection: unknown[];
	// 				showAll: boolean;
	// 				chips: {
	// 					value: unknown;
	// 					text: string;
	// 				}[];
	// 				value: any;
	// 				defaultValue: any;
	// 				formatting?: (value: unknown) => string;
	// 				style: string;
	// 			}[]`
	// 		},
	// 		{
	// 			name: 'simpleMode',
	// 			type: 'Boolean',
	// 			required: false,
	// 			default: false,
	// 			description: 'Choisir entre le mode simple si vous avez peu de filtre ou le mode complexe quand '
	// 		},
	// 		{
	// 			name: 'chipsLimit',
	// 			type: 'Number',
	// 			required: false,
	// 			default: 4,
	// 			description: 'Choisir entre le mode simple si vous avez peu de filtre ou le mode complexe quand '
	// 		}
	// 	],
	// 	events: [
	// 		{
	// 			name: 'filters',
	// 			description: 'Événement émis lorsque qu’un filtre est modifié.',
	// 			value: `FilterItem[] | null`
	// 		}
	// 	]
	// }

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
