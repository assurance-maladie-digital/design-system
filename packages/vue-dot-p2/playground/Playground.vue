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
				<h2 class="display-1 mb-12 font-weight-bold">
					Text style
				</h2>

				<div class="mb-2">
					<p class="display-2">
						Display 2
					</p>

					<p class="display-1">
						Display 1
					</p>

					<p class="headline">
						Headline
					</p>

					<p>Classic body</p>

					<p class="osp-din">
						Classic body osp-din
					</p>
				</div>
			</PageCard>

			<PageCard :card-class="pageCardClass">
				<h2 class="display-1 mb-12 font-weight-bold">
					Theme colors
				</h2>

				<h2 class="primary--text">
					Primary
				</h2>

				<h2 class="secondary--text">
					Secondary
				</h2>

				<h2 class="accent--text">
					Accent
				</h2>

				<h2 class="error--text">
					Error
				</h2>

				<h2 class="info--text">
					Info
				</h2>

				<h2 class="success--text">
					Success
				</h2>

				<h2 class="warning--text">
					Warning
				</h2>
			</PageCard>

			<PageCard :card-class="pageCardClass">
				<h2 class="display-1 mb-12 font-weight-bold">
					Buttons
				</h2>

				<VLayout class="mb-2">
					<VBtn
						:ripple="false"
						rounded
						depressed
						class="p2-primary-btn mr-1"
						title="Primary button"
					>
						Primary button
					</VBtn>

					<VBtn
						:ripple="false"
						rounded
						disabled
						depressed
						class="p2-primary-btn"
						title="Primary button"
					>
						Primary button disabled
					</VBtn>
				</VLayout>

				<VLayout class="mt-2">
					<VBtn
						:ripple="false"
						rounded
						depressed
						class="p2-secondary-btn mr-1"
						title="Secondary button"
					>
						Secondary button
					</VBtn>

					<VBtn
						:ripple="false"
						rounded
						disabled
						depressed
						class="p2-secondary-btn"
						title="Secondary button"
					>
						Secondary button disabled
					</VBtn>
				</VLayout>

				<VLayout class="mt-2">
					<a href="#">Link example</a>
				</VLayout>

				<VLayout>
					<VRadioGroup
						v-model="radio"
						:rules="requiredRule"
						hide-details
						row
					>
						<VRadio
							color="primary"
							label="Radio 1"
							value="Radio 1"
						/>

						<VRadio
							label="Radio 2"
							value="Radio 2"
						/>
					</VRadioGroup>
				</VLayout>

				<VLayout>
					<Checkbox
						v-model="checkValue"
						:rules="requiredRule"
						label="Checkbox P2"
					/>
				</VLayout>

				<VLayout>
					<VSwitch
						v-model="switchValue"
						class="mt-0"
						label="Switch P2"
					/>
				</VLayout>
			</PageCard>

			<PageCard :card-class="pageCardClass">
				<h2 class="display-1 mb-12 font-weight-bold">
					Text Inputs
				</h2>

				<VTextField
					:rules="requiredRule"
					placeholder="Placeholder example"
					validate-on-blur
					solo
					flat
				/>

				<VTextarea
					:rules="requiredRule"
					:maxlength="500"
					:counter="500"
					:rows="2"
					solo
					flat
					no-resize
					placeholder="Placeholder example"
				/>

				<VSelect
					v-model="selectedItem"
					:items="selectedList"
					label="Seelct component"
					solo
					flat
				/>
			</PageCard>

			<PageCard :card-class="pageCardClass">
				<h2 class="display-1 mb-12 font-weight-bold">
					P2 Components
				</h2>

				<Panel column>
					<P2DatePicker
						v-model="date"
						:date-max="today"
						:date-picker-rules="requiredRule"
					/>
				</Panel>
			</PageCard>

			<PageCard :card-class="pageCardClass">
				<h2 class="display-1 mb-12 font-weight-bold">
					P2 Tabs
				</h2>

				<div class="layout-tab-example">
					<VRow>
						<VTabs
							v-model="tab"
							active-class="primary white--text"
						>
							<VTab href="#first">
								First tab
							</VTab>

							<VTab href="#second">
								Second tab
							</VTab>
						</VTabs>
					</VRow>

					<VRow>
						<VTabsItems v-model="tab">
							<VTabItem
								value="first"
								:transition="false"
								:reverse-transition="false"
							>
								<Panel column>
									First Panel
								</Panel>
							</VTabItem>

							<VTabItem
								value="second"
								:transition="false"
								:reverse-transition="false"
							>
								<Panel column>
									Second Panel
								</Panel>
							</VTabItem>
						</VTabsItems>
					</VRow>
				</div>
			</PageCard>

			<PageCard :card-class="pageCardClass">
				<h2 class="display-1 mb-12 font-weight-bold">
					P2 DataTable
				</h2>

				<DataTableEx />
			</PageCard>

			<PageCard :card-class="pageCardClass">
				<h2 class="display-1 mb-12 font-weight-bold">
					Informations/Warning/Error messages
				</h2>

				<Information>Information message</Information>

				<Warning>Warning message</Warning>

				<Error>Error message</Error>
			</PageCard>
		</VContent>

		<VFooter
			:color="dark ? 'grey darken-3' : 'secondary'"
			class="white--text elevation-5"
			app
		>
			<VSpacer />

			v{{ version }} &copy; 2020
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
		radio = '';
		checkValue = false;
		switchValue = false;
		selectedList = [
			'Nb lignes/page',
			10,
			20 ,
			30,
			50,
			100
		];

		selectedItem = '';
		tab = 0;

		date = '2020-05-18';
		today = '2020-05-18';

		requiredRule = [
			(v: string) => !!v || 'Input is required'
		];

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

	.layout-tab-example {
		padding: 20px;
		background: #f5f5f5;
	}
</style>
