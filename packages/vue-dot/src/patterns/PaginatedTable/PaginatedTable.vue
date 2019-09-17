<template>
	<!--
		We bind all attributes and listeners to the VDataTable
		but we need to bind manually the pagination and the total items
	-->
	<VDataTable
		v-if="$attrs"
		v-bind="$attrs"
		:options.sync="optionsCalc"
		:server-items-length="serverItemsLength"
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
			#[slot]="scope"
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

	import { Options } from './types';

	const Props = Vue.extend({
		inheritAttrs: false, // see https://vuejs.org/v2/api/#inheritAttrs
		props: {
			// Props from Vuetify
			options: {
				type: [Array, Object],
				required: true
			},
			serverItemsLength: {
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
			/** When the options object is updated */
			options() {
				// Save it to local storage
				localStorage.setItem(
					'vd-pagination' + this.id,
					// Local storage only accepts strings,
					// so we must use JSON.stringify
					JSON.stringify(this.options)
				);
			}
		}
	})
	export default class PaginatedTable extends Props {
		/**
		 * Local pagination
		 * This is the pagination from local storage
		 */
		localOptions: Options | {} = {};

		/**
		 * Returns either the local storage options,
		 * or the options passed as a prop
		 */
		get optionsCalc() {
			// If localOptions isn't empty
			if (Object.keys(this.localOptions).length) {
				// return it
				return this.localOptions;
			}

			// Else, return the prop
			return this.options;
		}

		set optionsCalc(value: Options | {}) {
			if (Object.keys(this.localOptions).length) {
				this.localOptions = {};
			}

			this.$emit('pagination:updated', value);
		}

		/** Local storage id */
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

		/** Retreive the options from local storage */
		created() {
			this.localOptions = JSON.parse(
				// Default to empty object
				localStorage.getItem('vd-pagination' + this.id) || '{}'
			);
		}
	}
</script>
