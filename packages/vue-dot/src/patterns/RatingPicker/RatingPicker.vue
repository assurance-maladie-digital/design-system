<template>
	<div class="vd-rating-picker">
		<!--first step-->
		<div
			class="step"
			:class="{'green-background': checkBackgroundGreen(), 'shadow-box': shadowMode}"
		>
			<EmotionPicker
				v-if="type === 'emotions'"
				class="ma-6"
				:simple-mode="mainQuestion.simpleMode"
				:question-datas="mainQuestion"
				@update-result="updateFirstStep"
			/>
			<StarsPicker
				v-if="type === 'stars'"
				class="ma-6"
				:question-datas="mainQuestion"
				@update-result="updateFirstStep"
			/>
			<NumberPicker
				v-if="type === 'numbers'"
				class="ma-6"
				:question-datas="mainQuestion"
				@update-result="updateFirstStep"
			/>

			<div class="d-flex justify-end">
				<div
					v-if="firstStep.result !== null"
					class="w-100 d-flex justify-center align-center py-3 px-4 mx-5"
					:class="!shadowMode ? 'border-green' : ''"
				>
					<VIcon
						color="success"
						class="mr-4"
					>
						{{ checkIcon }}
					</VIcon>
					<span class="turquoise-darken-60--text">{{ mainQuestion.message }}</span>
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

		<!--second step-->
		<div
			v-if="checkFirstStep"
			class="step mt-2"
			:class="{'green-background': checkBackgroundGreen(), 'shadow-box': shadowMode}"
		>
			<p
				class="mb-7 ml-4 mt-3 font-weight-bold"
			>
				{{ locales.more }}
			</p>

			<slot />

			<div
				v-if="validated"
				class="d-flex justify-center align-center border-green py-3 mx-6"
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
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import { locales } from './locales';
	import { mdiCheckCircleOutline } from '@mdi/js';

	import EmotionPicker from './EmotionPicker';
	import StarsPicker from './StarsPicker';
	import NumberPicker from './NumberPicker';

	import { StepItem } from './types';

	const Props = Vue.extend({
		props: {
			type: {
				type: String,
				required: true
			},
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
			firstStep: {
				type: Object,
				required: true
			},
			secondStep: {
				type: Array,
				required: true
			},
			validateTextButton: {
				type: String,
				default: 'Transmettre mon avis'
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
			EmotionPicker,
			StarsPicker,
			NumberPicker
		}
	})
	export default class RatingPicker extends MixinsDeclaration {
		locales = locales;
		checkIcon = mdiCheckCircleOutline;

		validated = false;

		get checkFirstStep(): boolean {
			if (this.firstStep.result !== null) {
				if (this.type === 'emotions') {
					return this.firstStep.result === 'sad' || this.firstStep.result === 'neutral' ? true : false;
				} else if (this.type === 'stars') {
					return this.firstStep.result < 4 ? true : false;
				} else if (this.type === 'numbers') {
					return this.firstStep.result < 7 ? true : false;
				}
			}
			return false;
		}

		updateFirstStep(result: StepItem): void {
			this.$emit('change', result);
			this.validateFirstStep();
		}

		validateFirstStep(): void {
			this.$emit('on-validate', [this.firstStep]);
		}

		validateSecondStep(): void {
			this.$emit('on-validate', [this.firstStep, ...this.secondStep]);
			this.validated = true;
		}

		checkBackgroundGreen(): boolean {
			return this.mainQuestion.greenBackground && this.firstStep.result ? true : false;
		}

		onClose(): void {
			this.$emit('on-close');
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
}
.shadow-box {
	box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.123);
}
.green-background {
	background-color: $vd-turquoise-lighten-97;
}
.v-icon {
	min-width: 24px;
}
</style>
