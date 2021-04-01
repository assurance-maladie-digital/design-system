import { action } from '@storybook/addon-actions';
import DialogBox from '../elements/DialogBox/index';
import *as icons from '@mdi/js';

const HeadTitle = () => {
	return {
	  template: '<div style="background:#003463;color: white;height:60px"><p>Dialog box </p><story/></div>',
	};
};


export default {
	component: DialogBox,
	title: 'Elements/DialogBox',
	excludeStories: /.*Data$/,
	argTypes : {
		dialog : {  control: 'boolean' , defaultValue: false },
		title :{
			control : 'text', 
			defaultValue : `Simple title`
		},
		content: { control: 'text' , defaultValue: `<p>Souhaitez-vous procéder à l'enregistrement ?</p>` , table: {category: 'slots'} },
		width : { control: 'number', defaultValue: 500 }
	},
	decorators: [ HeadTitle ] 
};

export const UseCase = (args, { argTypes} ) : unknown => ({
	components: { DialogBox },
	props: Object.keys(argTypes),
    template : `
	<DialogBox
	    v-model="dialog"
	    v-bind="$props"
	    @cancel="dialog = false"
	    @confirm="dialog = false"
    >
	     ${args.content}
	</DialogBox>
	`
});
UseCase.args = {
}