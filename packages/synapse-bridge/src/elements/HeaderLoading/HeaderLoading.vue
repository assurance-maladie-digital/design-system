<script lang="ts">
	import { defineComponent } from 'vue'
	import { VSkeletonLoader } from 'vuetify/labs/components'

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
		}
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
	.vd-header-loading :deep(.v-skeleton-loader__heading) {
		width: 100%;
		height: 100%;
		margin: 0;
		border-radius: 35px;
	}
</style>
