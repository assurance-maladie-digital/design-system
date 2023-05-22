<template>
	<div class="vd-emotion-picker">
		<div class="text-h6 mb-6">
			{{ label }}
		</div>

		<VRating
			:value="value"
			:length="length"
			:readonly="readonly"
			large
			class="d-flex flex-wrap max-width-none mx-n1 mx-sm-n2"
			@input="emitInputEvent"
		>
			<template #item="{ index, click }">
				<label
					class="mx-1 mx-sm-2 rounded-lg"
					@keydown.enter="click"
					@click="click"
				>
					<input
						type="radio"
						class="d-none"
						:tabindex="(uniqueId * 100) + index + 1"
						:name="'emotion-' + index"
						:value="index + 1"
					>
					<VBtn
						:disabled="readonly"
						:class="[
							getColor(index),
							{ 'v-btn--active': isActive(index) }
						]"
						:min-height="btnSize"
						:min-width="btnSize"
						:aria-label="getEmotionLabel(index)"
						text
						class="rounded-lg px-1 px-sm-4"
					>
						<VIcon
							x-large
							color="currentColor"
							class="pa-0"
						>
							{{ getIcon(index) }}
						</VIcon>

						<span
							v-if="getEmotionLabel(index)"
							:class="{ 'text--secondary': !isActive(index) }"
							class="text-subtitle-2 mt-1"
						>
							{{ getEmotionLabel(index) }}
						</span>
					</VBtn>
				</label>
			</template>
		</VRating>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RatingMixin } from '../RatingMixin';
	import { locales } from './locales';

	import { propValidator } from '../../../helpers/propValidator';

	import {
		mdiEmoticonHappyOutline,
		mdiEmoticonSadOutline,
		mdiEmoticonNeutralOutline
	} from '@mdi/js';

	const Props = Vue.extend({
		props: {
			length: {
				type: Number,
				default: 3,
				validator: (value: number) => propValidator('length', ['2', '3'], value.toString())
			},
			itemLabels: {
				type: Array as PropType<string[]>,
				default: () => locales.defaultEmotionLabels
			}
		}
	});

	const MixinsDeclaration = mixins(Props, RatingMixin);

	@Component
	export default class EmotionPicker extends MixinsDeclaration {
		sadIcon = mdiEmoticonSadOutline;
		neutralIcon = mdiEmoticonNeutralOutline;
		happyIcon = mdiEmoticonHappyOutline;
		uniqueId = Math.floor(Math.random() * 10000);

		get btnSize(): string {
			return this.$vuetify.breakpoint.xs ? '70px' : '88px';
		}

		isActive(index: number): boolean {
			return index === this.value - 1;
		}

		getIcon(index: number): string {
			if (index === 0) {
				return this.sadIcon;
			}

			if (index === 1 && this.length === 3) {
				return this.neutralIcon;
			}

			return this.happyIcon;
		}

		getColor(index: number): string {
			const colors = [
				'sad',
				'neutral',
				'happy'
			];

			if (this.length === 2) {
				const filteredColors = colors.filter((item) => item !== 'neutral');

				return filteredColors[index];
			}

			return colors[index];
		}

		getEmotionLabel(value: number): string {
			if (value === -1) {
				return '';
			}

			if (this.length === 2) {
				const filteredLabels = this.itemLabels.filter((_, index) => index !== 1);

				return filteredLabels[value];
			}

			return this.itemLabels[value];
		}
	}
</script>

<style lang="scss">
	@import '@cnamts/design-tokens/dist/tokens';

	.vd-emotion-picker {
		.v-rating .v-btn {
			transition: 0.2s;
			border: 1px solid transparent;

			.v-btn__content {
				flex-direction: column;
			}

			&.sad {
				color: $vd-orange-darken-20 !important;
			}

			&.neutral {
				color: $vd-yellow-darken-20 !important;
			}

			&.happy {
				color: $vd-success !important;
			}

			&::before {
				opacity: 1;
				transition: 0.2s;
				background: transparent;
			}

			&--active.v-btn--disabled .v-icon {
				color: currentColor !important;
			}

			&:focus,
			&--active {
				border-color: currentColor !important;
			}

			&:hover,
			&:focus,
			&--active {
				&.sad::before {
					background: $vd-orange-lighten-90;
				}

				&.neutral::before {
					background: $vd-yellow-lighten-90;
				}

				&.happy::before {
					background: $vd-green-lighten-90;
				}
			}
		}
	}
</style>
