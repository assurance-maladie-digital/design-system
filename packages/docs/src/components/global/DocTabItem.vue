<template>
	<VTabItem
		:key="value"
		eager
		class="doc-tab-item nuxt-content"
	>
		<h2
			v-if="showTitle"
			class="d-none"
		>
			{{ label }}
		</h2>

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

		get showTitle(): boolean {
			return [
				'utilisation',
				'api',
				'personnalisation'
			].some(value => this.value === value);
		}
	}
</script>

<style lang="scss" scoped>
	.doc-tab-item > :deep(:last-child) {
		margin-bottom: 0 !important;
	}
</style>
