<template>
	<div>
		<VAppBar
			class="header-bar"
			v-bind="$attrs"
			:app="app"
			:elevation="4"
			:height="$vuetify.breakpoint.smAndDown ? '40' : '80'"
			:extension-height="$vuetify.breakpoint.smAndDown ? '36' : '48'"
		>
			<!-- icon menu for mobile -->
			<VAppBarNavIcon
				v-if="showNavDrawer"
				@click.stop="$emit('click:menu'); showActionList = !showActionList"
			/>
			<!-- logo CNAM -->
			<img
				:alt="locales.logoBtn.alt"
				src="../../assets/logo.svg"
				class="d-block"
				:height="$vuetify.breakpoint.smAndDown ? '40' : '80'"
				@click="$emit('home')"
			>

			<VDivider
				vertical
				inset
				class="primary"
			/>
			<!-- title slot -->
			<slot name="title">
				<VToolbarTitle
					class="body-1 ml-md-4 ml-1 header-title"
				>
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
				@click:menu="$emit('click:menu')"
				@click:action="$emit('click:action', $event)"
				@click:logout="$emit('click:logout')"
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
					@back="$emit('back')"
					@search="$emit('search', $event)"
				/>
			</template>
		</VAppBar>
		<!-- drawer -->
		<HeaderBarDrawer
			v-if="showNavDrawer"
			v-model="showActionList"
			:app="app"
			temporary
			fixed
			:info="info"
			:actions-list="actionsList"
			:firstname="firstname"
			:lastname="lastname"
			@click:action="$emit('click:action', $event)"
			@click:logout="$emit('click:logout')"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import locales from './locales';
	import Component from 'vue-class-component';

	import HeaderBarMenu from './HeaderBarMenu.vue';
	import HeaderBarDrawer from './HeaderBarDrawer.vue';
	import HeaderBarTool from './HeaderBarTool.vue';

	import { mapState } from 'vuex';
	import { watch } from 'fs';
	import { log } from '../../../../cli-helpers';

	const Props = Vue.extend({
		props: {
			// tab number
			value: {
				type: Number,
				default: 0
			},
			logo: {
				type: String || Object,
				default: null
			},
			title: {
				type: String,
				required: true
			},
			breadcrumb: {
				type: String,
				default: null
			},
			app: {
				type: Boolean,
				default: true
			},
			back: {
				type: Boolean,
				default: false
			},
			searchable: {
				type: Boolean,
				default: false
			},
			navigationList: {
				type: Array,
				default: null
			},
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
				type: [Array, String],
				default: () => []
			}
		}
	});

	/** The Header of the application */
	@Component<HeaderBar>({
		components: {
			HeaderBarMenu, HeaderBarDrawer, HeaderBarTool
		}
	})
	export default class HeaderBar extends Props {
		locales = locales;
		showActionList = false;

		/**
		 * calculate if the drawer can be viewed in mobile:
		 * logged in user
		 * or actionsList is not empty
		 */
		get showNavDrawer() {
			const show = this.$vuetify.breakpoint.smAndDown && (this.actionsList.length > 0 || this.loggedIn);
			if (!show) {
			this.showActionList = false;
			}
			return show;
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
