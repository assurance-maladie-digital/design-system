<template>
	<div
		v-if="items.length"
		:class="{
			'flex-column': showOverflowChip,
		}"
		class="vd-chip-list d-flex flex-wrap max-width-none mx-n1 mt-n1"
	>
		<div class="d-flex flex-wrap align-center">
			<VChip
				v-for="(item, index) in filteredItems"
				:key="index"
				:close-icon="deleteIcon"
				:close-label="locales.closeBtnLabel"
				color="cyan-darken-40"
				text-color="white"
				closable
				size="small"
				variant="elevated"
				class="ma-1"
				@click:close="emitRemoveEvent(item)"
			>
				{{ item.text }}
			</VChip>
		</div>

		<div class="ml-1">
			<VChip
				v-if="showOverflowChip"
				color="cyan-lighten-90"
				text-color="cyan-darken-40"
				size="small"
				class="vd-overflow-chip ma-1"
			>
				{{ overflowText }}
			</VChip>

			<VBtn
				color="primary"
				size="small"
				variant="text"
				class="vd-overflow-btn px-1 ml-0 my-1"
				@click="emitResetEvent"
			>
				{{ locales.reset }}
			</VBtn>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { locales } from "./locales";
import { ChipItem } from "./types";

import { mdiChevronUp, mdiWindowClose } from "@mdi/js";

const Props = {
	props: {
		items: {
			type: Array as PropType<ChipItem[]>,
			default: () => [],
		},
		overflowLimit: {
			type: Number,
			default: 4,
		},
	},
};

export default defineComponent({
	props: {
		...Props.props,
	},
	data() {
		return {
			locales,
			deleteIcon: mdiWindowClose,
			upIcon: mdiChevronUp,
		};
	},
	computed: {
		showOverflowChip(): boolean {
			return this.items.length >= this.overflowLimit;
		},
		overflowText(): string {
			return `+${this.items.length - this.overflowLimit + 1}`;
		},
		filteredItems(): ChipItem[] {
			return this.items.slice(0, this.overflowLimit - 1);
		},
	},
	methods: {
		emitRemoveEvent(item: ChipItem): void {
			this.$emit("remove", item);
		},
		emitResetEvent(): void {
			this.$emit("reset");
		},
	},
});
</script>

<style lang="scss" scoped>
@import "@cnamts/design-tokens/dist/tokens";
.vd-overflow-chip {
	border: 1px solid $vd-cyan-lighten-60 !important;
}
.vd-overflow-btn {
	// Disable hover state
	&.theme--light::before {
		content: none;
	}
	&:focus-visible {
		outline: 2px solid;
	}
}
.v-chip--variant-elevated {
	box-shadow: none;
}
</style>
