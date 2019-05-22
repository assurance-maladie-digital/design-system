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
				<h2 class="display-1 font-weight-bold">
					Demo
				</h2>

				<p class="subheading pt-2">
					This is a demo of the library, for more detailed information, see the documentation website.
				</p>

				<VDivider class="my-4" />

				<!-- DataList -->
				<h3 class="primary--text mb-3 font-weight-medium headline">
					DataList
				</h3>

				<DataList
					:list="[
						{
							key: 'Civility',
							value: 'Mr'
						},
						{
							key: 'Name',
							value: 'Dupont'
						},
						{
							key: 'First name',
							value: 'Paul'
						},
						{
							key: 'Birth date',
							value: '09/24/1970'
						},
						{
							key: 'Nationality',
							value: 'French'
						},
						{
							key: 'Native country',
							value: 'France'
						},
						{
							key: 'Date of registration',
							value: ''
						}
					]"
					:label-color="dark ? 'white' : '#757575'"
					:value-color="dark ? '#ccc' : '#333'"
					list-title="Informations"
					flex
				/>

				<VDivider class="my-4" />

				<!-- DatePicker -->
				<h3 class="primary--text mb-3 font-weight-medium headline">
					DatePicker
				</h3>

				<DatePicker v-model="date" />

				<DatePicker
					birthdate
					:text-field-options="{
						appendIcon: 'code',
						clearable: true,
						appendIcon: 'code',
						prependInnerIcon: 'menu',
						appendOuterIcon: 'home'
					}"
					:prepend-icon="false"
				/>

				<VDivider class="my-4" />

				<!-- LangBtn -->
				<h3 class="primary--text mb-3 font-weight-medium headline">
					LangBtn
				</h3>

				<LangBtn />

				<VDivider class="my-4" />

				<!-- CustomIcon -->
				<h3 class="primary--text mb-3 font-weight-medium headline">
					CustomIcon
				</h3>

				<CustomIcon
					icon="vuejs"
					size="50px"
				/>

				<!-- v-debounce -->
				<h3 class="primary--text mb-3 font-weight-medium headline">
					v-debounce
				</h3>

				<h2 class="subheading mb-3 font-weight-bold">
					Native input
				</h2>

				<label>
					<input
						v-model.lazy="text"
						v-debounce="1000"

						placeholder="Type here"
						class="vd-simple-input"
					>
				</label>

				<h2 class="subheading mt-3 font-weight-bold">
					VTextField
				</h2>

				<VTextField
					v-debounce.1000="e => text = e"
					:value="text"

					label="Type here"
					class="no-flex"
				/>

				<p class="mb-0 mt-2">
					Debounced text: <span class="font-weight-medium">
						{{ text }}
					</span>
				</p>
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

	export default Vue.extend({
		name: 'Playground',
		data() {
			return {
				text: '',
				date: '',
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

	.vd-simple-input {
		outline: 0;
		width: 100%;
		padding: 5px 0;
		color: inherit;
		font-size: 1rem;
		border-bottom: 1px solid rgba(0, 0, 0, .42);

		&:focus {
			color: #01579b;
			border-color: #01579b;
		}
	}
</style>
