import { Args, ArgTypes } from '@storybook/api';
import FooterWrapper from '../patterns/FooterWrapper/index';

export default {
	component: FooterWrapper,
	title: 'Patterns/FooterWrapper',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { FooterWrapper },
	props: Object.keys(argTypes),
	template : `
	      <FooterWrapper v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
