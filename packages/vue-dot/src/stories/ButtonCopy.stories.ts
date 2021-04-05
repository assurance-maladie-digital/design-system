import { Args, ArgTypes } from '@storybook/api';
import CopyBtn from '../elements/CopyBtn/index';
import *as icons from '@mdi/js';

export default {
	component: CopyBtn,
	title: 'Elements/ButtonCopy',
	excludeStories: /.*Data$/,
	argTypes: {
        label: { control: 'text', defaultValue: 'Copier le texte' , type: { required: true }, table: { category: 'props' } },
		textToCopy: { control: 'text', defaultValue: 'Exemple' , type: { required: true }, table: { category: 'props' } },
		hideTooltip: { control: 'boolean' , table: { category: 'props' } },
		vuetifyOptions : {
			name: 'vuetify-options',
			table : {
				category: 'props',
				type: {
					summary: 'string',
					detail: 'something really really long'
				}
			}
		},
		tooltip: { control: 'text', defaultValue: 'Le texte a bien été copié' , type: { required: true } }
    }
};
// Cas d'utilisation
export const UseCase = (args: Args, { argTypes }: ArgTypes ) : unknown => ({
	components: { CopyBtn },
	props: Object.keys(argTypes),
	template: `
	      <VTextField
	          v-model="textToCopy"
	          :label="label"
	          class="vd-form-input"
	          hide-details
	          outlined
          >
	        <template #append>
		       <CopyBtn
			    v-bind="$props"
		    />
	       </template>
         </VTextField>
	`
});

// Utilisation des slot
export const SlotUseCase = (args: Args, { argTypes }: ArgTypes)  : unknown => ({
	components: { CopyBtn },
	props: Object.keys(argTypes),
	template: `
		<CopyBtn v-bind="$props">
		<template #icon>
		   <VIcon>
              {{ icon }}
		   </VIcon>
	    </template>
	    </CopyBtn>
	`
});
SlotUseCase.argTypes = {
	icon: { control: { type:'select', options:icons }, defaultValue: icons.mdiPlusCircle , type: { required: true }  }
};

// Personalisation avec vuetify
export const CostumizeVuetify = (args: Args, { argTypes }: ArgTypes)  : unknown => ({
	components: { CopyBtn },
	props: Object.keys(argTypes),
	template: '<CopyBtn v-bind="$props" />'
});
CostumizeVuetify.args = {
	vuetifyOptions : {
		btn: { large : true },
		icon: { color: 'accent' }
   }
};
