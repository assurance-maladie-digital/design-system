<template>
	<div>
		<VAppBar
			class="header-bar"
			v-bind="{...$attrs, ...options.appBar}"
			:app="app"
			:elevation="4"
			:height="$vuetify.breakpoint.smAndDown ? '40' : '80'"
			:extension-height="$vuetify.breakpoint.smAndDown ? '36' : '48'"
		>
			<!-- icon menu for mobile -->
			<VAppBarNavIcon
				v-if="showNavDrawer"
				@click.stop="clickMenu(); showActionList = !showActionList"
			/>
			<!-- logo CNAM -->
			<img
				src="../../assets/logo.svg"
				v-bind="options.image"
				:alt="locales.logoBtn.alt"
				:height="$vuetify.breakpoint.smAndDown ? '40' : '80'"
				@click="$emit('home')"
			>

			<VDivider
				v-bind="options.divider"
			/>
			<!-- title slot -->
			<slot name="title">
				<VToolbarTitle v-bind="options.title">
					{{ title }}
				</VToolbarTitle>
			</slot>
			<VSpacer />
			<!-- menu right -->
			<HeaderBarMenu
				:account-text="accountText"
				:logged-in="loggedIn"
				:info="info"
				:hide-user-icon="hideUserIcon"
				:actions-list="actionsList"
				:firstname="firstname"
				:lastname="lastname"
				@click:menu="clickMenu"
				@click:action="clickAction"
				@click:logout="clickLogout"
			/>
			<!-- tool bar in extension -->
			<template
				v-if="navigationList || breadcrumb || searchable"
				#extension
			>
				<HeaderBarTool
					:value="value"
					:breadcrumb="breadcrumb"
					:back="back"
					:searchable="searchable"
					:navigation-list="navigationList"
					@input="$emit('input',$event)"
					@back="emitBack"
					@search="emitSearch"
				/>
			</template>
		</VAppBar>
		<!-- drawer -->
		<HeaderBarDrawer
			v-if="showNavDrawer"
			v-model="showActionList"
			:app="app"
			:info="info"
			:actions-list="actionsList"
			:firstname="firstname"
			:lastname="lastname"
			:logged-in="loggedIn"
			@click:action="clickAction"
			@click:logout="clickLogout"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import locales from './locales';
	import Component from 'vue-class-component';

	import customizable, { Options } from '../../mixins/customizable';
	import config from './config/headerBar';
	import header from './mixins/header';

	// components for the header bar
	import HeaderBarMenu from './HeaderBarMenu.vue';
	import HeaderBarDrawer from './HeaderBarDrawer.vue';
	import HeaderBarTool from './HeaderBarTool.vue';

	const Props = Vue.extend({
		props: {
			// tab number
			value: {
				type: Number,
				default: 0
			},
			title: {
				type: String,
				required: true
			},
			// default app is true
			app: {
				type: Boolean,
				default: true
			}
		}
	});

	/** The Header of the application */
	@Component<HeaderBar>({
		components: {
			HeaderBarMenu, HeaderBarDrawer, HeaderBarTool
		},
		mixins: [
			// Default configuration
			customizable(config),
			header
		]
	})
	export default class HeaderBar extends Props {

		// Mixin computed data
		options!: Options;
		actionsList!: [string];
		loggedIn!: boolean;

		locales = locales;
		showActionList = false;

		/**
		 * calculate if the drawer can be viewed in mobile:
		 * logged in user
		 * or actionsList is not empty
		 */
		get showNavDrawer() {
			return this.$vuetify.breakpoint.smAndDown && (this.actionsList.length > 0 || this.loggedIn);
		}

	}
</script>

<style lang="scss" scoped>
.header-title {
	max-width: 300px;
}

.header-bar ::v-deep .v-toolbar__extension {
  padding: 4px 0px;
}

.header-bar ::v-deep .v-toolbar__content {
  padding: 4px 16px;
}
</style>
