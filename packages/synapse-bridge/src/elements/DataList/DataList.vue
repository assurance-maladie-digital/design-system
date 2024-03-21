<script lang="ts">
	import { defineComponent } from 'vue'
	import type { PropType } from 'vue'

	import { locales } from './locales'
	import { DataListIcons, DataListItem as DataListItemInterface, ItemClass } from './types'

	import DataListItem from './DataListItem'
	import DataListLoading from './DataListLoading'

	import { Widthable } from '@/mixins/widthable'

	export default defineComponent({
		components: {
			DataListItem,
			DataListLoading,
		},
		mixins: [Widthable],
		props: {
			items: {
				type: Array as PropType<DataListItemInterface[]>,
				required: true,
			},
			icons: {
				type: Object as PropType<DataListIcons | undefined>,
				default: undefined,
			},
			listTitle: {
				type: String,
				default: undefined,
			},
			titleClass: {
				type: String,
				default: 'text-subtitle-1 font-weight-bold mb-3',
			},
			row: {
				type: Boolean,
				default: false,
			},
			placeholder: {
				type: String,
				default: undefined,
			},
			loading: {
				type: Boolean,
				default: false,
			},
			itemsNumberLoading: {
				type: Number,
				default: 1,
			},
			headingLoading: {
				type: Boolean,
				default: false,
			},
			renderHtmlValue: {
				type: Boolean,
				default: false,
			},
		},
		computed: {
			label(): string | undefined {
				return this.loading ? locales.loadingLabel : undefined
			},
		},
		methods: {
			getIcon(iconName?: string): string | undefined {
				if (!iconName || !this.icons) {
					return
				}
				return this.icons[iconName]
			},
			getItemClass(index: number, itemClass?: string): ItemClass {
				const margin = {
					'mb-2': index !== this.items.length - 1,
				}
				return [margin, itemClass]
			},
		},
	})
</script>

<template>
	<div
		:aria-label="label"
		:style="widthStyles"
		class="vd-data-list"
	>
		<VFadeTransition mode="out-in">
			<DataListLoading
				v-if="loading"
				:items-number="itemsNumberLoading"
				:heading="headingLoading"
				:title-class="titleClass"
				:row="row"
			/>

			<div v-else>
				<slot name="title">
					<h4
						v-if="listTitle"
						:class="titleClass"
					>
						{{ listTitle }}
					</h4>
				</slot>

				<ul v-if="items.length">
					<DataListItem
						v-for="(item, index) in items"
						:key="index"
						:label="item.key"
						:value="item.value"
						:action="item.action"
						:chip="item.chip"
						:row="row"
						:render-html-value="renderHtmlValue"
						:icon="getIcon(item.icon)"
						:placeholder="placeholder"
						:vuetify-options="item.options"
						:class="getItemClass(index, item.class)"
						class="vd-data-list-item text-body-1"
						@click:action="$emit('click:item-action', index)"
					/>
				</ul>
			</div>
		</VFadeTransition>
	</div>
</template>

<style lang="scss" scoped>
	:deep(ul) {
		list-style: none;
	}
</style>
