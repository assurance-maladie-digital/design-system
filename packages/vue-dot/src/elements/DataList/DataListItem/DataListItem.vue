<template>
	<VLayout
		v-bind="options.layout"
		class="vd-data-list-item"
	>
		<slot name="icon">
			<VIcon
				v-if="icon"
				v-bind="options.icon"
			>
				{{ icon }}
			</VIcon>
		</slot>

		<div class="vd-data-list-item-content">
			<div
				class="vd-data-list-item-label caption"
				:style="{ color: labelColor }"
			>
				{{ label }}
			</div>

			<!-- Show value or fallback to placeholder -->
			<div class="vd-data-list-item-value">
				<slot
					name="value"
					v-bind="{ itemValue }"
				>
					<VChip
						v-if="chip"
						v-bind="options.chip"
					>
						{{ itemValue }}
					</VChip>

					<span
						v-else
						class="body-1"
					>
						{{ itemValue }}
					</span>
				</slot>
			</div>

			<div class="vd-data-list-item-action">
				<slot name="action">
					<VBtn
						v-if="action"
						text
						small
						color="accent"
						class="vd-data-list-item-action-btn body-1 text-none pa-0"
						@click="$emit('click:action')"
					>
						{{ action }}
					</VBtn>
				</slot>
			</div>
		</div>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			/** Label of the value */
			label: {
				type: String,
				required: true
			},
			/** Value to display */
			value: {
				type: String,
				default: undefined
			},
			/** Action to display */
			action: {
				type: String,
				default: undefined
			},
			/** Text to display as fallback of value */
			placeholder: {
				type: String,
				default: locales.placeholder
			},
			/** Display the value in a VChip */
			chip: {
				type: Boolean,
				default: false
			},
			/** SVG icon to display */
			icon: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/**
	 * DataListItem is a component that displays a
	 * label associated with a value
	 */
	@Component
	export default class DataListItem extends MixinsDeclaration {
		get labelColor(): string {
			return this.$vuetify.theme.dark ? 'rgba(255, 255, 255, .7)' : 'rgba(0, 0, 0, .6)';
		}

		get itemValue(): string {
			return this.value || this.placeholder;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-data-list-item-action-btn.v-btn {
		min-width: 0;
		margin: 0 -1px;
	}
</style>
