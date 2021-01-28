<template>
	<ContentExplorer :items="items" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { contentExplorerItems } from '../../data/contentExplorerItems';

	@Component
	export default class DocContentExplorer extends Vue {
		items = contentExplorerItems;
	}
</script>
