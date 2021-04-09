<template>
	<div />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../mixins/customizable';

	const Props = Vue.extend({
		props: {

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
	}
</script>

<style lang="scss" scoped>

</style>
