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

		<VContent>
			<PageCard :card-class="pageCardClass">
				<!-- Introduction -->
				<h1 class="display-1 mb-12 font-weight-bold">
					Playground
				</h1>

				<!-- Examples -->
				<HeaderEx />

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
			</PageCard>
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

		get pageCardClass() {
			return this.dark ? ' grey darken-4' : ' white';
		}
	}
</script>
