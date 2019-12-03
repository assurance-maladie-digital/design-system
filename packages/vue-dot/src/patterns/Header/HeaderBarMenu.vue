<template>
	<VMenu
		v-model="menu"
		content-class="menu-active-el"
		transition="scale-transition"
		origin="top center"
		offset-y
		left
		@input="$emit('change', $event)"
	>
		<template
			v-if="actionsList.length || loggedIn || !hideUserIcon || accountText"
			#activator="{ on }"
		>
			<VBtn
				class="menu-el text-none px-4 text-right"
				:height="buttonHeight"
				:large="!$vuetify.breakpoint.xs"
				text
				@click="$emit('click:menu')"
				v-on="on"
			>
				<VLayout
					tag="span"
					column
				>
					<!-- agent firstname and lastname or account text    -->
					<div
						v-if="!$vuetify.breakpoint.xs"
						class="subtitle-1"
					>
						{{ loggedIn ? agent : accountText }}
					</div>
					<!-- informations -->
					<div
						v-if="info || !$vuetify.breakpoint.xs"
						class="body-2"
					>
						{{ info }}
					</div>
				</VLayout>

				<!-- icon account when user is logged in -->
				<VIcon
					v-if="(!hideUserIcon && loggedIn) || ($vuetify.breakpoint.xs && !loggedIn)"
					size="32px"
					color="grey darken-1"
					class="ml-2 pa-1 round-icon"
				>
					{{ userIcon }}
				</VIcon>
			</VBtn>
		</template>
		<VList
			:width="$vuetify.breakpoint.xs ? 360 : null"
			class="py-0 subtitle-1"
		>
			<!-- list of optional actions -->
			<VListItem
				v-for="(item, index) in actionsList"
				:key="index"
				@click="$emit('click:action', index)"
			>
				<VListItemContent>
					{{ item }}
				</VListItemContent>
			</VListItem>
			<!-- logout -->
			<VListItem
				v-if="loggedIn"
				@click="$emit('click:logout')"
			>
				<VIcon
					color="primary"
					class="mr-2"
				>
					{{ logoutIcon }}
				</VIcon>

				{{ locales.logOut }}
			</VListItem>
		</VList>
	</VMenu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import locales from './locales';
	import Component from 'vue-class-component';

	import { mapActions, mapState } from 'vuex';

	import { mdiAccount, mdiExitToApp } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			loggedIn: {
				type: Boolean,
				default: false
			},
			firstname: {
				type: String,
				default: null
			},
			hideUserIcon: {
				type: Boolean,
				default: false
			},
			accountText: {
				type: String,
				default: locales.account
			},
			lastname: {
				type: String,
				default: null
			},
			info: {
				type: String,
				default: null
			},
			actionsList: {
				type: [Array, Object],
				default: () => []
			}
		}

	});

	/** The profile button in the Header */
	@Component<HeaderMenu>({

	})
	export default class HeaderMenu extends Props {
		// Icons
		userIcon = mdiAccount;
		logoutIcon = mdiExitToApp;
		locales = locales;
		width: number = 0;
		menu = false;

		get agent() {
			if (this.firstname && this.lastname) {
				return `${this.firstname} ${this.lastname}`;
			}
			return null;
		}

		get buttonHeight() {
			if (this.$vuetify.breakpoint.xs) {
				return 32;
			} else {
				return this.info ? 71 : 55;
			}
		}
	}
</script>

<style lang="scss" scoped>
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
