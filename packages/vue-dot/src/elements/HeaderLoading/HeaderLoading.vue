<template>
	<VSkeletonLoader
		v-bind="$attrs"
		:width="width"
		:height="height"
		type="heading"
		aria-hidden="true"
		class="vd-header-loading"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			width: {
				type: String,
				default: '100px'
			},
			height: {
				type: String,
				default: '1rem'
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/**
	 * HeaderLoading is a component that extends VSkeletonLoader
	 * to provide a loader that you can size as needed
	 */
	@Component({
		inheritAttrs: false
	})
	export default class HeaderLoading extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.vd-header-loading :deep() {
		.v-skeleton-loader__heading {
			width: 100%;
			height: 100%;
			border-radius: 35px;
		}
	}

	// Remove border radius when tile option is activated
	.vd-header-loading.v-skeleton-loader--tile :deep()	{
		.v-skeleton-loader__heading {
			border-radius: 0;
		}
	}
</style>
