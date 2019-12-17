<template>
	<VList
		v-bind="options.list"
		class="py-0 subtitle-1"
	>
		<!-- list of optional actions -->
		<VListItem
			v-for="(item, index) in actionsList"
			:key="index"
			:data-test="'itemAction-'+index"
			@click="clickAction(index)"
		>
			<VListItemContent>{{ item }}</VListItemContent>
		</VListItem>
		<!-- logout -->
		<VListItem
			v-if="loggedIn"
			data-test="itemLogout"
			@click="clickLogout"
		>
			<VIcon
				v-bind="options.logoutIcon"
				color="primary"
				class="mr-2"
			>
				{{ logoutIcon }}
			</VIcon>
			{{ locales.logOut }}
		</VListItem>
	</VList>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import header from '../mixins/header';

	import config from './config';
	import locales from './locales';

	import { mdiExitToApp } from '@mdi/js';
	import customizable from '../../../mixins/customizable';

	const MixinsDeclaration = mixins( customizable(config), header);

	/** The profile button in the Header */
	@Component({})
	export default class HeaderActions extends MixinsDeclaration {
		logoutIcon = mdiExitToApp;

		locales = locales;
	}
</script>

<style scoped>
</style>
