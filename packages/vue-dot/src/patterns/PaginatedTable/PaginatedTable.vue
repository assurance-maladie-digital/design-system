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
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { Options } from './types';

	import { LocalStorageUtility } from '../../helpers/localStorageUtility';

	const Props = Vue.extend({
		props: {
			// Props from Vuetify
			options: {
				type: Object as PropType<Options>,
				required: true
			},
			serverItemsLength: {
				type: Number,
				required: true
			},
			// The suffix is used to store different pagination objects
			// If the user has two tables but isn't using this prop,
			// the tables will share the same saved pagination object
			suffix: {
				type: String,
				default: ''
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/**
	 * PaginatedTable is a wrapper component for the VDataTable
	 * that stores the pagination in local storage
	 */
	@Component<PaginatedTable>({
		inheritAttrs: false, // see https://vuejs.org/v2/api/#inheritAttrs
		watch: {
			/** When the options object is updated */
			options() {
				// Save it to local storage
				this.localStorageUtility.setItem(this.storageKey, this.options);
			}
		}
	})
	export default class PaginatedTable extends MixinsDeclaration {
		localStorageUtility = this.newLocalStorageInstance();

		/**
		 * Local pagination
		 * This is the pagination from local storage
		 */
		localOptions: Options | {} = {};

		/**
		 * Create a LocalStorageUtility instance
		 * with version, expiration & prefix
		 * from Vue Dot options
		 *
		 * @returns {LocalStorageUtility} New instance
		 */
		newLocalStorageInstance() {
			if (!this.$vd || !this.$vd.localStorageControl) {
				return new LocalStorageUtility();
			}

			return new LocalStorageUtility(
				this.$vd.localStorageControl.version,
				this.$vd.localStorageControl.expiration,
				this.$vd.localStorageControl.prefix
			);
		}

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

			this.$emit('update:options', value);
		}

		/** Local storage key */
		get storageKey() {
			const prefix = 'pagination';

			// If there is a suffix
			if (this.suffix) {
				// Add a dash before it to make the key
				// more readable in local storage
				return `${prefix}-${this.suffix}`;
			}

			// else, return only the prefix
			return prefix;
		}

		/** Retrieve the options from local storage */
		created() {
			this.localOptions = this.localStorageUtility.getItem(this.storageKey) || {};
		}
	}
</script>
