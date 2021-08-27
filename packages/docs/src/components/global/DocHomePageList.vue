<template>
	<div class="doc-home-page-list">
		<DocTextIcon
			v-for="(item, index) in homePageListItems"
			:key="index"
			:icon="item.icon"
			:content="item.content"
			class="my-10"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import DocTextIcon from '../page/DocTextIcon.vue';

	import { homePageListItems } from '../../data/homePageListItems';

	@Component({
		components: {
			DocTextIcon
		}
	})
	export default class DocHomePageList extends Vue {
		homePageListItems = homePageListItems;
	}
</script>
