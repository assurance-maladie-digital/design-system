<template>
	<div class="vd-stars-picker">
		<div class="d-flex justify-center">
			<H6
				class="mb-6"
			>
				{{ questionDatas.question }}
			</H6>
		</div>
		<div
			v-if="!selectedRating"
			class="d-flex justify-space-between"
		>
			<VIcon
				v-for="i in 5"
				:key="i"
				x-large
				class="mt-2"
				:color="isHover(i) ? 'am-blue-lighten-60' : 'am-blue-darken-20'"
				:aria-label="i"
				@click="selectStar(i)"
				@mouseover="isHoverRating = i"
				@mouseout="isHoverRating = 0"
			>
				{{ outlineStarIcon }}
			</VIcon>
		</div>
		<div
			v-else
			class="d-flex"
			:class="selectedRating < 5 ? 'justify-center' : 'justify-space-between'"
		>
			<VIcon
				v-for="i in selectedRating"
				:key="i"
				x-large
				color="primary"
				class="mt-2"
				:class="selectedRating < 5 ? 'star-icon' : ''"
				:aria-label="i"
			>
				{{ starIcon }}
			</VIcon>
		</div>
		<div
			v-if="!isMobile"
			class="mt-3 d-flex justify-center rate-meaning"
		>
			<span
				:class="selectedRating ? 'primary--text font-weight-bold' : ''"
			>
				{{ selectedRating ? rateMeaning(selectedRating) : rateMeaning(isHoverRating) }}
			</span>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiStarOutline, mdiStar } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			questionDatas: {
				type: Object,
				required: true
			},
			isValidated: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class StarsPicker extends MixinsDeclaration {

		//icons
		outlineStarIcon = mdiStarOutline;
		starIcon = mdiStar;
		selectedRating = 0;
		isHoverRating = 0;

		get isMobile(): boolean {
			return this.$vuetify.breakpoint.smAndDown;
		}

		selectStar(rating: number): void {
			if (this.isValidated) {
				return;
			} else {
				this.selectedRating = rating;
				this.$emit(
					'update-result',
					{
						step: this.questionDatas.name,
						result: this.selectedRating
					}
				);
			}
		}

		isHover(rating: number): boolean {
			return this.isHoverRating >= rating && !this.selectedRating ? true : false;
		}

		rateMeaning(rating: number): string {
			if (rating === 1) {
				return 'Pas du tout';
			} else if (rating === 2) {
				return 'Plutôt déçu';
			} else if (rating === 3) {
				return 'Correct';
			} else if (rating === 4) {
				return 'Plutôt satisfait';
			} else if (rating === 5) {
				return 'Excellent';
			} else {
				return '';
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '@cnamts/design-tokens/dist/tokens';

h6 {
	font-size: 16px
}
.rate-meaning {
	min-height: 25px;
}
.star-icon {
	margin: 0 24px;
}
</style>
