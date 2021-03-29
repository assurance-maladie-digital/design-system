import CopyBtn from '../elements/CopyBtn/index';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
// src/components/Task.stories.js
import { action } from '@storybook/addon-actions';

export default {
	title: 'Elements/ButtonCopy',
	// Nos exports se terminant par "Data" ne sont pas des stories.
	excludeStories: /.*Data$/,
	decorators: [withKnobs]
};

const template = `
<VTextField
			v-model="textToCopy"
			:label="label"
			class="vd-form-input"
			hide-details
			outlined
		>
<template #append>
<CopyBtn
	:label="label"
	:text-to-copy="textToCopy"
/>
</template>
</VTextField>
`;

export const Default = () => ({
	components: { CopyBtn },
	template: template,
	props: {
		label: {
			default: () => text('Label', 'Button copy')
		},
		textToCopy: {
		default: () => text('textToCopy', 'Hello Storybook')
	  },
	  hideTooltip:{
		default: () => boolean('hideTooltip', true),
	  }
	}
});
