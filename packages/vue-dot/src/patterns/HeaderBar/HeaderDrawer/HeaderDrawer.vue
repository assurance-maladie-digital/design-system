<template>
	<VNavigationDrawer
		:value="value"
		v-bind="{...$attrs, ...options.drawer}"
		@input="toggleDrawer($event)"
	>
		<VListItem>
			<VListItemAvatar>
				<VIcon>{{ avatarIcon }}</VIcon>
			</VListItemAvatar>

			<VListItemContent>
				<VListItemTitle class="subtitle-1">
					{{ firstName }} {{ lastName }}
				</VListItemTitle>
				<v-list-item-subtitle class="body-2">
					{{ info }}
				</v-list-item-subtitle>
			</VListItemContent>
		</VListItem>

		<VDivider />

		<HeaderActions
			:actions-list="actionsList"
			:logged-in="loggedIn"
			@click:action="action"
			@click:logout="logout"
		/>
		<VListItem @click="toggleDrawer(false)">
			<VIcon>{{ closeDrawerIcon }}</VIcon>
		</VListItem>
	</VNavigationDrawer>
</template>

<script lang="ts">
	import HeaderActions from '../HeaderActions/HeaderActions.vue';
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import customizable from '../../../mixins/customizable';
	import config from './config';

	import { mdiChevronLeft } from '@mdi/js';

	import header from '../mixins/header';

	const Props = Vue.extend({
		props: {
			value: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config), header);

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		},
		components: { HeaderActions }
	})
	export default class HeaderDrawer extends MixinsDeclaration {

		closeDrawerIcon = mdiChevronLeft;

		/** emit the logout event and close the drawer */
		logout() {
			this.clickLogout();
			this.toggleDrawer(false);
		}

		/** emit the action index number and close the drawer */
		action(index: number) {
			this.clickAction(index);
			this.toggleDrawer(false);
		}

		// open/close the drawer
		toggleDrawer(value: boolean) {
			this.$emit('change', value);
		}
	}
</script>

<style lang="scss" scoped>
</style>
