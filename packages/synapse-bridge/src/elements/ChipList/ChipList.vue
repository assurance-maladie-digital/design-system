<script lang="ts">
	import { defineComponent } from 'vue'
	import type { PropType } from 'vue'

	import { locales } from './locales'
	import { ChipItem } from './types'

	import { mdiChevronUp, mdiWindowClose } from '@mdi/js'

	export default defineComponent({
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
		data() {
			return {
				locales,
				deleteIcon: mdiWindowClose,
				upIcon: mdiChevronUp,
			}
		},
		computed: {
			showOverflowChip(): boolean {
				return this.items.length >= this.overflowLimit
			},
			overflowText(): string {
				return `+${this.items.length - this.overflowLimit + 1}`
			},
			filteredItems(): ChipItem[] {
				return this.items.slice(0, this.overflowLimit - 1)
			},
		},
		methods: {
			emitRemoveEvent(item: ChipItem): void {
				this.$emit('remove', item)
			},
			emitResetEvent(): void {
				this.$emit('reset')
			},
		},
	})
</script>

<template>
	<div
		v-if="items.length"
		:class="{
			'flex-column': showOverflowChip,
		}"
		class="vd-chip-list d-flex flex-wrap max-width-none mx-n1 mt-n1"
	>
		<div class="d-flex flex-wrap align-center mr-1">
			<VChip
				v-for="item in filteredItems"
				:key="item.text"
				:close-icon="deleteIcon"
				:close-label="locales.closeBtnLabel"
				color="cyan-darken-40"
				text-color="white"
				closable
				size="small"
				variant="flat"
				class="ma-1"
				@click:close="emitRemoveEvent(item)"
			>
				{{ item.text }}
			</VChip>
		</div>

		<div>
			<VChip
				v-if="showOverflowChip"
				color="cyan-lighten-90"
				size="small"
				variant="flat"
				class="vd-overflow-chip text-cyan-darken-40 ma-1"
			>
				{{ overflowText }}
			</VChip>

			<VBtn
				data-test-id="reset-btn"
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

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	.vd-overflow-chip {
		border: 1px solid $vd-cyan-lighten-90 !important;
	}

	// Disable overflow button hover state
	.vd-overflow-btn :deep(.v-btn__overlay) {
		display: none;
	}
</style>
