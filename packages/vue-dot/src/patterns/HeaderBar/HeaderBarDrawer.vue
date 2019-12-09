<template>
	<VNavigationDrawer
		:value="value"
		v-bind="{...$attrs, ...options.drawer}"
		width="360"
		@input="toggleDrawer($event)"
	>
		<VListItem>
			<VListItemAvatar>
				<VIcon>{{ mdiAccount }}</VIcon>
			</VListItemAvatar>

			<VListItemContent>
				<VListItemTitle class="Subtitle 1">
					{{ firstname }} {{ lastname }}
				</VListItemTitle>
				<v-list-item-subtitle class="body-2">
					{{ info }}
				</v-list-item-subtitle>
			</VListItemContent>
		</VListItem>

		<VDivider />

		<HeaderBarActions
			:actions-list="actionsList"
			:logged-in="loggedIn"
			@click:action="clickAction($event); toggleDrawer(false)"
			@click:logout="clickLogout(); toggleDrawer(false)"
		/>
	</VNavigationDrawer>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { mdiAccount, mdiChevronLeft, mdiExitToApp } from '@mdi/js';

	import customizable, { Options } from '../../mixins/customizable';
	import config from './config';

	import HeaderBarActions from './HeaderBarActions.vue';
	import header from './mixins/header';

	import { mapState } from 'vuex';

	const Props = Vue.extend({
		props: {
			value: {
				type: Boolean,
				default: false
			}
		}
	});

	@Component<HeaderBarDrawer>({
			mixins: [
				// Default configuration
				customizable(config),
				header
			],
			components: { HeaderBarActions }
	})
	export default class HeaderBarDrawer extends Props {
		// Mixin computed data
		options!: Options;

		// icons
		mdiAccount = mdiAccount;
		mdiExitToApp = mdiExitToApp;
		mdiChevronLeft = mdiChevronLeft;

		// show the drawer or not
		toggleDrawer(value: boolean) {
			this.$emit('input', value);
		}

	}
</script>

<style lang="scss" scoped>
</style>
