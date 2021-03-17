<template>
	<div class="vd-data-list-group d-flex flex-wrap max-width-none ma-n4">
		<DataList
			v-for="(dataList, index) in items"
			:key="'vd-data-list-' + index"
			:loading="loading"
			:render-html-value="renderHtmlValue"
			:list-title="dataList.title"
			:items="dataList.items"
			:items-number-loading="dataList.itemsNumberLoading"
			:heading-loading="dataList.headingLoading"
			:width="itemWidth"
			:icons="icons"
			class="ma-4"
			@click:item-action="emitItemAction(index, $event)"
		/>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { DataListGroupItems, DataListActionEvent } from './types';

	const Props = Vue.extend({
		props: {
			items: {
				type: Array as PropType<DataListGroupItems>,
				required: true
			},
			itemWidth: {
				type: String,
				default: '200px'
			},
			loading: {
				type: Boolean,
				default: false
			},
			icons: {
				type: Object,
				default: undefined
			},
			renderHtmlValue: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DataListGroup extends MixinsDeclaration {
		/**
		 * Emit the dataList item object when user clicked on the corresponding action
		 *
		 * @param {number} dataListIndex The index of the selected data list
		 * @param {number} itemIndex The index of the item into the selected data list
		 */
		emitItemAction(dataListIndex: number, itemIndex: number): void {
			this.$emit('click:list-item', { dataListIndex, itemIndex } as DataListActionEvent);
		}
	}
</script>
