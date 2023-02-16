<template>
	<div>
		<EmotionPicker
			v-if="mainQuestion.type === 'emotions'"
			class="ma-6"
			step-name="mainQuestion"
			main-question
			:simple-mode="mainQuestion.simpleMode"
			:question-datas="mainQuestion"
			@update-result="updateFirstStep"
		/>
		<StarsPicker
			v-if="mainQuestion.type === 'stars'"
			class="ma-6"
			step-name="mainQuestion"
			:question-datas="mainQuestion"
			@update-result="updateFirstStep"
		/>
		<NumberPicker
			v-if="mainQuestion.type === 'numbers'"
			class="ma-6"
			step-name="mainQuestion"
			:question-datas="mainQuestion"
			@update-result="updateFirstStep"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import EmotionPicker from './EmotionPicker';
	import StarsPicker from './StarsPicker';
	import NumberPicker from './NumberPicker';
	import { StepItem } from './types';

	const Props = Vue.extend({
		props: {
			mainQuestion: {
				type: Object,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			EmotionPicker,
			StarsPicker,
			NumberPicker
		}
	})
	export default class RatingPickerStep1 extends MixinsDeclaration {
		firstStep: StepItem = {
			step: '',
			result: null
		};

		updateFirstStep(result: StepItem): void {
			this.firstStep = result;
			this.$emit('update-first-step', this.firstStep);
		}
	}
</script>
