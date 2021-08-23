<template>
	<div>
		<DocTextIcon
			v-for="(item, index) in homePageListItems"
			:key="index"
			:icon="item.icon"
			:content="item.content"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import DocMarkdown from '../code/DocMarkdown.vue';
	import DocTextIcon from './DocTextIcon.vue';

	import { homePageListItems } from '../../data/homePageListItems';

	@Component({
		components: {
			DocMarkdown,
			DocTextIcon: DocTextIcon
		}
	})
	export default class DocHomePageList extends Vue {
		homePageListItems = homePageListItems;
	}
</script>
