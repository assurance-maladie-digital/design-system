import { Args, ArgTypes } from '@storybook/api';
import DataListGroup from '../patterns/DataListGroup/index';

export default {
	component: DataListGroup,
	title: 'Patterns/DataListGroup',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { DataListGroup },
	props: Object.keys(argTypes),
	template : `
	      <DataListGroup v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
