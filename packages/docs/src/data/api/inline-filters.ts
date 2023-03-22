import { Api } from '~/types';

export const api: Api = {
	FilterModule: {
		props: [
			{
				name: 'filters',
				type: 'FilterItem[]',
				required: true,
				description: 'Tableau de champs à afficher.',
				example: `{
	clearAfterValidate: boolean;
	limited: boolean;
	label: string;
	name: string;
	description: string;
	icon: string;
	selection: unknown[];
	showAll: boolean;
	chips: {
		value: unknown;
		text: string;
	}[];
	value: any;
	defaultValue: any;
	formatting?: (value: unknown) => string;
	style: string;
}[]`
			},
			{
				name: 'chipsLimit',
				type: 'Number',
				required: false,
				default: 4,
				description: 'Limite ne nombre de chips affichés'
			},
			{
				name: 'limitedFilters',
				type: 'Array',
				required: false,
				description: 'Selectionner les filtres qui seront affichés sans ouvrir la barre latérale',
				example: `[nom, date, range]`
			},
			{
				name: 'applyButton',
				type: 'Boolean',
				required: false,
				default: false,
				description: 'Affiche le bouton "Appliquer"'
			},
			{
				name: 'hideReset',
				type: 'Boolean',
				required: false,
				default: false,
				description: 'Masque le bouton "Réinitialiser"'
			}
		],
		events: [
			{
				name: 'applyFunction',
				description: 'Événement émis lorsque que l’utilisateur clique sur le bouton "appliquer".',
				value: 'Void'
			},
			{
				name: 'onchangeFilters',
				description: 'Événement émis lorsque qu’un champ est modifié',
				value: 'Void'
			}
		]
	}
};
