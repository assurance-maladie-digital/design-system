<template>
	<ContextualMenu
		class="mt-4"
		:tabs="tabs"
		@current-tab="changeTab"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ContextualMenuUsage extends Vue {
		currentTab = '';

		tabs = [
			{
				label: 'Onglet 1',
				route: '#onglet-1'
			},
			{
				label: 'Onglet 2',
				route: '#onglet-2'
			},
			{
				name: 'onglet-3',
				label: 'Onglet 3',
				route: '#onglet-3'
			},
			{
				label: 'Onglet 4',
				route: '#onglet-4'
			},
			{
				label: 'Onglet 5',
				route: '#onglet-5'
			}
		];

		changeTab(newTab: string): void {
			this.currentTab = newTab;
		}
	}
</script>
