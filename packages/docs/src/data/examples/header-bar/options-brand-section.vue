<template>
	<HeaderBar
		service-title="Design System"
		service-sub-title="Documentation du Design System"
		:vuetify-options="vuetifyOptions"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class HeaderBarOptions extends Vue {
		vuetifyOptions = {
			brandSection: {
				dividerColor: '#459b5a',
				title: {
					color: '#459b5a',
					fontWeight: 'bold !important',
					fontSize: '1.125rem',
					lineHeight: '1.125rem'
				},
				subTitle: {
					color: '#459b5a',
					fontWeight: 'bold',
					fontSize: '0.875rem',
					lineHeight: '1.125rem'
				}
			}
		};
	}
</script>

<style lang="scss" scoped>
	.vd-header-bar-container :deep(.vd-header-bar) {
		overflow: hidden;
	}
</style>
