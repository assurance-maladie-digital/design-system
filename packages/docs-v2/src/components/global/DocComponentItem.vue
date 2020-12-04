<template>
	<VTabItem
		:key="value"
		class="doc-code-item"
	>
		<slot />
	</VTabItem>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			label: {
				type: String,
				required: true
			},
			value: {
				type: String,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocComponentItem extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.doc-code-item ::v-deep .doc-code-block {
		border: none;
		border-top-left-radius: 0 !important;
		border-top-right-radius: 0 !important;
	}
</style>
