<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";
import { RatingMixin } from "../RatingMixin";
import { locales } from "./locales";
interface SelectItem {
	title: string;
	value: number;
}
export default defineComponent({
	mixins: [RatingMixin],
	emits: ["update:modelValue"],
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
	data() {
		return {
			locales,
		};
	},
	computed: {
		selectItems(): SelectItem[] {
			return [...Array(this.length)].map((_, index) => ({
				title: `${index + 1}`,
				value: index + 1
			}));
		},
		shouldDisplayLabels(): boolean {
			return this.itemLabels.length === 2;
		},
		hasAnswered(): boolean {
			return this.modelValue !== -1;
		}
	},
	methods: {
		setValue(value: string | number): void {
			this.emitInputEvent(value);
		}
	}
});
</script>

<template>
	<fieldset class="vd-number-picker">
		<VSelect
			v-if="$vuetify.display.xs"
			:modelValue="modelValue === -1 ? null : modelValue"
			:label="label ?? ''"
			:disabled="readonly || hasAnswered"
			:items="selectItems"
			hide-details
			variant="outlined"
			class="vd-form-input"
			@update:modelValue="setValue"
		/>
		<template v-else>
			<legend class="text-h6 mb-6">
				<slot name="label">
					{{ label }}
				</slot>
			</legend>
			<div v-if="!hasAnswered" class="d-inline-block">
				<VRating
					:modelValue="modelValue"
					:length="length"
					:readonly="readonly || hasAnswered"
					class="d-flex flex-wrap max-width-none"
					@update:modelValue="setValue"
				>
					<template #item="{ index }">
						<VBtn
							:aria-label="locales.ariaLabel(index + 1, length)"
							:disabled="readonly"
							size="x-small"
							variant="outlined"
							color="primary"
							height="36px"
							class="text-body-2 pa-0 mr-2"
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
						class="text-caption mr-2"
						v-text="itemLabels[1]"
					/>
				</div>
			</div>
			<p
				v-else
				:aria-label="locales.ariaLabel(modelValue, length)"
				class="mb-0 d-flex align-center"
			>
				<VBtn
					aria-hidden="true"
					:disabled="true"
					size="x-small"
					variant="outlined"
					color="primary"
					height="36px"
					class="vd-btn-answer text-body-2 mr-1 pa-0"
				>
					{{ modelValue }}
				</VBtn>
				/ {{ length }}
			</p>
		</template>
	</fieldset>
</template>
<style lang="scss" scoped>
@import "@cnamts/design-tokens/dist/tokens";
.vd-number-picker {
	border: 0;
}
.vd-btn-answer.v-btn.v-btn--disabled {
	opacity: 1;
}
</style>
