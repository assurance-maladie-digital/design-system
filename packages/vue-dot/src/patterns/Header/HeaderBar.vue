<template>
	<div>
		<VAppBar
			class="headerBar"
			v-bind="$attrs"
			:app="app"
			:elevation="4"
			cipped-left
			:height="$vuetify.breakpoint.xs ? '40' : '80'"
			:extension-height="$vuetify.breakpoint.xs ? '36' : '48'"
		>
			<VAppBarNavIcon
				v-if="showNavIcon"
				@click.stop="$emit('click:menu'); showActionList = !showActionList"
			/>

			<img
				:alt="locales.logoBtn.alt"
				src="../../assets/logo.svg"
				class="d-block"
				:height="$vuetify.breakpoint.xs ? '40' : '80'"
				@click="$emit('home')"
			>

			<VDivider
				vertical
				inset
				class="primary"
			/>

			<slot name="logo">
				<VToolbarTitle
					class="body-1 ml-md-4 ml-1"
				>
					{{ title }}
				</VToolbarTitle>
			</slot>
			<VSpacer />

			<HeaderBarMenu
				v-if="!$vuetify.breakpoint.xs"
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

			<template
				v-if="navigationList || breadcrumb || search"
				#extension
			>
				<VToolbar
					color="primary"
					class="px-4"
					:height="$vuetify.breakpoint.xs ? '36' : '48'"
				>
					<VBtn
						v-if="back && breadcrumb"
						icon
						small
						dark
						@click.prevent="$emit('return')"
					>
						<VIcon
							color="white"
						>
							{{ mdiArrowLeft }}
						</VIcon>
					</VBtn>
					<VCol
						v-if="breadcrumb"
						class="white--text text-no-wrap"
					>
						{{ breadcrumb }}
					</VCol>
					<VDivider
						v-if="breadcrumb"
						vertical
						inset
						class="white mx-sm-4 mr-2 mb-2"
					/>
					<VSelect
						v-if="navigationList && $vuetify.breakpoint.xs"
						v-model="tab"
						dark
						hide-details
						:items="NavSelectItems"
					/>
					<VTabs
						v-else-if="navigationList"
						v-model="tab"
						:show-arrows="true"
						dark
						background-color="transparent"
					>
						<VTabsSlider />

						<VTab
							v-for="(item,i) in navigationList"
							:key="i"
						>
							{{ item }}
						</VTab>
					</VTabs>
					<VSpacer />
					<VBtn
						icon
						small
						color="white"
					>
						<VIcon>
							{{ mdiMagnify }}
						</VIcon>
					</VBtn>
				</VToolbar>
			</template>
		</VAppBar>
		<HeaderBarDrawer
			v-model="showActionList"
			:app="app"
			temporary
			fixed
			:clipped="clipped"
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
	import { mdiArrowLeft, mdiMagnify, mdiAccount, mdiExitToApp } from '@mdi/js';

	import HeaderBarMenu from './HeaderBarMenu.vue';
	import HeaderBarDrawer from './HeaderBarDrawer.vue';

	import { mapState } from 'vuex';

	const Props = Vue.extend({
		props: {
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
			search: {
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
				type: [Array, Object],
				default: () => []
			}
		}
	});

/** The Header of the application */
@Component<HeaderBar>({
  components: {
    HeaderBarMenu, HeaderBarDrawer
  }
})
	export default class HeaderBar extends Props {
		locales = locales;
		mdiArrowLeft = mdiArrowLeft;
		mdiMagnify = mdiMagnify;
		mdiAccount = mdiAccount;
		mdiExitToApp = mdiExitToApp;
		showActionList = false;
		clipped = true;

		tab = null;

		get showNavIcon() {
			const show = this.$vuetify.breakpoint.xs && (this.actionsList.length > 0 || this.loggedIn);
			if (!show) {
			this.showActionList = false;
			}
			return show;
		}

		get NavSelectItems() {
			return this.navigationList.map((item, index) => {
			return { text: item, value: index };
			});
		}
	}
</script>

<style lang="scss" scoped>
.headerBar ::v-deep .v-toolbar__extension {
  padding: 4px 0px;
}

.headerBar ::v-deep .v-toolbar__content {
  padding: 4px 16px;
}
</style>
