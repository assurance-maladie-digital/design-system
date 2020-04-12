<template>
	<section class="doc-api">
		<DocApiItems
			:lang="lang"
			:value="value"
			:api="api"
		/>
	</section>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			lang: {
				type: String,
				default: ''
			},
			value: {
				type: Array,
				default: () => ([])
			},
			api: {
				type: Object,
				default: () => ({})
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	export default class DocApi extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>
	.doc-api {
		width: 100%;
	}
</style>
