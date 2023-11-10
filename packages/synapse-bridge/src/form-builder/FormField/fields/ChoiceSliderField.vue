<script lang="ts">
import { defineComponent } from "vue";

import ChoiceComponent from "../mixins/choiceComponent";
import type { FieldValue } from "../types";

import { convertToUnit } from "@/helpers/convertToUnit";
import type { IndexedObject } from "@/types";

type ThumbLabelValue = boolean | "always" | undefined;

export default defineComponent({
	mixins: [ChoiceComponent],
	watch: {
		modelValue: {
			handler(value: FieldValue): void {
				if (value === null) {
					this.valueUpdated(0);
				}
			},
			immediate: true,
		},
	},
	computed: {
		thumbLabel(): ThumbLabelValue {
			return this.options?.thumbLabel as ThumbLabelValue;
		},

		thumbSizePlaceholder(): string {
			let thumbSize = this.options?.thumbSize as number | string;

			if (this.isThumbLabel) {
				thumbSize = thumbSize || 32;
			}

			if (typeof thumbSize === 'string') {
				thumbSize = parseInt(thumbSize);
			}

			return convertToUnit(thumbSize) as string;
		},

		sliderStyles(): IndexedObject {
			return {
				paddingTop: this.thumbSizePlaceholder
			};
		},

		tickLabels(): Record<number, string> {
			return this.isThumbLabel ? {} :
				Object.assign({}, this.labels);
		},

		isThumbLabel(): boolean {
			return Boolean(this.options?.thumbLabel);
		},

		labels(): string[] {
			if (this.items && this.options) {
				return this.items.map((item) => (item.title || item.text) as string);
			}

			return [];
		}
	},
	methods: {
		getIndex(value: unknown): number {
			if (!this.items) {
				return 0;
			}
			const index = this.items.findIndex((item) => item.value === value);
			return index !== -1 ? index : 0;
		},

		valueUpdated(index: number): void {
			let fieldValue = null;

			if (this.items) {
				fieldValue = this.items[index].value;
			}

			this.emitChangeEvent(fieldValue);
		}
	}
});
</script>

<template>
	<VSlider
		v-bind="options"
		:model-value="getIndex(choiceFieldValue)"
		:thumb-label="thumbLabel"
		show-ticks="always"
		:ticks="tickLabels"
		:max="items.length - 1"
		step="1"
		:class="{ 'thumb-label': isThumbLabel }"
		:style="sliderStyles"
		:error-messages="errorMessages"
		color="primary"
		track-color="grey"
		class="vd-choice-slider-field vd-form-input-xl"
		@update:modelValue="valueUpdated"
	>
		<template v-if="thumbLabel" #thumb-label="{ modelValue }">
			{{ labels[modelValue] }}
		</template>
	</VSlider>
</template>

<style lang="scss" scoped>
@import "@cnamts/design-tokens/dist/tokens";

// Increase min-height when using tick labels with hide-details
// to make up for the additional space
.vd-choice-slider-field:not(.thumb-label) {
	&.v-input--hide-details {
		min-height: 40px;
	}
}

.vd-choice-slider-field :deep() {
	.v-input__control {
		width: auto;
	}

	.v-slider__ticks-container--always-show .v-slider__tick {
		border-radius: 50%;
		background: #bdbdbd;

		&.v-slider__tick--filled {
			background: $vd-primary !important;
		}
	}

	.v-slider-thumb__label {
		background: $vd-primary;
		color: #fff;
		text-wrap: nowrap;

		&::before {
			color: $vd-primary;
		}
	}

	&.theme--dark {
		.v-slider__ticks-container--always-show .v-slider__tick {
			background: #fff;
		}
	}
}
</style>
