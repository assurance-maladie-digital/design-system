<template>
	<VDataTable
		v-if="$attrs"
		v-bind="$attrs"
		:options.sync="optionsCalc"
		v-on="$listeners"
	>
		<!--
			Pass down the scoped slots
			@see https://github.com/vuejs/vue/pull/7765 for the official discussion
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

	import { DataOptions } from 'vuetify/types';

	import { LocalStorageUtility } from '../../helpers/localStorageUtility';

	const Props = Vue.extend({
		props: {
			options: {
				type: Object as PropType<DataOptions>,
				required: true
			},
			// The suffix is used to store different pagination objects
			// If the user has two tables but isn't using this prop,
			// the tables will share the same saved pagination object
			suffix: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component<PaginatedTable>({
		inheritAttrs: false,
		watch: {
			options(): void {
				this.localStorageUtility.setItem(this.storageKey, this.options);
			}
		}
	})
	export default class PaginatedTable extends MixinsDeclaration {
		localStorageUtility = this.newLocalStorageInstance();

		localOptions = {} as DataOptions;

		newLocalStorageInstance(): LocalStorageUtility {
			if (!this.$vd || !this.$vd.localStorageControl) {
				return new LocalStorageUtility();
			}

			return new LocalStorageUtility(
				this.$vd.localStorageControl.version,
				this.$vd.localStorageControl.expiration,
				this.$vd.localStorageControl.prefix
			);
		}

		get optionsCalc(): DataOptions {
			if (Object.keys(this.localOptions).length) {
				return this.localOptions;
			}

			return this.options;
		}

		set optionsCalc(value: DataOptions) {
			if (Object.keys(this.localOptions).length) {
				this.localOptions = {} as DataOptions;
			}
		}

		get storageKey(): string {
			const PREFIX = 'pagination';

			if (this.suffix) {
				return `${PREFIX}-${this.suffix}`;
			}

			return PREFIX;
		}

		created() {
			this.localOptions = this.localStorageUtility.getItem(this.storageKey) || {} as DataOptions;
		}
	}
</script>
