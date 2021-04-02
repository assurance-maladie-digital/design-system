import { action } from '@storybook/addon-actions';
import DialogBox from '../elements/DialogBox/index';
import *as icons from '@mdi/js';

const HeadTitle = () => {
	return {
	  template: '<div style="background:#003463;color: white;height:60px"><p>Dialog box </p><story/></div>',
	};
};
//
export default {
	component: DialogBox,
	title: 'Elements/DialogBox',
	excludeStories: /.*Data$/,
	argTypes : {
		dialog : {  control: 'boolean' , defaultValue: false },
		width : { control: 'number', defaultValue: 500 },
		cancelBtnText: { control: 'text', defaultValue: 'Annuler'},
		confirmBtnText: { control: 'text', defaultValue: 'Valider'},
		title :{
			control : 'text', 
			defaultValue : `
			<h4 class="display-1">
			   Information
		    </h4>`
		},
		default: { control: 'text' , 
		defaultValue: `
		    <VCardText class="px-0">
		        Il est possible d'utiliser les slots pour modifier l'affichage par défaut.
	        </VCardText>
	   ` , table: {category: 'slots'} },
	    actions: {
			control : 'text', 
			defaultValue : ''
		},
	},
	decorators: [ HeadTitle ] 
};

const Template = (args, { argTypes} ) : unknown => ({
	components: { DialogBox },
	props: Object.keys(argTypes),
    template : `
	<DialogBox
	    v-model="dialog"
	    v-bind="$props"
	    @cancel="dialog = false"
	    @confirm="dialog = false"
    >
	    <template v-if="${args.title !=='' }" #title> 
		    ${args.title}
		</template>
		<template v-if="${ args.default !=='' }" #default> 
		    ${args.default}
		</template>
		<template v-if="${ args.actions !=='' }" #actions> 
		    ${args.actions}
		</template>
	</DialogBox>
	`
});
// Use case
export const UseCase = Template.bind({})
UseCase.args = {
}
// Vuetify options
export const VuetifyOptions = Template.bind({})
VuetifyOptions.args = {
	vuetifyOptions : {
		cardTitle: {
			class: 'pa-0 mb-4 accent--text'
		},
		closeBtn: {
			class: {
				'd-none': true
			}
		},
		icon: {
			color: 'accent'
		},
		cancelBtn: {
			color: 'accent',
			text: false
		},
		confirmBtn: {
			color: 'accent',
			text: true
		}
	},
  };
