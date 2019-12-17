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
				class="d-block"
				:alt="locales.logoBtn.alt"
				:height="$vuetify.breakpoint.smAndDown ? '40' : '80'"
				@click="$emit('home')"
			>

			<VDivider
				class="primary"
				v-bind="options.divider"
			/>
			<!-- title slot -->
			<slot name="title">
				<VToolbarTitle
					v-bind="options.title"
					class="body-1 ml-md-4 ml-1 header-title"
				>
					{{ title }}
				</VToolbarTitle>
			</slot>
			<VSpacer />
			<!-- menu right -->
			<HeaderMenu
				:account-text="accountText"
				:logged-in="loggedIn"
				:info="info"
				:hide-user-icon="hideUserIcon"
				:actions-list="actionsList"
				:first-name="firstName"
				:last-name="lastName"
				@menu:change="menuChanged"
				@click:menu="clickMenu"
				@click:action="clickAction"
				@click:logout="clickLogout"
			/>
			<!-- tool bar in extension only if searchable or with a breadcrum or with a navigation list  -->
			<template
				v-if="navigationList.length || breadcrumb || searchable"
				#extension
			>
				<HeaderToolBar
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
		<HeaderDrawer
			v-if="showNavDrawer"
			v-model="showActionList"
			:app="app"
			:info="info"
			:actions-list="actionsList"
			:first-name="firstName"
			:last-name="lastName"
			:logged-in="loggedIn"
			@click:action="clickAction"
			@click:logout="clickLogout"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import locales from './locales';
	import Component, { mixins } from 'vue-class-component';

	import customizable from '../../mixins/customizable';
	import config from './config';
	import header from './mixins/header';

	// components for the header bar
	import HeaderMenu from './HeaderMenu/HeaderMenu.vue';
	import HeaderDrawer from './HeaderDrawer/HeaderDrawer.vue';
	import HeaderToolBar from './HeaderToolBar/HeaderToolBar.vue';

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

	const MixinsDeclaration = mixins(Props, customizable(config), header);

	/** The Header of the application */
	@Component({
		components: { HeaderDrawer, HeaderMenu, HeaderToolBar }
	})
	export default class HeaderBar extends MixinsDeclaration {
		showActionList = false;

		locales = locales;

		/**
		 * calculate if the drawer can be viewed in mobile:
		 * logged in user
		 * or actionsList is not empty
		 */
		get showNavDrawer() {
			return (
				this.$vuetify.breakpoint.smAndDown &&
				(this.actionsList.length > 0 || this.loggedIn)
			);
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
