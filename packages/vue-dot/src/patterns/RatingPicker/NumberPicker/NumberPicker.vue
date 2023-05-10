<template>
	<div class="vd-number-picker">
		<VSelect
			v-if="$vuetify.breakpoint.xs"
			:value="value"
			:label="label"
			:disabled="readonlyInternal"
			:items="selectItems"
			hide-details
			outlined
			class="vd-form-input"
			@change="setValue"
		/>

		<template v-else>
			<div class="text-h6 mb-6">
				{{ label }}
			</div>

			<div
				v-if="!readonlyInternal"
				class="d-inline-block"
			>
				<VRating
					:value="value"
					:length="length"
					:readonly="readonlyInternal"
					color="primary"
					background-color="primary lighten-4"
					class="d-flex flex-wrap mx-n1 max-width-none"
					@input="setValue"
				>
					<template #item="{ index, click }">
						<VRadioGroup>
							<VRadio
								:key="index + 1"
								:value="index + 1"
								hide-details
								@click="click"
							>
								<template #label>
									<VBtn
										:aria-label="locales.ariaLabel(index + 1, length)"
										x-small
										outlined
										color="primary"
										height="36px"
										class="text-body-2 mx-1 pa-0"
									>
										{{ index + 1 }}
									</VBtn>
								</template>
							</VRadio>
						</VRadioGroup>
					</template>
				</VRating>

				<div
					v-if="shouldDisplayLabels"
					class="d-flex justify-space-between mt-1"
				>
					<span
						class="text-caption"
						v-text="itemLabels[0]"
					/>

					<span
						class="text-caption"
						v-text="itemLabels[1]"
					/>
				</div>
			</div>

			<div v-else>
				<VBtn
					outlined
					x-small
					disabled
					color="primary"
					min-height="36px"
					class="text-body-2 mr-1 pa-0"
				>
					{{ value }}
				</VBtn>

				/ {{ length }}
			</div>
		</template>
	</div>
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

	@Component<NumberPicker>({
		watch: {
			readonly: {
				handler(value: boolean): void {
					this.readonlyInternal = value;
				},
				immediate: true
			}
		}
	})
	export default class NumberPicker extends MixinsDeclaration {
		locales = locales;

		readonlyInternal = false;

		get selectItems(): SelectItem[] {
			return [...Array(this.length)].map((_, index) => ({
				text: `${index + 1}`,
				value: index + 1
			}));
		}

		get shouldDisplayLabels(): boolean {
			return this.itemLabels.length === 2;
		}

		setValue(value: number): void {
			this.readonlyInternal = true;
			this.emitInputEvent(value);
		}
	}
</script>

<style lang="scss">
	@import '@cnamts/design-tokens/dist/tokens';

	.vd-number-picker {
		.theme--light.v-btn.v-btn--disabled {
			color: $vd-primary !important;
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
