<template>
	<VToolbar
		flat
		color="white"
	>
		<!-- Rows number -->
		<slot name="rows-number" />

		<VSpacer />

		<slot name="search-left" />
		<!-- Search field -->
		<VTextField
			v-model="internalSearch"
			clearable
			single-line
			hide-details
			class="vd-form-input flex-grow-0 mr-4"
			:append-icon="searchIcon"
			:disabled="tableLoading"
			:label="searchLabel"
		/>

		<VBtn
			v-if="showCreateBtn"
			outlined
			color="primary"
			@click="$emit('create')"
		>
			<VIcon>
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

	const Props = Vue.extend({
		props: {
			/** Disable the search field while loading */
			tableLoading: {
				type: Boolean,
				default: false
			},
			/** Label of the search field */
			searchLabel: {
				type: String,
				default: undefined
			},
			/** Search field value */
			search: {
				type: String,
				default: ''
			},
			/** Show the create button */
			showCreateBtn: {
				type: Boolean,
				default: true
			},
			/** Label of the create button */
			createBtnLabel: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/** Toolbar of a DataTable with search & create button */
	@Component
	export default class TableToolbar extends MixinsDeclaration {
		// Icons
		searchIcon = mdiMagnify;
		addIcon = mdiPlus;

		get internalSearch(): string {
			return this.search;
		}

		/** Use :search.sync="variable" */
		set internalSearch(value: string) {
			this.$emit('update:search', value);
		}
	}
</script>
