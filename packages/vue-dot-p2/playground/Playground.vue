<template>
	<VApp>
		<VAppBar
			app
			dark
			fixed
			color="primary"
			class="vd-p2-playground-app-bar px-4"
		>
			<h1 class="title">
				VueDotP2
			</h1>

			<VSpacer />

			<!-- Dark mode switch button -->
			<VBtn
				color="accent"
				primary
				:dark="dark"
				@click="updateTheme"
			>
				{{ dark ? 'Light' : 'Dark' }} mode
			</VBtn>
		</VAppBar>

		<VContent>
			<PageCard :card-class="pageCardClass">
				<!-- Introduction -->
				<h2 class="display-1 mb-12 font-weight-bold">
					Playground
				</h2>
			</PageCard>
		</VContent>

		<VFooter
			:color="dark ? 'grey darken-3' : 'secondary'"
			class="white--text elevation-5"
			app
		>
			<VSpacer />

			v{{ version }} &copy; 2020 Dylan Broussard
		</VFooter>
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { LOCAL_STORAGE_CONTROL } from './plugins/vue-dot';

	import { LocalStorageUtility } from '@cnamts/vue-dot/src/helpers/localStorageUtility';

	const DARK_THEME_KEY = 'pg-dark';

	/**
	 * Playground is a component that contains examples
	 * of the library component's
	 */
	@Component
	export default class Playground extends Vue {
		version = process.env.VUE_APP_VERSION;

		localStorageUtility = new LocalStorageUtility(LOCAL_STORAGE_CONTROL.version);

		updateTheme() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;

			// Save the preference in localStorage
			this.localStorageUtility.setItem(DARK_THEME_KEY, this.$vuetify.theme.dark);
		}

		created() {
			const darkTheme = this.localStorageUtility.getItem(DARK_THEME_KEY) || false;

			// Set theme
			this.$vuetify.theme.dark = darkTheme;
		}

		get dark() {
			return this.$vuetify.theme.dark;
		}

		get pageCardClass() {
			return this.dark ? ' grey darken-4' : ' white';
		}
	}
</script>

<style lang="scss" scoped>
	.vd-p2-playground-app-bar {
		z-index: 10;
	}
</style>
