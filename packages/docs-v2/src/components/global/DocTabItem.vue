<template>
	<VTabItem
		:key="value"
		class="doc-tab-item nuxt-content"
	>
		<slot />
	</VTabItem>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { slugify } from '../../functions/slugify';

	const Props = Vue.extend({
		props: {
			label: {
				type: String,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocTabItem extends MixinsDeclaration {
		get value(): string {
			return slugify(this.label);
		}
	}
</script>

<style lang="scss" scoped>
	.doc-tab-item {
		::v-deep .doc-code-block {
			border: none;
			border-top-left-radius: 0 !important;
			border-top-right-radius: 0 !important;
		}
	}
</style>
