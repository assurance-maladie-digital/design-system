<script lang="ts">
	import { defineComponent } from 'vue';
	import { VSkeletonLoader } from 'vuetify/components/VSkeletonLoader';

	export default defineComponent({
		components: {
			VSkeletonLoader
		},
		props: {
			width: {
				type: String,
				default: '100px'
			},
			height: {
				type: String,
				default: '1rem'
			}
		},
	})
</script>

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

<style lang="scss" scoped>
.vd-header-loading :deep() {
	background: transparent;
	.v-skeleton-loader__heading {
		width: 100%;
		height: 100%;
		border-radius: 35px;
		margin: 0;
		background: rgba(grey, var(--v-border-opacity));
	}
}

// Remove border radius when tile option is activated
.vd-header-loading.v-skeleton-loader--tile :deep()	{
	.v-skeleton-loader__heading {
		border-radius: 0;
	}
}
</style>
