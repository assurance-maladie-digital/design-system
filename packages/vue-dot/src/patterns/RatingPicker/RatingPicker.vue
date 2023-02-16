<template>
	<div class="vd-rating-picker">
		<!-- Step 1 -->
		<div
			class="step"
			:class="{ 'green-background': checkBackgroundGreen(0), 'red-background': checkBackgroundRed(0), 'shadow-box': shadowMode }"
		>
			<RatingPickerStep1
				:main-question="mainQuestion"
				@update-first-step="updateFirstStep"
			/>
			<div class="d-flex justify-end">
				<div
					v-if="firstStep.result !== null && !showError"
					class="w-100 d-flex justify-center align-center py-3 px-4 mx-5"
					:class="!shadowMode ? 'border-green' : ''"
				>
					<VIcon
						color="success"
						class="mr-4"
					>
						{{ checkIcon }}
					</VIcon>
					<span class="turquoise-darken-60--text">{{ afterValidate[0].message }}</span>
				</div>
				<div
					v-if="firstStep.result !== null && showError"
					class="w-100 d-flex justify-center align-center py-3 px-4 mx-5"
					:class="!shadowMode ? 'border-red' : ''"
				>
					<VIcon
						color="error"
						class="mr-4"
					>
						{{ warningIcon }}
					</VIcon>
					<span class="error--text">{{ afterValidate[0].error }}</span>
				</div>
				<VBtn
					v-if="firstStep.result === null && !hideCloseButtons"
					class="mr-2 mt-5 close-button"
					color="primary"
					text
					@click="onClose()"
				>
					{{ locales.later }}
				</VBtn>
			</div>
			<div class="d-flex justify-end">
				<VBtn
					v-if="!checkFirstStep && firstStep.result !== null && !hideCloseButtons"
					class="mr-2 mt-5 close-button"
					color="primary"
					text
					@click="onClose()"
				>
					{{ locales.close }}
				</VBtn>
			</div>
		</div>
		<!-- Step 2 -->
		<div
			v-if="questionsList.length && checkFirstStep"
			class="step mt-2"
			:class="{ 'green-background': checkBackgroundGreen(1), 'red-background': checkBackgroundRed(1), 'shadow-box': shadowMode }"
		>
			<p class="mb-7 ml-4 mt-3 font-weight-bold">
				{{ locales.more }}
			</p>
			<div
				v-for="(question, index) in questionsList"
				:key="index"
			>
				<RatingPickerStep2
					v-if="index <= secondStep.length"
					:question="question"
					:index="index"
					:validated="validated"
					@update-second-step="updateSecondStep"
				/>
			</div>
			<div
				v-if="validated && !showError"
				class="d-flex justify-center align-center px-3 py-3 mx-6"
				:class="!shadowMode ? 'border-green' : ''"
			>
				<VIcon
					color="success"
					class="mr-4"
				>
					{{ checkIcon }}
				</VIcon>
				<span class="turquoise-darken-60--text">{{ afterValidate[1].message }}</span>
			</div>
			<div
				v-if="validated && showError"
				class="d-flex justify-center align-center px-3 py-3 mx-6"
				:class="!shadowMode ? 'border-red' : ''"
			>
				<VIcon
					color="error"
					class="mr-4"
				>
					{{ warningIcon }}
				</VIcon>
				<span class="error--text">{{ afterValidate[1].error }}</span>
			</div>

			<div
				class="mx-4 pb-3 d-flex"
				:class="validated || hideCloseButtons ? 'justify-end' : 'justify-space-between'"
			>
				<VBtn
					v-if="!hideCloseButtons"
					class="mr-2 mt-5 close-button"
					color="primary"
					text
					@click="onClose()"
				>
					{{ locales.close }}
				</VBtn>
				<VBtn
					v-if="!validated"
					class="mr-2 mt-5 close-button"
					color="primary"
					:disabled="secondStep.length == 0"
					depressed
					@click="validateSecondStep"
				>
					{{ validateTextButton }}
				</VBtn>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from './locales';
	import { StepItem, AfterValidateItem } from './types';
	import EmotionPicker from './EmotionPicker';
	import StarsPicker from './StarsPicker';
	import NumberPicker from './NumberPicker';
	import MultipleAnswers from './MultipleAnswers';
	import TextAreaForm from './TextAreaForm';

	import { mdiCheckCircleOutline } from '@mdi/js';
	import { mdiAlertCircleOutline } from '@mdi/js';

	import RatingPickerStep1 from './RatingPickerStep1.vue';
	import RatingPickerStep2 from './RatingPickerStep2.vue';

	const Props = Vue.extend({
		props: {
			shadowMode: {
				type: Boolean,
				required: false
			},
			hideCloseButtons: {
				type: Boolean,
				required: false
			},
			mainQuestion: {
				type: Object,
				required: true
			},
			questionsList: {
				type: Array,
				default: () => []
			},
			validateTextButton: {
				type: String,
				default: 'Transmettre mon avis'
			},
			afterValidate: {
				type: Array as PropType<AfterValidateItem[]>,
				default: () => [
					{
						message: 'Merci pour votre réponse',
						greenBackground: false
					},
					{
						message: 'Merci pour vos remarques utiles à l\'amélioration du site.',
						greenBackground: false
					},
					{
						message: 'Erreur lors de la validation de votre avis.',
						redBackground: false
					}
				]
			},
			errorValidate: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		model: {
			prop: 'datas',
			event: 'on-validate'
		},
		components: {
			RatingPickerStep2,
			RatingPickerStep1,
			EmotionPicker,
			StarsPicker,
			NumberPicker,
			MultipleAnswers,
			TextAreaForm
		}
	})
	export default class RatingPicker extends MixinsDeclaration {
		locales = locales;
		checkIcon = mdiCheckCircleOutline;
		warningIcon = mdiAlertCircleOutline;
		question = {
			type: '',
			answers: []
		};
		firstStep: StepItem = {
			step: '',
			result: null
		};
		secondStep: StepItem[] = [];
		validated = false;
		showError = false;
		afterValidateItem: AfterValidateItem = {
			message: '',
			error: '',
			greenBackground: false,
			redBackground: false
		};

		mounted() {
			if (this.errorValidate) {
				this.showError = true;
			}
		}
		get checkFirstStep(): boolean {
			if (this.firstStep.result !== null) {
				if (this.mainQuestion.type === 'emotions') {
					return this.firstStep.result === 'sad' || this.firstStep.result === 'neutral' ? true : false;
				} else if (this.mainQuestion.type === 'stars') {
					return this.firstStep.result < 4 ? true : false;
				} else if (this.mainQuestion.type === 'numbers') {
					return this.firstStep.result < 7 ? true : false;
				}
			}
			return false;
		}
		updateFirstStep(result: StepItem): void {
			this.firstStep = result;
			this.$emit('change', [this.firstStep]);
			this.afterFirstQuestion();
			this.validateFirstStep();
		}
		updateSecondStep(result: StepItem): void {
			const alreadyExist = this.secondStep.find(el => el.step === result.step);
			if (alreadyExist) {
				this.secondStep.splice(this.secondStep.indexOf(alreadyExist), 1, result);
			} else {
				this.secondStep.push(result);
			}
		}
		checkBackgroundGreen(number: number): boolean {
			if (number) {
				return this.validated !== false && this.afterValidate[number].greenBackground ? true : false;
			} else {
				return this.firstStep.result !== null && this.afterValidate[number].greenBackground ? true : false;
			}
		}
		checkBackgroundRed(number: number): boolean {
			if (number) {
				return this.validated !== false && this.showError && this.afterValidate[number].redBackground ? true : false;
			} else {
				return this.firstStep.result !== null && this.showError && this.afterValidate[number].redBackground ? true : false;
			}
		}
		validateFirstStep(): void {
			if (this.showError === false) {
				this.$emit('on-validate', [this.firstStep]);
				return;
			}
			return;
		}
		validateSecondStep(): void {
			this.validated = true;
			if (this.showError === false) {
				this.$emit('on-validate', [this.firstStep, ...this.secondStep]);
				return;
			}
			return;
		}
		onClose(): void {
			this.$emit('on-close');
		}
		afterFirstQuestion(): void {
			this.$emit('after-first-question');
		}
	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';
p {
	font-size: 16px;
}
.step {
	max-width: 450px !important;
	padding: 16px;
	border-radius: 8px;
	.close-button {
		text-transform: none;
	}
	.border-green {
		border: 1px solid $vd-turquoise-darken-40;
		border-radius: 4px;
	}
	.border-red {
		border: 1px solid $vd-error;
		border-radius: 4px;
	}
}
.shadow-box {
	box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.123);
}
.green-background {
	background-color: $vd-turquoise-lighten-97;
}
.red-background {
	background-color: rgba($vd-error, 0.05);
}
.v-icon {
	min-width: 24px;
}
</style>
