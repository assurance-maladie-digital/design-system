<template>
	<VList
		class="py-0 subtitle-1"
	>
		<!-- list of optional actions -->
		<VListItem
			v-for="(item, index) in actionsList"
			:key="index"
			@click="clickAction(index)"
		>
			<VListItemContent>
				{{ item }}
			</VListItemContent>
		</VListItem>
		<!-- logout -->
		<VListItem
			v-if="loggedIn"
			@click="clickLogout"
		>
			<VIcon
				color="primary"
				class="mr-2"
			>
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

	import { mdiExitToApp } from '@mdi/js';

	const Props = Vue.extend({
		props: {

		}
	});

	/** The profile button in the Header */
	@Component<HeaderBarActions>({
		mixins: [ header ]
	})
	export default class HeaderBarActions extends Props {

		actionsList!: [string];
		mdiExitToApp = mdiExitToApp;

	}
</script>

<style scoped>

</style>
