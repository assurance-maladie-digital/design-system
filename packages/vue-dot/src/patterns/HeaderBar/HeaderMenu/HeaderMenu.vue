<template>
	<VMenu
		v-if="buttonText || showIcon"
		v-model="menu"
		v-bind="options.menu"
		@input="menuChanged"
	>
		<template #activator="{ on }">
			<VBtn
				data-test="buttonMenu"
				class="menu-el text-none px-4 text-right no-text-transform"
				v-bind="options.button"
				:height="buttonHeight"
				:large="!$vuetify.breakpoint.smAndDown"
				@click="clickMenu"
				v-on="on"
			>
				<VLayout
					v-if="buttonText"
					class="vd-btn-text"
					column
				>
					<!-- userDisplayName firstName and lastName or account text  -->
					<div class="subtitle-1 text-truncate">
						{{ buttonText }}
					</div>
					<!-- informations -->
					<div
						v-if="info && loggedIn"
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
					v-if="showIcon"
					class="round-icon ml-1"
					v-bind="options.buttonUserIcon"
				>
					{{ avatarIcon }}
				</VIcon>
			</VBtn>
		</template>
		<HeaderActions
			v-if="loggedIn"
			:actions-list="actionsList"
			:logged-in="loggedIn"
			@click:action="clickAction"
			@click:logout="clickLogout"
		/>
	</VMenu>
</template>

<script lang="ts">
	import HeaderActions from '../HeaderActions/HeaderActions.vue';
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import customizable from '../../../mixins/customizable';
	import config from './config';
	import locales from './locales';

	import { mapActions, mapState } from 'vuex';

	import header from '../mixins/header';

	const MixinsDeclaration = mixins(customizable(config), header);
	/** The profile button in the Header */
	@Component({
		components: { HeaderActions }
	})
	export default class HeaderMenu extends MixinsDeclaration {
		menu = false;

		// compose the user display name
		get userDisplayName() {
			const firstName =
				typeof this.firstName === 'string' ? this.firstName.trim() : '';
			const lastName =
				typeof this.lastName === 'string' ? this.lastName.trim() : '';
			if (firstName.length > 0 || lastName.length > 0) {
				return `${firstName} ${lastName}`;
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
				return false;
			}

			if (this.loggedIn) {
				return this.userDisplayName;
			} else if (this.accountText && this.accountText.length > 0) {
				return this.accountText.trim();
			}

			return false;
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
	.vd-btn-text {
		max-width: 270px;
	}
</style>
