import { Api } from '~/types';

import { customizable } from './shared/mixins/customizable';

export const api: Api = {
	TableToolbar: {
		props: [
			{
				name: 'nb-total',
				type: 'number',
				required: true,
				description: 'Le nombre de résultats total.'
			},
			{
				name: 'nb-filtered',
				type: 'number',
				default: 'undefined',
				description: 'Le nombre de résultats filtrés.'
			},
			{
				name: 'search',
				type: 'string',
				default: 'undefined',
				description: 'La valeur du champ *Recherche*.'
			},
			{
				name: 'search-label',
				type: 'string',
				default: `'Rechercher'`,
				description: 'Le label du champ *Recherche*.'
			},
			{
				name: 'row-text',
				type: 'string',
				default: `'ligne'`,
				description: 'Le texte ajouté après le nombre de résultats.<br>La marque du pluriel est ajoutée automatiquement.'
			},
			{
				name: 'show-add-btn',
				type: 'boolean',
				default: false,
				description: 'Affiche le bouton *Ajouter*.'
			},
			{
				name: 'add-btn-label',
				type: 'string',
				default: `'Ajouter'`,
				description: 'Le label du bouton *Ajouter*.'
			},
			{
				name: 'loading',
				type: 'boolean',
				default: false,
				description: 'Désactive les éléments interactifs.'
			},
			...customizable(`{
				toolbar: 'VToolbar',
				textField: 'VTextField',
				addBtn: 'VBtn',
				addIcon: 'VIcon'
			}`)
		],
		slots: [
			{
				name: 'search-left',
				description: 'Slot pour afficher du contenu à gauche du champ *Recherche*.'
			},
			{
				name: 'search-right',
				description: 'Slot pour afficher du contenu à droite du champ *Recherche*.'
			}
		],
		events: [
			{
				name: 'search',
				description: 'Événement émis lorsque la valeur du champ *Recherche* est mise à jour.',
				value: 'string'
			},
			{
				name: 'click',
				description: 'Événement émis lorsque l’utilisateur clique sur le bouton *Ajouter*.',
				value: undefined
			}
		]
	}
};
