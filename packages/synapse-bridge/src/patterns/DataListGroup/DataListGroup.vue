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
import { defineComponent, PropType } from "vue";

import { DataListIcons } from "../../elements/DataList/types";

import { DataListGroupItems, DataListActionEvent } from "./types";

const Props = {
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
};

export default defineComponent({
	mixins: [Props],
	props: {
		...Props.props,
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
