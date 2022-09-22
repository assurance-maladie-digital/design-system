import { Api } from '~/types';

import { filterableProps, filterableEvents } from './shared/mixins/filterable';

export const api: Api = {
	FiltersInline: {
		props: filterableProps,
		events: filterableEvents
	}
};
