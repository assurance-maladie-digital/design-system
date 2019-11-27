<template>
	<VApp>
		<NotificationBar close-text="Close" />

		<VAppBar
			app
			dark
			fixed
			color="primary"
			class="px-4"
		>
			<VToolbarTitle>VueDot</VToolbarTitle>

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

		<Header
			class="mt-12"
			title="Titre"
			firstname="Baptiste"
			lastname="Coulon"
			:logged-in="true"
			:actions-list="['text', 'text']"
			info="administrateur"
		/>
		<VContent>
			<VLayout
				column
				tag="main"
				align-start
				class="main elevation-3 px-8 py-6"
				:class="dark ? 'grey darken-4' : 'white'"
			>
				<!-- Introduction -->
				<h1 class="display-1 mb-12 font-weight-bold">
					Playground
				</h1>

				<!-- Examples -->
				<CopyBtnEx />

				<CustomIconEx />

				<DataListEx />

				<DatePickerEx />

				<DebounceEx />

				<FileListEx />

				<FileUploadEx />

				<LangBtnEx />

				<NotificationEx />

				<PaginatedTableEx />

				<RulesEx />

				<UploadWorkflowEx />
			</VLayout>
		</VContent>

		<VFooter
			:color="dark ? 'grey darken-3' : 'secondary'"
			class="white--text elevation-5"
			app
		>
			<VSpacer />

			v{{ version }} &copy; 2018-2019 Dylan Broussard
		</VFooter>
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { version } from '../package.json';

	const DARK_THEME_KEY = 'vd-pg-dark';

	/**
	 * Playground is a component that contains examples
	 * of the library component's
	 */
	@Component
	export default class Playground extends Vue {
		version = version;

		updateTheme() {
			this.$vuetify.theme.dark = !this.$vuetify.theme.dark;

			// Save the preference in localStorage
			localStorage.setItem(
				DARK_THEME_KEY,
				// Local storage only accepts strings,
				// so we must use JSON.stringify
				JSON.stringify(this.$vuetify.theme.dark)
			);
		}

		created() {
			// Set theme
			const stored = localStorage.getItem(DARK_THEME_KEY) || 'false';
			const darkTheme = JSON.parse(stored);

			this.$vuetify.theme.dark = darkTheme;
		}

		get dark() {
			return this.$vuetify.theme.dark;
		}
	}
</script>

<style lang="scss" scoped>
	// Main container
	.main {
		height: 100%;
		margin: 50px auto;
		max-width: 1200px;
	}

	@media screen and (max-width: 1260px) {
		.main {
			margin: 15px;
		}
	}
</style>
