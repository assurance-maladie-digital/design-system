<template>
	<div class="mt-6">
		<div
			v-for="(item, index) in designPrinciplesPageItems"
			:key="index"
		>
			<DocMarkdown>{{ item.title }}</DocMarkdown>

			<DocMarkdown class="mt-8">{{ item.description }}</DocMarkdown>

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
	import DocTextIcon from './DocTextIcon.vue';

	import { designPrinciplesPageItems } from '../../data/designPrinciplesPageItems';

	@Component({
		components: {
			DocMarkdown,
			DocTextIcon: DocTextIcon
		}
	})
	export default class DocDesignPrinciplesPage extends Vue {
		designPrinciplesPageItems = designPrinciplesPageItems;
	}
</script>
