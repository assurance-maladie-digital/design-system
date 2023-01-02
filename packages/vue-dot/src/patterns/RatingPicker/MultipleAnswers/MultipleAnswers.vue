<template>
	<div class="vd-multiple-answers">
		<div class="d-flex justify-center">
			<H6
				class="mb-6"
			>
				{{ questionDatas.question }}
			</H6>
		</div>
		<div>
			<VBtn
				v-for="(answer, index) in answerList"
				:key="index"
				text
				outlined
				large
				class="answer-button w-100 mb-2 justify-space-between"
				color="primary"
				@click="selectAnswer(index)"
			>
				<span>
					{{ answer }}
				</span>
				<VIcon v-if="selectedAnswerIndex === index">
					{{ checkIcon }}
				</VIcon>
			</VBtn>
			<VTextarea
				v-if="selectedAnswerIndex === questionDatas.answers.length"
				v-model="otherReasonValue"
				outlined
				class="mt-4"
				@change="emitResult"
			/>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { resultItem } from './types';
	import { mdiCheck } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			questionDatas: {
				type: Object,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class MultipleAnswers extends MixinsDeclaration {

		selectedAnswerIndex = -1;
		otherReasonValue = '';
		checkIcon = mdiCheck;

		get result(): resultItem {
			if (this.selectedAnswerIndex === this.questionDatas.answers.length) {
				return {
					step: this.questionDatas.name,
					result: 'other',
					reason: this.otherReasonValue
				};
			} else {
				return {
					step: this.questionDatas.name,
					result: this.questionDatas.answers[this.selectedAnswerIndex]
				};
			}
		}

		selectAnswer(answer: number): void {
			this.selectedAnswerIndex = answer;
			this.emitResult();
		}

		emitResult(): void {
			this.$emit(
				'update-result',
				this.result
			);
		}

		get answerList(): string[] {
			if (this.questionDatas.otherAnswer) {
				return [...this.questionDatas.answers, 'Autre'];
			} else {
				return this.questionDatas.answers;
			}

		}
	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

h6 {
	font-size: 16px
}
.answer-button {
	text-transform: none !important;
	border-color: $vd-primary !important;
}
</style>
