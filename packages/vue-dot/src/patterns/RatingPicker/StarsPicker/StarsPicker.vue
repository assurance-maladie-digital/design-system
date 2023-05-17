<template>
	<div class="vd-stars-picker">
		<div class="text-h6 mb-6">
			{{ label }}
		</div>

		<VRating
			:value="value"
			:length="length"
			:readonly="readonly"
			class="d-flex flex-wrap max-width-none"
			@input="emitInputEvent"
		>
			<template #item="{ index, click }">
				<VRadioGroup>
					<VRadio
						:key="index"
						:value="index"
						hide-details
						class="pr-2"
						@click="click"
					>
						<template #label>
							<VBtn
								:disabled="readonly"
								:class="{
									'v-btn--active': isActive(index),
									'v-btn--before-active': isBeforeActive(index)
								}"
								icon
								@mouseover="hoverValue = index"
								@focus="hoverValue = index"
								@mouseleave="hoverValue = -1"
								@focusout="hoverValue = -1"
							>
								<VIcon
									x-large
									color="primary"
									class="pa-1"
									:style="{ opacity: isAfterHover(index) ? 0.5 : 1 }"
								>
									{{ starOutlineIcon }}
								</VIcon>
							</VBtn>
						</template>
					</VRadio>
				</VRadioGroup>
			</template>
		</VRating>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RatingMixin } from '../RatingMixin';

	import { mdiStarOutline } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			length: {
				type: Number,
				default: 5
			}
		}
	});

	const MixinsDeclaration = mixins(Props, RatingMixin);

	@Component
	export default class StarsPicker extends MixinsDeclaration {
		starOutlineIcon = mdiStarOutline;
		hoverValue = -1;

		isActive(index: number): boolean {
			return index === this.value - 1;
		}
		isBeforeActive(index: number): boolean {
			return index < this.value - 1;
		}
		isAfterHover(index: number): boolean {
			return index > this.hoverValue;
		}
	}
</script>

<style lang="scss">
@import '@cnamts/design-tokens/dist/tokens';

.vd-stars-picker {
	.v-rating {
		height: auto !important;
		width: auto !important;
		padding: 0;
		.v-btn {
			color: $vd-primary !important;
			&--active.v-btn--disabled .v-icon {
				color: $vd-primary !important;
				opacity: 1 !important;
			}

			&:focus,
			&--active {
				color: $vd-primary !important;
			}
		}
		.v-btn.v-btn--disabled.v-btn--before-active {
			color: $vd-primary !important;
			.v-icon {
				color: $vd-primary !important;
				opacity: 1 !important;
			}
		}
		.v-btn.v-btn--after-hover .v-icon {
			opacity: 0.5;
		}
	}
	.v-input--selection-controls {
		margin: 0;
		padding: 0;
	}
	.v-input--selection-controls__input {
		display: none !important;
	}
	.v-input__slot {
		margin-bottom: 0;
	}
	.v-messages {
		display: none;
	}
}
</style>
