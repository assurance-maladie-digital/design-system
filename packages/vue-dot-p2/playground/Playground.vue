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
					Text style
				</h2>
				<div
					class="mb-2"
				>
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
				<!-- Introduction -->
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
				<!-- Introduction -->
				<h2 class="display-1 mb-12 font-weight-bold">
					Buttons
				</h2>
				<VLayout
					class="mb-2"
				>
					<VBtn
						rounded
						depressed
						:ripple="false"
						class="p2-primary-btn mr-1"
						title="Primary button"
					>
						Primary button
					</VBtn>
					<VBtn
						rounded
						depressed
						:ripple="false"
						:disabled="true"
						class="p2-primary-btn"
						title="Primary button"
					>
						Primary button disabled
					</VBtn>
				</VLayout>
				<VLayout>
					<VBtn
						rounded
						depressed
						:ripple="false"
						class="p2-secondary-btn mr-1"
						title="Secondary button"
					>
						Secondary button
					</VBtn>
					<VBtn
						rounded
						depressed
						:ripple="false"
						:disabled="true"
						class="p2-secondary-btn"
						title="Secondary button"
					>
						Secondary button disabled
					</VBtn>
				</VLayout>
				<VLayout>
					<VRadioGroup
						v-model="radio"
						row
						hide-details
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
				<!-- Introduction -->
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
		radio = '';
		checkValue = false;
		switchValue = false;

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
