import { Args, ArgTypes } from '@storybook/api';
import FileUpload from '../patterns/FileUpload/index';

export default {
	component: FileUpload,
	title: 'Patterns/FileUpload',
	excludeStories: /.*Data$/
};

export const UseCase = (args:Args, { argTypes }: ArgTypes ) : unknown => ({
	components: { FileUpload },
	props: Object.keys(argTypes),
	template : `
    <FileUpload v-model="file" />
	`
});
UseCase.args ={
};
