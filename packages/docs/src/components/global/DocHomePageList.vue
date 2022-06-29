<template>
	<div class="doc-home-page-list">
		<DocTextIcon
			v-for="(item, index) in items"
			:key="index"
			:icon="item.icon"
			:content="item.content"
			:class="{ 'mt-6 mt-md-10': index > 0 }"
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
		items = homePageListItems;
	}
</script>
