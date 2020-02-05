<template>
	<VSkeletonLoader
		v-bind="$attrs"
		class="vd-header-loading"
		type="heading"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	/**
	 * HeaderLoading is a component that extends VSkeletonLoader
	 * to provide a loader that you can size as needed
	 */
	@Component({
		inheritAttrs: false
	})
	export default class HeaderLoading extends Vue {}
</script>

<style lang="scss" scoped>
	.vd-header-loading ::v-deep {
		.v-skeleton-loader__heading {
			width: 100%;
			height: 100%;
			border-radius: 35px;
		}
	}

	// Remove border radius when tile option is activated
	.vd-header-loading.v-skeleton-loader--tile ::v-deep	{
		.v-skeleton-loader__heading {
			border-radius: 0;
		}
	}
</style>
