import { action } from '@storybook/addon-actions';
import CustomIcon from '../elements/CustomIcon/index';
import *as icons from '@mdi/js';



export default {
	component: CustomIcon,
	title: 'Elements/CostumIcon',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args, { argTypes} ) : unknown => ({
	components: { CustomIcon },
	props: Object.keys(argTypes),
	template : `
	      <CustomIcon v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
