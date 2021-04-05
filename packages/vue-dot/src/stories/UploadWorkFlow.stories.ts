import { Args, ArgTypes } from '@storybook/api';
import UploadWorkflow from '../patterns/UploadWorkflow/index';

export default {
	component: UploadWorkflow,
	title: 'Patterns/UploadWorkflow',
	excludeStories: /.*Data$/,
	argTypes: {
	}
};

export const UseCase = (args: Args, { argTypes } : ArgTypes) : unknown => ({
	components: { UploadWorkflow },
	props: Object.keys(argTypes),
	template : `
	      <UploadWorkflow v-bind="$props" />
	`
});
UseCase.args = {
    color: 'vuetify'
};
