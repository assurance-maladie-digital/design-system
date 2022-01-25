<template>
	<div class="doc-design-principles-page">
		<div
			v-for="(item, index) in items"
			:key="index"
			class="doc-design-principle mb-8"
		>
			<DocMarkdown>
				{{ item.title }}
			</DocMarkdown>

			<DocMarkdown class="mb-8">
				{{ item.description }}
			</DocMarkdown>

			<DocTextIcon
				:icon="item.icon"
				:content="item.content"
			/>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import DocMarkdown from '../code/DocMarkdown.vue';
	import DocTextIcon from '../page/DocTextIcon.vue';

	import { designPrinciplesPageItems } from '../../data/designPrinciplesPageItems';

	@Component({
		components: {
			DocMarkdown,
			DocTextIcon
		}
	})
	export default class DocDesignPrinciplesPage extends Vue {
		items = designPrinciplesPageItems;
	}
</script>

<style lang="scss" scoped>
	.doc-design-principle:last-child {
		margin-bottom: 0 !important;
	}
</style>
