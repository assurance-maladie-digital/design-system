<template>
	<VToolbar
		flat
		color="white"
	>
		<!-- Rows number -->
		<p
			v-if="showRowsNumber"
			class="mb-0 font-weight-bold mr-4"
		>
			<span>{{ computedNbRows }}</span>

			<span class="ml-1">{{ rowText }}</span>
		</p>

		<VSpacer />

		<slot name="search-left" />
		<!-- Search field -->
		<VTextField
			:value="search"
			clearable
			single-line
			hide-details
			class="vd-form-input flex-grow-0 mr-4"
			:append-icon="searchIcon"
			:disabled="tableLoading"
			:label="searchLabel"
			@input="$emit('search', $event)"
		/>

		<VBtn
			v-if="showCreateBtn"
			outlined
			color="primary"
			@click="$emit('click')"
		>
			{{ createBtnLabel }}
		</VBtn>
	</VToolbar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiMagnify } from '@mdi/js';

	import { locales } from './locales';

	const Props = Vue.extend({
		model: {
			prop: 'search',
			event: 'search'
		},
		props: {
			/** Search field value */
			search: {
				type: String,
				default: ''
			},
			/** Label of the search field */
			searchLabel: {
				type: String,
				default: undefined
			},
			/** Text for the number of rows */
			rowText: {
				type: String,
				default: locales.rowText
			},
			/** Show the create button */
			showCreateBtn: {
				type: Boolean,
				default: false
			},
			/** Label of the create button */
			createBtnLabel: {
				type: String,
				default: undefined
			},
			/** Number of filtered items */
			nbFiltered: {
				type: Number,
				required: true
			},
			/** Number of total items */
			nbTotal: {
				type: Number,
				required: true
			},
			/** Disable the search field while loading */
			tableLoading: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/** Toolbar of a DataTable with search & create button */
	@Component
	export default class TableToolbar extends MixinsDeclaration {
		// Icons
		searchIcon = mdiMagnify;

		locales = locales;

		get showRowsNumber(): boolean {
			return Boolean(this.nbTotal && this.nbFiltered < this.nbTotal);
		}

		get computedNbRows(): string {
			return `${this.nbFiltered || ''}${this.nbFiltered && this.nbFiltered >= 0 ? '/': ''}${this.nbTotal}`;
		}
	}
</script>
