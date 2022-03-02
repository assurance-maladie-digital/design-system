<template>
	<div
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
				<!-- The title slot can be used to change the title level -->
				<slot name="title">
					<h4
						v-if="listTitle"
						:class="titleClass"
					>
						{{ listTitle }}
					</h4>
				</slot>

				<ul
					v-if="items.length"
					class="vd-data-list-field pl-0"
				>
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

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from './locales';
	import { DataListIcons, DataList as IDataList, ItemClass } from './types';

	import DataListItem from './DataListItem';
	import DataListLoading from './DataListLoading';

	import { Widthable } from '../../mixins/widthable';

	const Props = Vue.extend({
		props: {
			items: {
				type: Array as PropType<IDataList>,
				required: true
			},
			icons: {
				type: Object as PropType<DataListIcons | undefined>,
				default: undefined
			},
			listTitle: {
				type: String,
				default: undefined
			},
			titleClass: {
				type: String,
				default: 'text-subtitle-1 font-weight-bold mb-3'
			},
			row: {
				type: Boolean,
				default: false
			},
			placeholder: {
				type: String,
				default: locales.placeholder
			},
			loading: {
				type: Boolean,
				default: false
			},
			itemsNumberLoading: {
				type: Number,
				default: 1
			},
			headingLoading: {
				type: Boolean,
				default: false
			},
			renderHtmlValue: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, Widthable);

	/** DataList is a component that displays list key/value items */
	@Component({
		components: {
			DataListItem,
			DataListLoading
		}
	})
	export default class DataList extends MixinsDeclaration {
		getIcon(iconName?: string): string | null {
			if (!iconName || !this.icons) {
				return null;
			}

			return this.icons[iconName];
		}

		getItemClass(index: number, itemClass?: string): ItemClass {
			const margin = {
				'mb-2': index !== this.items.length - 1
			};

			return [
				margin,
				itemClass
			];
		}
	}
</script>

<style lang="scss" scoped>
	.vd-data-list-field {
		list-style: none;
	}
</style>
