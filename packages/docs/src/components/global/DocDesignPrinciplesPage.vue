<template>
	<div class="doc-design-principles-page">
		<div
			v-for="(item, index) in designPrinciplesPageItems"
			:key="index"
			class="my-10"
		>
			<DocMarkdown class="mb-8">
				{{ item.title }}
			</DocMarkdown>

			<DocIndent class="mb-8">
				<DocMarkdown>
					{{ item.description }}
				</DocMarkdown>
			</DocIndent>

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
	import DocIndent from './DocIndent.vue';
	import DocTextIcon from '../page/DocTextIcon.vue';

	import { designPrinciplesPageItems } from '../../data/designPrinciplesPageItems';

	@Component({
		components: {
			DocMarkdown,
			DocIndent,
			DocTextIcon
		}
	})
	export default class DocDesignPrinciplesPage extends Vue {
		designPrinciplesPageItems = designPrinciplesPageItems;
	}
</script>
