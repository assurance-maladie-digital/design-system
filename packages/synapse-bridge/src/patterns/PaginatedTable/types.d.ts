import type { VDataTable } from 'vuetify/components'

export type SortOption = {
	key: string;
	order: 'desc' | 'asc';
};

export type GroupOption = {
	key: string;
	order: 'desc' | 'asc';
};

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

export interface PaginatedTableProps {
	items: any[];
	headers: DataTableHeaders;
	options: DataOptions;
}

export type DataTableHeaders = VDataTable['$props']['headers']
