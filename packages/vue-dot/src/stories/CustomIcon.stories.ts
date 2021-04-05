import { Args, ArgTypes } from '@storybook/api';
import CustomIcon from '../elements/CustomIcon/index';

export default {
	component: CustomIcon,
	title: 'Elements/CostumIcon',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { CustomIcon },
	props: Object.keys(argTypes),
	template : `
	      <CustomIcon v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
