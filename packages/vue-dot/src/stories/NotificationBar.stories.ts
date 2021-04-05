import { Args, ArgTypes } from '@storybook/api';
import NotificationBar from '../patterns/NotificationBar/index';

export default {
	component: NotificationBar,
	title: 'Patterns/NotificationBar',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { NotificationBar },
	props: Object.keys(argTypes),
	template : `
	      <NotificationBar v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
