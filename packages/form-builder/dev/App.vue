<template>
	<VApp>
		<VAppBar
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
			<div class="d-flex justify-center">
				<PageContainer>
					<Playground class="d-flex justify-center" />
				</PageContainer>
			</div>
		</VMain>
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
	export default class App extends Vue {}
</script>
