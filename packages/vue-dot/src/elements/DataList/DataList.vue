<template>
	<div class="vd-data-list">
		<VFadeTransition mode="out-in">
			<!-- The DataList loading skeleton -->
			<DataListLoading
				v-if="loading"
				:items-number="itemsNumberLoading"
				:heading="headingLoading"
				:title-class="titleClass"
				:flex="flex"
				:row="row"
				:item-width="itemWidth"
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
					:class="listClass"
					:style="{ minWidth }"
				>
					<li
						v-for="(item, index) in items"
						:key="index"
						class="vd-data-list-row mb-2"
					>
						<DataListItem
							v-if="item.key"
							:label="item.key"
							:value="item.value"
							:action="item.action"
							:chip="item.chip"
							:icon="getIcon(item.icon)"
							:placeholder="placeholder"
							:vuetify-options="item.options"
							:style="{ width: itemWidth }"
							class="vd-data-list-item body-1"
							@click:action="$emit('click:item-action', index)"
						/>
					</li>
				</ul>
			</div>
		</VFadeTransition>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from './locales';
	import { IDataListItem, DataListIcons } from './types';

	import DataListItem from './DataListItem';
	import DataListLoading from './DataListLoading';

	const Props = Vue.extend({
		props: {
			/** The items to display */
			items: {
				type: Array as PropType<DataListItem[]>,
				required: true
			},
			icons: {
				type: Object as PropType<DataListIcons | undefined>,
				default: undefined
			},
			// Title options
			listTitle: {
				type: String,
				default: undefined
			},
			titleClass: {
				type: String,
				default: 'mb-3 headline'
			},
			row: {
				type: Boolean,
				default: false
			},
			flex: {
				type: Boolean,
				default: false
			},
			/** The text to display as fallback */
			placeholder: {
				type: String,
				default: locales.placeholder
			},
			/** The list min-width */
			minWidth: {
				type: String,
				default: undefined
			},
			/** The item width */
			itemWidth: {
				type: String,
				default: '200px'
			},
			/** Loading mode */
			loading: {
				type: Boolean,
				default: false
			},
			/** The number of items to display during loading */
			itemsNumberLoading: {
				type: Number,
				default: 1
			},
			/** Display the heading while loading */
			headingLoading: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/**
	 * DataList is a component that displays list of
	 * items containing key/value
	 */
	@Component({
		components: {
			DataListItem,
			DataListLoading
		}
	})
	export default class DataList extends MixinsDeclaration {
		get listClass() {
			return {
				'vd-column': !this.row || this.flex,
				'vd-flex': this.flex
			};
		}

		getIcon(icon?: string) {
			if (!icon || !this.icons) {
				return null;
			}

			return this.icons[icon];
		}
	}
</script>

<style lang="scss" scoped>
	.vd-data-list-field {
		list-style: none;

		.vd-data-list-row {
			display: flex;
			flex-wrap: wrap;
		}

		// Column
		&.vd-column .vd-data-list-row {
			flex-direction: column;
		}

		&.vd-flex {
			display: flex;
			flex-wrap: wrap;
		}

		// Do not apply on column mode
		&:not(.vd-column) {
			// Default separator
			// .vd-key::after {
			// 	content: " :";
			// }

			.vd-value {
				align-self: flex-end;
			}
		}
	}
</style>
