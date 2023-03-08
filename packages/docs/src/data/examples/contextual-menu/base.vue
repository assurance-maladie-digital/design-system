<template>
	<PageContainer>
		Current tab : {{ currentTab }}
		<ContextualMenu
			class="mt-4"
			:tabs="tabs"
			@current-tab="changeTab"
		/>
	</PageContainer>
</template>
<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class Playground extends Vue {
		currentTab = '';

		tabs = [
			{
				name: 'onglet-1',
				label: 'Onglet 1',
				route: '#onglet-1'
			},
			{
				name: 'onglet-2',
				label: 'Onglet 2',
				route: '#onglet-2'
			},
			{
				name: 'onglet-3',
				label: 'Onglet 3',
				route: '#onglet-3'
			},
			{
				name: 'onglet-4',
				label: 'Onglet 4',
				route: '#onglet-4'
			},
			{
				name: 'onglet-5',
				label: 'Onglet 5',
				route: '#onglet-5'
			}
		];

		changeTab(newTab: string): void {
			this.currentTab = newTab;
		}
	}
</script>
