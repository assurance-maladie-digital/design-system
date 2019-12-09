<template>
	<VList v-bind="options.list">
		<!-- list of optional actions -->
		<VListItem
			v-for="(item, index) in actionsList"
			:key="index"
			@click="clickAction(index)"
		>
			<VListItemContent>{{ item }}</VListItemContent>
		</VListItem>
		<!-- logout -->
		<VListItem
			v-if="loggedIn"
			@click="clickLogout"
		>
			<VIcon v-bind="options.logoutIcon">
				{{ mdiExitToApp }}
			</VIcon>
			{{ locales.logOut }}
		</VListItem>
	</VList>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import header from './mixins/header';

	import customizable, { Options } from '../../mixins/customizable';
	import config from './config/HeaderBarActions';

	import { mdiExitToApp } from '@mdi/js';

	/** The profile button in the Header */
	@Component<HeaderBarActions>({
		mixins: [
			// Default configuration
			customizable(config),
			header
		]
	})
	export default class HeaderBarActions extends Vue {
		// Mixin computed data
		options!: Options;

		actionsList!: [string];
		mdiExitToApp = mdiExitToApp;
	}
</script>

<style scoped>
</style>
