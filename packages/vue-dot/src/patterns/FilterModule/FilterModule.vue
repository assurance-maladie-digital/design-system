<template>
	<div
		class="vd-filter-module"
		@click="openFilterList"
	>
		Filter Me
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	const Props = Vue.extend({
		props: {
			values: {
				type: Array,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(
		Props,
		customizable(config)
	);

	@Component<FilterModule>({
		inheritAttrs: false,
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class FilterModule extends MixinsDeclaration {
		// Locales
		locales = locales;

		/** The v-model of VMenu */
		menu = false;

		openFilterList(): void {
			console.log('clicked');
		}
	}
</script>

<style lang="scss" scoped>
	.vd {
		&-filter-module {
			width: 150px;
			display: flex;
		}
	}
</style>
