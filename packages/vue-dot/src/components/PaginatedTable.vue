<template>
	<!--
		We bind all attributes and listeners to the VDataTable
		but we need to bind manually the pagination and the total items
	-->
	<VDataTable
		v-if="$attrs"
		v-bind="$attrs"
		:pagination.sync="paginationCalc"
		:total-items="totalItems"
		v-on="$listeners"
	>
		<!--
			Pass down the scoped slots
			see https://github.com/vuejs/vue/pull/7765 for the official discussion
			and https://stackoverflow.com/questions/50891858/vue-how-to-pass-down-slots-inside-wrapper-component/52823029#52823029
			for the source of this solution
		-->
		<template
			v-for="slot in Object.keys($scopedSlots)"
			:slot="slot"
			slot-scope="scope"
		>
			<slot
				:name="slot"
				v-bind="scope"
			/>
		</template>
	</VDataTable>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	const Props = Vue.extend({
		inheritAttrs: false, // see https://vuejs.org/v2/api/#inheritAttrs
		props: {
			pagination: {
				type: Object,
				required: true
			},
			totalItems: {
				type: Number,
				required: true
			},
			// The prefix is used to store different pagination objects
			// If the user has two tables but isn't using this prop,
			// the tables will share the same saved pagination object
			prefix: {
				type: String,
				default: ''
			}
		}
	});

	/**
	 * PaginatedTable is a wrapper component for the VDataTable
	 * that stores the pagination in local storage
	 */
	@Component<PaginatedTable>({
		watch: {
			/** When the pagination is updated */
			pagination() {
				// Save it to local storage
				localStorage.setItem(
					'vd-pagination' + this.id,
					// Local storage only accepts strings,
					// so we must use JSON.stringify
					JSON.stringify(this.pagination)
				);
			}
		}
	})
	export default class PaginatedTable extends Props {
		/**
		 * Local pagination
		 * This is the pagination from local storage
		*/
		localPagination: object = {};

		/**
		 * Returns either the local storage pagination,
		 * or the pagination passed as a prop
		*/
		get paginationCalc() {
			// If localPagination isn't empty
			if (Object.keys(this.localPagination).length) {
				// return it
				return this.localPagination;
			}

			// Else, return the prop
			return this.pagination;
		}

		set paginationCalc(value: any) {
			if (Object.keys(this.localPagination).length) {
				this.localPagination = {};
			}

			this.$emit('pagination:updated', value);
		}

		get id() {
			// If there is a prefix
			if (this.prefix) {
				// Add a dash before it, to make the key
				// more readable in local storage
				return '-' + this.prefix;
			}

			// else, return an empty string
			return '';
		}

		/** Retreive the pagination from local storage */
		created() {
			this.localPagination = JSON.parse(
				// Default to empty object
				localStorage.getItem('vd-pagination' + this.id) || '{}'
			);
		}
	}
</script>
