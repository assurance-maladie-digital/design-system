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

		<VMain id="main">
			<Playground />
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

<style lang="scss">
	@import '@cnamts/design-tokens/dist/tokens';
	@import '../src/styles/index.scss';

	/* Default, global styles */
	* {
		margin: 0;
		padding: 0;
		border: 0;
		max-width: 100%;
		box-sizing: border-box;
		scroll-behavior: smooth;
		font-family: 'Source Sans Pro', 'Open Sans', sans-serif;
	}

	html,
	body {
		/* Font size defined by the browser */
		font-size: 100%;
	}

	/* Hide the application while Vue.js is loading */
	[v-cloak] {
		display: none;
	}

	#app {
		width: 100%;
		display: flex;
		min-height: 100vh;
		background: $vd-am-blue-lighten-97;
	}

	/* Apply default transition to links */
	a {
		transition: .25s;
	}
</style>
