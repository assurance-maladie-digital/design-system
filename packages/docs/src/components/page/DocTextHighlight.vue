<template>
	<div>
		<p class="font-weight-bold mb-2">{{ title }}</p>
		<DocMarkdown
			v-for="(item, index) in content"
			:key="index"
			:class="index > 0 ? 'mt-4' : ''"
		>
			{{ item }}
		</DocMarkdown>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import DocMarkdown from '../code/DocMarkdown.vue';

	import { homePageListItems } from '../../data/homePageListItems';

	const Props = Vue.extend({
		props: {
			title: {
				type: String,
				required: true
			},
			content: {
				type: Array as PropType<string[]>,
				required: true
			}
		}
	})

	@Component({
		components: {
			DocMarkdown
		}
	})
	export default class DocTextHighlight extends Props {
		homePageListItems = homePageListItems;
	}
</script>
