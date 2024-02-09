<script lang="ts">
import type { PropType } from "vue";

import { defineComponent } from "vue";

import type { DataListIcons } from "@/elements/DataList/types";
import type { DataListGroupItems, DataListActionEvent } from "./types";

import DataList from "@/elements/DataList/DataList.vue";

export default defineComponent({
	components: {
		DataList,
	},
	emits: ['click:list-item'],
	props: {
		items: {
			type: Array as PropType<DataListGroupItems>,
			required: true,
		},
		icons: {
			type: Object as PropType<DataListIcons | undefined>,
			default: undefined,
		},
		itemWidth: {
			type: String,
			default: "200px",
		},
		loading: {
			type: Boolean,
			default: false,
		},
		renderHtmlValue: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		emitItemAction(dataListIndex: number, itemIndex: number): void {
			const eventValue: DataListActionEvent = {
				dataListIndex,
				itemIndex
			};

			this.$emit('click:list-item', eventValue);
		}
	},
});
</script>

<template>
	<div class="vd-data-list-group d-flex flex-wrap max-width-none ma-n4">
		<DataList
			v-for="(dataList, index) in items"
			:key="`vd-data-list-${index}`"
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
