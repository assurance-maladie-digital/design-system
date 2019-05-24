<template>
	<div class="vd-data-list">
		<slot name="title">
			<h4 :class="titleClass">
				{{ listTitle }}
			</h4>
		</slot>

		<dl
			v-if="list.length"
			:class="{
				'vd-column': column || $vuetify.breakpoint.xs || flex,
				'vd-flex': flex
			}"
			:style="{ minWidth }"
			class="vd-field"
		>
			<div
				v-for="(item, index) in list"
				:key="index"
				class="vd-row mb-2"
			>
				<dt
					v-if="item.key"
					:style="{ width, color: labelColor }"
					class="vd-key body-1"
				>
					{{ item.key }}
				</dt>

				<dd
					:style="{ color: valueColor }"
					class="vd-value body-1"
				>
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
			titleClass: {
				type: String,
				default: 'mb-3 headline'
			},
			list: {
				type: Array,
				required: true
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
			placeholder: {
				type: String,
				default: '…'
			},
			minWidth: {
				type: String,
				default: undefined
			},
			width: {
				type: String,
				default: '200px'
			}
		}
	});

	@Component
	export default class DataList extends Props {}
</script>

<style lang="scss" scoped>
	.vd-field {
		.vd-row
		{
			display: flex;
			flex-wrap: wrap;
		}

		&.vd-column .vd-row
		{
			flex-direction: column;
		}

		&.vd-flex {
			display: flex;
			flex-wrap: wrap;
		}

		&:not(.vd-column) {
			.vd-key::after
			{
				content: " :";
			}

			.vd-value {
				align-self: flex-end;
			}
		}
	}
</style>
