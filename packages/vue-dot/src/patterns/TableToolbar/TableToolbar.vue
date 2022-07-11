<template>
	<VToolbar
		v-bind="options.toolbar"
		class="vd-table-toolbar"
	>
		<p
			v-if="showRowsNumber"
			class="mb-0 font-weight-bold mr-4"
		>
			{{ computedNbRows }} {{ computedRowsText }}
		</p>

		<VSpacer />

		<slot name="search-left" />

		<VTextField
			v-bind="options.textField"
			:value="search"
			:disabled="loading"
			:append-icon="searchIcon"
			:label="searchLabel"
			:class="textFieldClasses"
			@input="$emit('search', $event)"
		/>

		<VBtn
			v-if="showAddBtn"
			v-bind="options.addBtn"
			:disabled="loading"
			@click="$emit('click')"
		>
			<VIcon v-bind="options.addIcon">
				{{ addIcon }}
			</VIcon>

			<span
				v-show="$vuetify.breakpoint.mdAndUp"
				v-bind="options.addIconLabel"
			>
				{{ addBtnLabel }}
			</span>
		</VBtn>
	</VToolbar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiMagnify, mdiPlus } from '@mdi/js';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			nbTotal: {
				type: Number,
				required: true
			},
			nbFiltered: {
				type: Number,
				default: undefined
			},
			search: {
				type: String,
				default: undefined
			},
			searchLabel: {
				type: String,
				default: locales.search
			},
			rowText: {
				type: String,
				default: locales.defaultRowText
			},
			showAddBtn: {
				type: Boolean,
				default: false
			},
			addBtnLabel: {
				type: String,
				default: locales.addBtnLabel
			},
			loading: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component({
		model: {
			prop: 'search',
			event: 'search'
		}
	})
	export default class TableToolbar extends MixinsDeclaration {
		searchIcon = mdiMagnify;
		addIcon = mdiPlus;

		get showRowsNumber(): boolean {
			return Boolean(this.nbTotal);
		}

		get computedNbRows(): string {
			return `${this.nbFiltered !== undefined ? (this.nbFiltered + '/') : ''}${this.nbTotal}`;
		}

		get computedRowsText(): string {
			const plural = this.nbTotal > 1;

			return locales.rowText(this.rowText, plural);
		}

		get textFieldClasses(): string {
			let fieldClass = this.$vuetify.breakpoint.xs ? 'vd-form-input-s' : 'vd-form-input';

			if (this.showAddBtn) {
				fieldClass += ' mr-6';
			}

			return `${fieldClass} flex-grow-0`;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-table-toolbar :deep(.v-toolbar__content) {
		width: 100%;
		flex-wrap: wrap;
	}
</style>
