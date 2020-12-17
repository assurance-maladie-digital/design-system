export const locales = {
	addFilterLabel: 'filtres',
	nbFilters:  (nbFilters: number): string => `${nbFilters} filtre${nbFilters > 1 ? 's' : ''}`,
	applyFilterLabel: 'Appliquer le filtre',
	filterStructure: {
		text: {
			selectedElements:  (nbSelectedItems: number): string => `${nbSelectedItems} éléments sélectionnés`,
			search: 'Rechercher'
		},
		date: {
			fromLabel: 'A partir du',
			toLabel: 'Jusqu\'au'
		},
		number: {
			minLabel: 'Supérieur ou égal',
			maxLabel: 'Inférieur ou égal'
		}
	}
};
