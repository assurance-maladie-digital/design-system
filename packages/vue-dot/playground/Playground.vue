<template>
	<VApp :dark="dark">
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
				<h1 class="display-1 font-weight-bold">
					Playground
				</h1>

				<p class="subheading pt-2">
					This is a demo of the library, for more detailed information, see the documentation website.
				</p>

				<VDivider class="my-4" />

				<!-- Examples -->

				<DataListEx :dark="dark" />

				<DatePickerEx />

				<LangBtnEx />

				<CustomIconEx />

				<DebounceEx />
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

	import pkg from '../package.json';

	import DataListEx from './examples/DataListEx.vue';
	import DatePickerEx from './examples/DatePickerEx.vue';
	import LangBtnEx from './examples/LangBtnEx.vue';
	import CustomIconEx from './examples/CustomIconEx.vue';
	import DebounceEx from './examples/DebounceEx.vue';

	export default Vue.extend({
		name: 'Playground',
		components: {
			DataListEx,
			DatePickerEx,
			LangBtnEx,
			CustomIconEx,
			DebounceEx
		},
		data() {
			return {
				dark: false,
				version: pkg.version
			};
		}
	});
</script>

<style lang="scss" scoped>
	/deep/ .v-content__wrap {
		padding: 50px;
	}

	.lang-btn /deep/ .v-btn {
		margin: 0 !important;
	}

	.main {
		height: 100%;
		margin: 0 auto;
		max-width: 1200px;
	}
</style>
