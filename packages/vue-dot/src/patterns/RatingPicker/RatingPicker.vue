<template>
	<div class="vd-rating-picker">
		<!--first step-->
		<div class="first-step">
			<EmotionPicker
				v-if="mainQuestion.type === 'emotions'"
				class="ma-6"
				step-name="mainQuestion"
				main-question
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
			<div class="d-flex justify-end">
				<div
					v-if="checkFirstStep"
					class="border-green w-100 d-flex justify-center align-center py-3 px-4 mx-4 mt-1"
				>
					<VIcon
						color="success"
						class="mr-4"
					>
						{{ checkIcon }}
					</VIcon>
					<span class="turquoise-darken-60--text">{{ mainQuestion.messsage }}</span>
				</div>
				<VBtn
					v-if="!checkFirstStep"
					class="mr-2 mt-5 close-button"
					color="primary"
					text
				>
					Plus tard
				</VBtn>
			</div>
		</div>

		<!--second step-->
		<div
			v-if="checkFirstStep"
			class="first-step mt-2"
		>
			<div
				v-for="(question, index) in questionsList"
				:key="index"
			>
				<div v-if="index <= secondStep.length">
					<EmotionPicker
						v-if="question.type === 'emotions'"
						class="ma-6"
						step-name="secondStep"
						:question-datas="question"
						@update-result="updateSecondStep"
					/>
					<MultipleAnswers
						v-if="question.type === 'multi'"
						class="ma-6"
						step-name="thirtStep"
						:question-datas="question"
						@update-result="updateSecondStep"
					/>
					<TextAreaForm
						v-if="question.type === 'text-area'"
						class="ma-6"
						step-name="thirtStep"
						:question-datas="question"
						@update-result="updateSecondStep"
					/>
				</div>
			</div>

			<div class="d-flex justify-space-between">
				<VBtn
					class="mr-2 mt-5 close-button"
					color="primary"
					text
				>
					Fermer
				</VBtn>
				<VBtn
					class="mr-2 mt-5 close-button"
					color="primary"
					depressed
					:disabled="!canValidate"
					@click="validateSecondStep"
				>
					Valider
				</VBtn>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { StepItem } from './types';

	import EmotionPicker from './EmotionPicker';
	import StarsPicker from './StarsPicker';
	import NumberPicker from './NumberPicker';
	import MultipleAnswers from './MultipleAnswers';
	import TextAreaForm from './TextAreaForm';
	import { mdiCheckCircleOutline } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			mainQuestion: {
				type: Object,
				required: true
			},
			questionsList: {
				type: Array,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		components: {
			EmotionPicker,
			StarsPicker,
			NumberPicker,
			MultipleAnswers,
			TextAreaForm
		}
	})
	export default class RatingPicker extends MixinsDeclaration {
		checkIcon = mdiCheckCircleOutline;

		firstStep: StepItem = {
			step: '',
			result: null
		};
		secondStep: StepItem[] = [];

		updateFirstStep(result: StepItem): void {
			this.firstStep = result;
		}

		updateSecondStep(result: StepItem): void {
			const alreadyExist = this.secondStep.find(el => el.step === result.step);
			if (alreadyExist) {
				this.secondStep.splice(this.secondStep.indexOf(alreadyExist), 1, result);
			} else {
				this.secondStep.push(result);
			}
		}

		get canValidate(): boolean {
			return this.secondStep.length === this.questionsList.length ? true : false;
		}

		get checkFirstStep(): boolean {
			if (this.firstStep !== null) {
				if (this.mainQuestion.type === 'emotions') {
					return this.firstStep.result ? true : false;
				} else if (this.mainQuestion.type === 'stars') {
					return this.firstStep.result ? true : false;
				} else if (this.mainQuestion.type === 'numbers') {
					return this.firstStep.result ? true : false;
				}
			}
			return false;
		}

		validateSecondStep(): void {
			console.log(this.secondStep);
		}
	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

.first-step {
	box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.123);
	max-width: 450px !important;
	padding: 16px;
	border-radius: 8px;

	.close-button {
		text-transform: none;
	}
	.border-green {
		border: 1px green solid;
		border-radius: 4px;
	}
}

</style>
