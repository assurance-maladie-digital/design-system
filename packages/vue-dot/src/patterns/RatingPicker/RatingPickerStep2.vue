<template>
	<div>
		<EmotionPicker
			v-if="question.type === 'emotions'"
			class="ma-6"
			step-name="secondStep"
			:question-datas="question"
			:is-validated="validated"
			@update-result="updateSecondStep"
		/>
		<MultipleAnswers
			v-if="question.type === 'multi'"
			class="ma-6"
			step-name="thirtStep"
			:question-datas="question"
			:is-validated="validated"
			@update-result="updateSecondStep"
		/>
		<TextAreaForm
			v-if="question.type === 'text-area'"
			class="ma-6"
			step-name="thirtStep"
			:question-datas="question"
			:is-validated="validated"
			@update-result="updateSecondStep"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import EmotionPicker from './EmotionPicker';
	import MultipleAnswers from './MultipleAnswers';
	import TextAreaForm from './TextAreaForm';
	import { StepItem } from './types';

	const Props = Vue.extend({
		props: {
			question: {
				type: Object,
				required: true
			},
			validated: {
				type: Boolean,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			EmotionPicker,
			MultipleAnswers,
			TextAreaForm
		}
	})
	export default class RatingPickerStep2 extends MixinsDeclaration {
		secondStep: StepItem[] = [];

		updateSecondStep(result: StepItem[]): void {
			this.secondStep = result;
			this.$emit('update-second-step', this.secondStep);
		}
	}
</script>
