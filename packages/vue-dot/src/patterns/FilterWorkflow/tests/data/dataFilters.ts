import { Rows } from '../../types';
import { Filters } from '../../types';

export const dataFilters: Filters = {
	filename: {
		label: 'Fichier',
		type: 'text'
	},
	nbDownload: {
		label: 'Nombre de téléchargement',
		type: 'number'
	},
	date: {
		label: 'Date',
		type: 'date'
	}
};

export const dataRows: Rows = [
	{
		filename: 'fichier1.txt',
		nbDownload: 1,
		date: '01/12/2020'
	},
	{
		filename: 'fichier2.txt',
		nbDownload: 2,
		date: '15/12/2020'
	},
	{
		filename: 'fichier3.txt',
		nbDownload: 3,
		date: '30/12/2020'
	}
];
