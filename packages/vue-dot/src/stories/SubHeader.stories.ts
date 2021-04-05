import { Args, ArgTypes } from '@storybook/api';
import SubHeader from '../patterns/SubHeader/index';

export default {
	component: SubHeader,
	title: 'Patterns/SubHeader',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { SubHeader },
	props: Object.keys(argTypes),
	template : `
	      <SubHeader v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
