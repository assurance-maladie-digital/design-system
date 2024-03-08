<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { RatingMixin } from "../RatingMixin";
import { locales } from "./locales";

import { propValidator } from "../../../helpers/propValidator";

import { useDisplay } from 'vuetify';

import {
	mdiEmoticonHappyOutline,
	mdiEmoticonSadOutline,
	mdiEmoticonNeutralOutline,
} from "@mdi/js";

export default defineComponent({
	mixins: [RatingMixin],
	emits: ["update:modelValue"],
	props: {
		length: {
			type: Number,
			default: 3,
			validator: (value: number) =>
				propValidator("length", ["2", "3"], value.toString()),
		},
		itemLabels: {
			type: Array as PropType<string[]>,
			default: () => locales.defaultEmotionLabels,
		},
	},
	data() {
		return {
			sadIcon: mdiEmoticonSadOutline,
			neutralIcon: mdiEmoticonNeutralOutline,
			happyIcon: mdiEmoticonHappyOutline
		}
	},
	computed: {
		btnSize(): string {
			const { name } = useDisplay();
			return name.value === 'xs' ? '70px' : '88px';
		},

		hasAnswered(): boolean {
			return this.modelValue !== -1;
		}
	},
	methods: {
		isActive(index: number): boolean {
			return index === this.modelValue - 1;
		},

		getIcon(index: number): string {
			if (index === 0) {
				return this.sadIcon;
			}

			if (index === 1 && this.length === 3) {
				return this.neutralIcon;
			}

			return this.happyIcon;
		},

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
		},

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
});
</script>

<template>
	<fieldset class="vd-emotion-picker">
		<legend class="text-h6 mb-6">
			{{ label }}
		</legend>

		<VRating
			:model-value="modelValue"
			:length="length"
			:readonly="readonly"
			class="max-width-none mx-n1 mx-sm-n2"
		>
			<template #item="{ index }">
				<VBtn
					:disabled="readonly || hasAnswered"
					:aria-pressed="isActive(index).toString()"
					:class="[
						getColor(index),
						{ 'v-btn--active': isActive(index) },
					]"
					:min-height="btnSize"
					:min-width="btnSize"
					variant="text"
					class="rounded-lg px-1 px-sm-4 mx-1 mx-sm-2"
					@click="emitInputEvent(index)"
				>
					<VIcon x-large color="currentColor" class="pa-0">
						{{ getIcon(index) }}
					</VIcon>

					<span
						v-if="getEmotionLabel(index)"
						:class="{ 'text-secondary': !isActive(index) }"
						class="text-subtitle-2 mt-1"
					>
						{{ getEmotionLabel(index) }}
					</span>
				</VBtn>
			</template>
		</VRating>
	</fieldset>
</template>

<style lang="scss" scoped>
@import "@cnamts/design-tokens/dist/tokens";

.v-rating .v-btn {
	transition: 0.2s;
	border: 1px solid transparent;

	:deep(.v-btn__content) {
		flex-direction: column;
	}

	&.sad {
		color: $vd-orange-darken-20 !important;
	}

	&.neutral {
		color: $vd-yellow-darken-20 !important;
	}

	&.happy {
		color: $vd-turquoise-darken-20 !important;
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
			background: $vd-turquoise-lighten-90;
		}
	}
}
</style>
