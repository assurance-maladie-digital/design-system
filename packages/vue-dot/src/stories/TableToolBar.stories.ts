import { Args, ArgTypes } from '@storybook/api';
import TableToolbar from '../patterns/TableToolbar/index';

export default {
	component: TableToolbar,
	title: 'Patterns/TableToolbar',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { TableToolbar },
	props: Object.keys(argTypes),
	template : `
	      <TableToolbar v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
