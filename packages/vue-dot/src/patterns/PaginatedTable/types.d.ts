// Vuetify's VDataTable options
export interface Options {
	page: number;
	itemsPerPage: number;
	sortBy: string[];
	sortDesc: boolean[];
	groupBy: string[];
	groupDesc: boolean[];
	multiSort: boolean;
	mustSort: boolean;
}
