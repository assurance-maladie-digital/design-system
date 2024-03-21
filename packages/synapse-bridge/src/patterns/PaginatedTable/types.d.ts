import type { VDataTable } from 'vuetify/components'

export interface DataOptions {
	page: number;
	itemsPerPage: number;
	sortBy: string[];
	sortDesc: boolean[];
	groupBy: string[];
	groupDesc: boolean[];
	multiSort: boolean;
	mustSort: boolean;
}

export type DataTableHeaders = VDataTable['$props']['headers']
