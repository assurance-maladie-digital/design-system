import { Args, ArgTypes } from '@storybook/api';
import HeaderLoading from '../elements/HeaderLoading/index';

export default {
	component: HeaderLoading,
	title: 'Elements/HeaderLoading',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { HeaderLoading },
	props: Object.keys(argTypes),
	template : `
	      <HeaderLoading v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
