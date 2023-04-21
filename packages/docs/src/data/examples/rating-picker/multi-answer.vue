<template>
	<rating-picker
		label="Comment allez-vous ?"
		type="EmotionPicker"
		:length="3"
		:item-labels="['sad', 'medium', 'happy']"
	>
		<FormField v-model="field" />
	</rating-picker>

</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import RatingPicker from '@cnamts/vue-dot/src/patterns/RatingPicker/RatingPicker.vue';
import { Field } from '@cnamts/form-builder/src/components/FormField/types';

@Component({
	components: { RatingPicker }
})
export default class MultiAnswer extends Vue {
	field: Field = {
		type: 'select',
		title: 'ca veut dire quoi chatGPT ?',
		items: [
			{
				text: 'un chat qui a lu wikipedia ?',
				value: 'wikipedia'
			},
			{
				text: 'avoir un animal et des problème de transit',
				value: 'transit'
			},
			{
				text: 'la reponse D',
				value: 'reponseD'
			}
		],
		value: null,
		fieldOptions: {
			type: 'choiceButton',
			label: 'Moyen de contact',
			hideDetails: true,
			outlined: true
		}
	};
}
</script>
