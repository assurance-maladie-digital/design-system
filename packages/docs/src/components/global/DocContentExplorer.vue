<template>
	<ContentExplorer
		:items="items"
		class="w-100"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import ContentExplorer from '../content-explorer/ContentExplorer.vue';

	import { contentExplorerItems } from '../../data/contentExplorerItems';

	@Component({
		components: {
			ContentExplorer
		}
	})
	export default class DocContentExplorer extends Vue {
		items = contentExplorerItems;
	}
</script>
