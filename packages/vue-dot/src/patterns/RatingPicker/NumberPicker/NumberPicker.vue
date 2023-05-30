<template>
	<fieldset class="vd-number-picker">
		<VSelect
			v-if="$vuetify.breakpoint.xs"
			:value="value"
			:label="label"
			:disabled="readonly || hasAnswered"
			:items="selectItems"
			hide-details
			outlined
			class="vd-form-input"
			@change="setValue"
		/>

		<template v-else>
			<legend class="text-h6 mb-6">
				{{ label }}
			</legend>

			<div
				v-if="!hasAnswered"
				class="d-inline-block"
			>
				<VRating
					:value="value"
					:length="length"
					:readonly="readonly || hasAnswered"
					class="d-flex flex-wrap mx-n1 max-width-none"
					@input="setValue"
				>
					<template #item="{ index, click }">
						<VBtn
							:aria-label="locales.ariaLabel(index + 1, length)"
							:disabled="readonly"
							x-small
							outlined
							color="primary"
							height="36px"
							class="text-body-2 mx-1 pa-0"
							@click="click"
						>
							{{ index + 1 }}
						</VBtn>
					</template>
				</VRating>

				<div
					v-if="shouldDisplayLabels"
					class="d-flex justify-space-between mt-1"
				>
					<span
						:aria-label="`${locales.ariaLabel(1, length)} ${itemLabels[0]}.`"
						class="text-caption"
						v-text="itemLabels[0]"
					/>

					<span
						:aria-label="`${locales.ariaLabel(length, length)} ${itemLabels[1]}.`"
						class="text-caption"
						v-text="itemLabels[1]"
					/>
				</div>
			</div>

			<p
				v-else
				:aria-label="locales.ariaLabel(value, length)"
				class="mb-0"
			>
				<VBtn
					aria-hidden="true"
					disabled
					x-small
					outlined
					color="primary"
					height="36px"
					class="vd-btn-answer text-body-2 mr-1 pa-0"
				>
					{{ value }}
				</VBtn>

				/ {{ length }}
			</p>
		</template>
	</fieldset>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { RatingMixin } from '../RatingMixin';

	import { locales } from './locales';

	interface SelectItem {
		text: string;
		value: number;
	}

	const Props = Vue.extend({
		props: {
			length: {
				type: Number,
				default: 10
			},
			itemLabels: {
				type: Array as PropType<string[]>,
				default: () => []
			}
		}
	});

	const MixinsDeclaration = mixins(Props, RatingMixin);

	@Component
	export default class NumberPicker extends MixinsDeclaration {
		locales = locales;

		get selectItems(): SelectItem[] {
			return [...Array(this.length)].map((_, index) => ({
				text: `${index + 1}`,
				value: index + 1
			}));
		}

		get shouldDisplayLabels(): boolean {
			return this.itemLabels.length === 2;
		}

		get hasAnswered(): boolean {
			return this.value !== -1;
		}

		setValue(value: number): void {
			this.emitInputEvent(value);
		}
	}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.vd-btn-answer.v-btn.v-btn--disabled {
		color: $vd-primary !important;
	}
</style>
