<template>
	<VMenu
		v-if="buttonText || showIcon"
		v-model="menu"
		content-class="menu-active-el"
		transition="scale-transition"
		origin="top center"
		offset-y
		left
		@input="$emit('change', $event)"
	>
		<template #activator="{ on }">
			<VBtn
				class="menu-el text-none px-4 text-right no-text-transform"
				:height="buttonHeight"
				:large="!$vuetify.breakpoint.smAndDown"
				text
				@click="clickMenu"
				v-on="on"
			>
				<VLayout
					v-if="buttonText"
					class="btn-text"
					column
				>
					<!-- agent firstname and lastname or account text  -->
					<div class="subtitle-1 text-truncate">
						{{ buttonText }}
					</div>
					<!-- informations -->
					<div
						v-if="info"
						class="body-2 text-truncate"
					>
						{{ info.trim() }}
					</div>
				</VLayout>

				<!-- icon account
				when user is logged in and icon not hidden
				when mobile version and the user is not logged In
				-->
				<VIcon
					v-if="(!hideUserIcon && loggedIn && !$vuetify.breakpoint.smAndDown) || ($vuetify.breakpoint.smAndDown && !loggedIn)"
					color="grey darken-1"
					class="round-icon ml-1"
				>
					{{ userIcon }}
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

	import { mapActions, mapState } from 'vuex';

	import { mdiAccount, mdiExitToApp } from '@mdi/js';

	import header from './mixins/header';

	const Props = Vue.extend({
		props: {

		}
	});

		/** The profile button in the Header */
	@Component<HeaderBarMenu>({
		components: { HeaderBarActions },
		mixins: [ header ]
	})
	export default class HeaderBarMenu extends Props {

		// mixins
		actionsList!: [string];
		firstname!: string;
		lastname!: string;
		loggedIn!: boolean;
		accountText!: string;
		hideUserIcon!: boolean;
		info!: string;

		// Icons
		userIcon = mdiAccount;
		logoutIcon = mdiExitToApp;

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
