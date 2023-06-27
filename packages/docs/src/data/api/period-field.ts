import { Api } from '~/types';

export const api: Api = {
	PeriodField: {
		props: [
			{
				name: "outlined",
				type: "boolean",
				description: "Affiche les `VTextField` en mode `outlined`.",
				default: false,
			},
			{
				name: "disabled",
				type: "boolean",
				description: "Désactive le champ.",
				default: false,
			},
		],
		events: [
			{
				name: "change",
				description:
					"Événement émis lorsque la valeur du champ est mise à jour.",
				value: "FieldValue",
			},
		]
	},
};
