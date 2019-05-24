<template>
	<div class="vd-data-list">
		<!-- The title slot can be used to change the title level -->
		<slot name="title">
			<h4 :class="titleClass">
				{{ listTitle }}
			</h4>
		</slot>

		<!-- Description list -->
		<dl
			v-if="list.length"
			:class="{
				'vd-column': column || $vuetify.breakpoint.xs || flex,
				'vd-flex': flex
			}"
			:style="{
				minWidth
			}"
			class="vd-field"
		>
			<div
				v-for="(item, index) in list"
				:key="index"
				class="vd-row mb-2"
			>
				<!-- Key (label) -->
				<dt
					v-if="item.key"
					:style="{
						width,
						color: labelColor
					}"
					class="vd-key body-1"
				>
					{{ item.key }}
				</dt>

				<!-- Value -->
				<dd
					:style="{
						color: valueColor
					}"
					class="vd-value body-1"
				>
					<!-- Show value or fallback to placeholder -->
					{{ item.value || placeholder }}
				</dd>
			</div>
		</dl>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			/** The list to display */
			list: {
				type: Array,
				required: true
			},
			// Title options
			titleClass: {
				type: String,
				default: 'mb-3 headline'
			},
			listTitle: {
				type: String,
				default: undefined
			},
			labelColor: {
				type: String,
				default: '#757575'
			},
			valueColor: {
				type: String,
				default: 'currentColor'
			},
			column: {
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
				default: '…'
			},
			/** The list min-width */
			minWidth: {
				type: String,
				default: undefined
			},
			/** The key/value width */
			width: {
				type: String,
				default: '200px'
			}
		}
	});

	/**
	 * DataList is a component used to display an array of
	 * objects containing key/value
	 */
	@Component
	export default class DataList extends Props {}
</script>

<style lang="scss" scoped>
	.vd-field {
		// Row
		.vd-row {
			display: flex;
			flex-wrap: wrap;
		}

		// Column (default on small screen)
		&.vd-column .vd-row {
			flex-direction: column;
		}

		&.vd-flex {
			display: flex;
			flex-wrap: wrap;
		}

		// Do not apply on column mode
		&:not(.vd-column) {
			// Default separator
			.vd-key::after {
				content: " :";
			}

			.vd-value {
				align-self: flex-end;
			}
		}
	}
</style>
