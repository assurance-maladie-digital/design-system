import { Args, ArgTypes } from '@storybook/api';
import LangBtn from '../patterns/LangBtn/index';

export default {
	component: LangBtn,
	title: 'Patterns/LangBtn',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { LangBtn },
	props: Object.keys(argTypes),
	template : `
	      <LangBtn v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
