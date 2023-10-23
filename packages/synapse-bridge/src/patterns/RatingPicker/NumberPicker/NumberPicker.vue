<template>
	<fieldset class="vd-number-picker">
		<VSelect
			v-if="$vuetify.breakpoint.xs"
			:model-value="value"
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

			<div v-if="!hasAnswered" class="d-inline-block">
				<VRating
					:model-value="value"
					:length="length"
					:readonly="readonly || hasAnswered"
					class="d-flex flex-wrap mx-n1 max-width-none"
					@update:model-value="setValue"
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
						:aria-label="`${locales.ariaLabel(1, length)} ${
							itemLabels[0]
						}.`"
						class="text-caption"
						v-text="itemLabels[0]"
					/>

					<span
						:aria-label="`${locales.ariaLabel(length, length)} ${
							itemLabels[1]
						}.`"
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
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { RatingMixin } from "../RatingMixin";

import { locales } from "./locales";

interface SelectItem {
	text: string;
	value: number;
}

const Props = {
	props: {
		length: {
			type: Number,
			default: 10,
		},
		itemLabels: {
			type: Array as PropType<string[]>,
			default: () => [],
		},
	},
};

export default defineComponent({
	mixins: [Props, RatingMixin],
	emits: ["update:modelValue"],
	data() {
		return {
			locales,
		};
	},
	computed: {
		selectItems(): SelectItem[] {
			return [...Array(this.length)].map((_, index) => ({
				text: `${index + 1}`,
				value: index + 1
			}));
		},

		shouldDisplayLabels(): boolean {
			return this.itemLabels.length === 2;
		},

		hasAnswered(): boolean {
			return this.value !== -1;
		}
	},
	methods: {
		setValue(value: number): void {
			this.emitInputEvent(value);
		}
	}
});
</script>

<style lang="scss" scoped>
@import "@cnamts/design-tokens/dist/tokens";

.vd-btn-answer.v-btn.v-btn--disabled {
	color: $vd-primary !important;
}
</style>
