<template>
	<VMenu
		v-if="buttonText || showIcon"
		v-model="menu"
		v-bind="options.menu"
		@input="$emit('change', $event)"
	>
		<template #activator="{ on }">
			<VBtn
				data-test="buttonMenu"
				v-bind="options.button"
				:height="buttonHeight"
				:large="!$vuetify.breakpoint.smAndDown"
				@click="clickMenu"
				v-on="on"
			>
				<VLayout
					v-if="buttonText"
					class="btn-text"
					column
				>
					<!-- agent firstname and lastname or account text  -->
					<div v-bind="options.buttonText">
						{{ buttonText }}
					</div>
					<!-- informations -->
					<div
						v-if="info"
						v-bind="options.buttonInfo"
					>
						{{ info.trim() }}
					</div>
				</VLayout>

				<!-- icon account
				when user is logged in and icon not hidden
				when mobile version and the user is not logged In
				-->
				<VIcon
					v-if="showIcon"
					v-bind="options.buttonUserIcon"
				>
					{{ mdiAccount }}
				</VIcon>
			</VBtn>
		</template>
		<HeaderBarActions
			:actions-list="actionsList"
			:logged-in="loggedIn"
			@click:action="clickAction"
			@click:logout="clickLogout"
		/>
	</VMenu>
</template>

<script lang="ts">
	import HeaderBarActions from './HeaderBarActions.vue';
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import customizable, { Options } from '../../mixins/customizable';
	import config from './config/HeaderBarMenu';

	import { mapActions, mapState } from 'vuex';

	import { mdiAccount } from '@mdi/js';

	import header from './mixins/header';

	/** The profile button in the Header */
	@Component<HeaderBarMenu>({
		components: { HeaderBarActions },
		mixins: [
			// Default configuration
			customizable(config),
			header
		]
	})
	export default class HeaderBarMenu extends Vue {
		// Mixin computed data
		options!: Options;

		// mixins
		actionsList!: [string];
		firstname!: string;
		lastname!: string;
		loggedIn!: boolean;
		accountText!: string;
		hideUserIcon!: boolean;
		info!: string;

		// Icons
		mdiAccount = mdiAccount;

		menu = false;

		// compose the user display name
		get agent() {
			const firstname =
				typeof this.firstname === 'string' ? this.firstname.trim() : '';
			const lastname =
				typeof this.lastname === 'string' ? this.lastname.trim() : '';
			if (firstname.length > 0 || lastname.length > 0) {
				return `${firstname} ${lastname}`;
			}
			return null;
		}

		/** calcul the button height */
		get buttonHeight() {
			if (this.$vuetify.breakpoint.smAndDown) {
				return 32;
			} else {
				return this.info ? 71 : 55;
			}
		}

		// calcul the button text to display
		get buttonText() {
			if (this.$vuetify.breakpoint.smAndDown) {
				return null;
			}

			if (this.loggedIn) {
				return this.agent;
			} else if (this.accountText && this.accountText.length > 0) {
				return this.accountText.trim();
			}

			return null;
		}

		/** calcul if show the icon */
		get showIcon() {
			return (
				(!this.hideUserIcon &&
					this.loggedIn &&
					!this.$vuetify.breakpoint.smAndDown) ||
				(this.$vuetify.breakpoint.smAndDown && !this.loggedIn)
			);
		}
	}
</script>

<style lang="scss" scoped>
	.btn-text {
		max-width: 270px;
	}

	.menu-active-el {
		border-radius: 4px;
	}

	.menu-el {
		right: 15px;
		position: absolute;
		text-align: left;
	}

	.round-icon {
		border-radius: 50%;
	}

	@media only screen and (max-width: 600px) {
		.menu-el {
			position: relative;
			margin-top: 10px;
			right: 0;
		}
	}
</style>
