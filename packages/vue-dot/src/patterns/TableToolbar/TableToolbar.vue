<template>
	<VToolbar v-bind="options.toolbar">
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
			@input="$emit('search', $event)"
		/>

		<VBtn
			v-if="showCreateBtn"
			v-bind="options.createdBtn"
			:disabled="loading"
			@click="$emit('click')"
		>
			<VIcon v-bind="options.addIcon">
				{{ addIcon }}
			</VIcon>

			{{ createBtnLabel }}
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
			/** Search field value */
			search: {
				type: String,
				default: undefined
			},
			/** Label of the search field */
			searchLabel: {
				type: String,
				default: locales.search
			},
			/** Text for the number of rows */
			rowText: {
				type: String,
				default: locales.defaultRowText
			},
			/** Show the create button */
			showCreateBtn: {
				type: Boolean,
				default: false
			},
			/** Label of the create button */
			createBtnLabel: {
				type: String,
				default: locales.createBtnLabel
			},
			/** Number of filtered items */
			nbFiltered: {
				type: Number,
				default: undefined
			},
			/** Number of total items */
			nbTotal: {
				type: Number,
				required: true
			},
			/** Disable interactive elements while loading */
			loading: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/** Toolbar of a DataTable with search & create button */
	@Component({
		model: {
			prop: 'search',
			event: 'search'
		}
	})
	export default class TableToolbar extends MixinsDeclaration {
		// Icons
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
	}
</script>
