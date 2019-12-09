<template>
	<VNavigationDrawer
		:value="value"
		v-bind="{...$attrs, ...options.drawer}"
		@input="toggleDrawer($event)"
	>
		<VListItem>
			<VListItemAvatar>
				<VIcon>{{ mdiAccount }}</VIcon>
			</VListItemAvatar>

			<VListItemContent>
				<VListItemTitle v-bind="options.userName">
					{{ firstname }} {{ lastname }}
				</VListItemTitle>
				<v-list-item-subtitle v-bind="options.userInfo">
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
	import { mdiAccount } from '@mdi/js';

	import customizable, { Options } from '../../mixins/customizable';
	import config from './config/HeaderBardrawer';

	import HeaderBarActions from './HeaderBarActions.vue';
	import header from './mixins/header';

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

		// show the drawer or not
		toggleDrawer(value: boolean) {
			this.$emit('input', value);
		}

	}
</script>

<style lang="scss" scoped>
</style>
