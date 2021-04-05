import { Args, ArgTypes } from '@storybook/api';
import PaginatedTable from '../patterns/PaginatedTable/index';

export default {
	component: PaginatedTable,
	title: 'Patterns/PaginatedTable',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { PaginatedTable },
	props: Object.keys(argTypes),
	template : `
	      <PaginatedTable v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
