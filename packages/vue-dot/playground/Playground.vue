<template>
	<VApp :dark="dark">
		<NotificationBar close-text="Close" />

		<VToolbar
			app
			dark
			fixed
			color="primary"
			class="px-3"
		>
			<VToolbarTitle>VueDot</VToolbarTitle>

			<VSpacer />

			<!-- Dark mode switch button -->
			<VBtn
				:light="!dark"
				:dark="dark"
				color="white"
				primary
				flat
				@click="dark = !dark"
			>
				{{ !dark ? 'Dark' : 'Light' }} mode
			</VBtn>
		</VToolbar>

		<VContent>
			<VLayout
				column
				tag="main"
				align-start
				class="main elevation-3 px-5 py-4"
				:class="dark ? 'grey darken-4' : 'white'"
			>
				<!-- Introduction -->
				<h1 class="display-1 mb-5 font-weight-bold">
					Playground
				</h1>

				<!-- Examples -->
				<DataListEx :dark="dark" />

				<DatePickerEx />

				<LangBtnEx />

				<CustomIconEx />

				<DebounceEx />

				<NotificationEx />

				<PaginatedTableEx />

				<RulesEx />

				<CopyBtnEx />

				<FileUploadEx />

				<FileListEx />
			</VLayout>
		</VContent>

		<VFooter
			color="secondary"
			class="px-3 white--text"
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

	/**
	 * Playground is a component that contains examples
	 * of the library component's
	 */
	@Component
	export default class Playground extends Vue {
		dark = false;
		version = version;
	}
</script>

<style lang="scss" scoped>
	// Main container
	.main {
		height: 100%;
		margin: 50px auto;
		max-width: 1200px;
	}

	@media screen and (max-width: 1200px) {
		.main {
			margin: 15px;
		}
	}
</style>
