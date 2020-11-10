<template>
	<VAppBar
		height="80"
		color="white"
		class="app-header flex-grow-0"
	>
		<RouterLink<% if (i18n) { %>
			:aria-label="$t('components.layout.appHeader.logoBtn.label')"<% } %>
			:to="{
				name: 'home'
			}"
			:disabled="maintenance"<% if (!i18n) { %>
			aria-label="Accueil"<% } %>
			exact
			class="app-logo-link"
		>
			<img
				<% if (i18n) { %>:alt="$t('components.layout.appHeader.logoBtn.alt')"<% } else { %>alt="l'Assurance Maladie"<% } %>
				src="@/assets/logo.svg"
				width="155px"
			>
		</RouterLink>

		<div class="d-flex align-center flex-grow-1 app-header-title pr-1 py-2">
			<VDivider
				vertical
				inset
			/>

			<slot name="title">
				<VToolbarTitle class="text-h6 ml-4 ml-1">
					<% if (i18n) { %>{{ $t('components.layout.appHeader.title') }}<% } else { %>Projet <%= name %><% } %>
				</VToolbarTitle>
			</slot>
		</div>

		<HeaderMenu v-if="!maintenance" />
	</VAppBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import HeaderMenu from './HeaderMenu.vue';

	declare const MAINTENANCE: string;

	/** The Header of the application */
	@Component({
		components: {
			HeaderMenu
		}
	})
	export default class AppHeader extends Vue {
		get maintenance(): boolean {
			return MAINTENANCE === 'true';
		}
	}
</script>

<style lang="scss" scoped>
	.app-header ::v-deep .v-toolbar__content {
		padding: 0;
	}

	.app-header-title {
		height: 100%;
	}

	.app-logo-link {
		height: 100%;
		display: flex;
		align-items: center;

		&:not([disabled]):hover {
			background: #eee;
		}

		&[disabled] {
			pointer-events: none;
		}
	}
</style>
