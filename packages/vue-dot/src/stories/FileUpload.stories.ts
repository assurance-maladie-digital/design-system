import { action } from '@storybook/addon-actions';
import FileUpload from '../patterns/FileUpload/index';
import *as icons from '@mdi/js';



export default {
	component: FileUpload,
	title: 'Patterns/FileUpload',
	excludeStories: /.*Data$/
};

export const UseCase = (args, { argTypes} ) : unknown => ({
	components: { FileUpload },
	props: Object.keys(argTypes),
	template : `
    <FileUpload v-model="file" />
	`
});
UseCase.args ={
}