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
	import Component from 'vue-class-component';

	import DataListEx from './examples/DataListEx.vue';
	import DatePickerEx from './examples/DatePickerEx.vue';
	import LangBtnEx from './examples/LangBtnEx.vue';
	import CustomIconEx from './examples/CustomIconEx.vue';
	import DebounceEx from './examples/DebounceEx.vue';

	import pkg from '../package.json';

	/**
	 * Playground is a component that contains examples
	 * of the library component's
	*/
	@Component({
		components: {
			DataListEx,
			DatePickerEx,
			LangBtnEx,
			CustomIconEx,
			DebounceEx
		}
	})
	export default class Playground extends Vue {
		dark = false;
		version = pkg.version;
	}
</script>

<style lang="scss" scoped>
	/deep/ .v-content__wrap {
		padding: 50px;
	}

	.main {
		height: 100%;
		margin: 0 auto;
		max-width: 1200px;
	}
</style>
