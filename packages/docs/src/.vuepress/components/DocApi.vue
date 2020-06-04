<template>
	<section class="doc-api">
		<DocApiItems
			:value="value"
			:api="api"
		/>
	</section>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			value: {
				type: Array as PropType<string[]>,
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
