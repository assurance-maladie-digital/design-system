<template>
	<VAlert
		:color="color"
		border="left"
		colored-border
		class="mb-8"
		width="100%"
	>
		<slot />
	</VAlert>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			color: {
				type: String,
				default: 'info'
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocInfo extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.v-alert {
		background: #eee;

		::v-deep p:last-child {
			margin-bottom: 0 !important;
		}
	}
</style>
