import { Args, ArgTypes } from '@storybook/api';
import PageCard from '../elements/PageCard/index';

export default {
	component: PageCard,
	title: 'Elements/PageCard',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { PageCard },
	props: Object.keys(argTypes),
	template : `
	      <PageCard v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
