<template>
	<div class="vd-emotion-picker">
		<div class="d-flex justify-center">
			<H6
				class="mb-6"
			>
				{{ questionDatas.question }}
			</H6>
		</div>
		<div
			v-if="selectedRating"
			class="d-flex justify-center rate-meaning"
		>
			<VBtn
				class="rating-button"
				color="primary"
				:aria-labelledby="selectedRating"
				outlined
				text
			>
				{{ selectedRating }}
			</VBtn>
			<span class="ml-1 text-selected-rating">
				/ 10
			</span>
		</div>
		<VRow
			v-else
			class="grid justify-center ma-0"
		>
			<VCol
				v-for="i in 10"
				:key="i"
				class="pa-0 numbers flex-grow-0"
			>
				<VBtn
					class="rating-button"
					color="primary"
					:aria-labelledby="i"
					outlined
					text
					@click="selectRating(i)"
				>
					{{ i }}
				</VBtn>
			</VCol>
		</VRow>
		<div
			v-if="!selectedRating"
			class="mt-3 d-flex justify-space-between rate-meaning"
		>
			<span>
				{{ getLabel(0) }}
			</span>
			<span>
				{{ getLabel(1) }}
			</span>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

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
	export default class NumberPicker extends MixinsDeclaration {

		selectedRating = 0;

		selectRating(rating: number): void {
			this.selectedRating = rating;
			this.$emit(
				'update-result',
				{
					step: this.questionDatas.name,
					result: this.selectedRating
				}
			);
		}
		getLabel(number: number): string {
			return this.questionDatas.label ? this.questionDatas.labels[number] : '';
		}
	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

h6 {
	font-size: 16px;
}
.rating-button {
	border-color: $vd-primary !important;
	min-width: 0 !important;
	width: 20px !important;
}
.selected-rating {
	border: 1px solid $vd-primary;
	padding: 1px 10px;
	border-radius: 3px;
	margin-top: -1px;
}
.rate-meaning {
	min-height: 25px;
}
.text-selected-rating {
	margin-top: 6px;
}
.numbers {
	margin: 1px !important;
}
</style>
