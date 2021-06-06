<template>
	<VApp>
		<HeaderBar :nav-bar="navBar" />
		<!--<VAppBar
			app
			dark
			color="primary"
			class="px-8"
		>
			<h1 class="text-h6">
				Playground
			</h1>
		</VAppBar>

		<VMain>
			<PageContainer>
				<Playground />
			</PageContainer>
		</VMain>-->
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import Playground from './Playground.vue';

	@Component({
		components: {
			Playground
		}
	})
	export default class App extends Vue {
		navBar = {
			title: 'Nom du projet',
			pro: false,
			menu: [
				{
					label: 'item',
					link: ''
				},
				{
					label: 'item',
					link: ''
				},
				{
					label: 'item',
					link: ''
				},
				{
					label: 'item',
					link: ''
				}
			]
		};
	}
</script>
