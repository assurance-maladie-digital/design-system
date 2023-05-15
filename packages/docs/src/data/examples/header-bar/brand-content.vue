<template>
	<HeaderBar>
		<template #brand-content>
			<h1 class="text-caption text-md-h6 font-weight-medium green--text">
				Pharmacies de garde
			</h1>
		</template>
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class HeaderBarBrandContent extends Vue {}
</script>

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';

	h1 {
		line-height: 1 !important;
	}

	.vd-header-bar-container :deep(.vd-divider) {
		fill: $vd-green-base;
	}
</style>
