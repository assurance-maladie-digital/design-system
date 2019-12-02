<template>
	<VAppBar
		class="headerBar"
		v-bind="$attrs"
		:elevation="4"
		:height="$vuetify.breakpoint.smAndDown ? '40' : '80'"
	>
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

		<slot
			name="logo"
		>
			<v-toolbar-title
				class="body-1 ml-md-4 ml-1"
			>
				{{ title }}
			</v-toolbar-title>
		</slot>
		<VSpacer />

		<slot name="items" />
	</VAppBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import locales from './locales';
	import Component from 'vue-class-component';

	import HeaderBarMenu from './HeaderBarMenu.vue';

	import { mapState } from 'vuex';

	const Props = Vue.extend({
		props: {
			logo: {
				type: String || Object,
				default: null
			},
			title: {
				type: String,
				required: true
			}
		}
	});

	/** The Header of the application */
	@Component<HeaderBar>({
		components: {
			HeaderBarMenu
		}
	})
	export default class HeaderBar extends Props {
		locales = locales;

	}
</script>

<style lang="scss" scoped>

.headerBar ::v-deep .v-toolbar__content {
	padding: 4px 0px;
}
</style>
