<template>
	<VAppBar
		align-center
		height="75"
		class="no-flex"
	>
		<RouterLink
			<% if (i18n) { %>:aria-label="$t('components.layout.appHeader.logoBtn.label')"<% } else { %>aria-label="Accueil"<% } %>
			<% if (i18n) { %>:to="$t('components.layout.appHeader.logoBtn.link')"<% } else { %>:to="{
				name: 'home'
			}"<% } %>
			exact
			class="logo-link"
		>
			<img
				<% if (i18n) { %>:alt="$t('components.layout.appHeader.logoBtn.alt')"<% } else { %>alt="l'Assurance Maladie"<% } %>
				src="../../assets/logo.svg"
				class="d-block mx-auto logo"
			>
		</RouterLink>

		<VDivider
			vertical
			inset
		/>

		<h1 class="title grey--text text--darken-3 ml-4">
			<% if (i18n) { %>{{ $t('components.layout.appHeader.title') }}<% } else { %>Projet <%= name %><% } %>
		</h1>

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
	export default class Header extends Vue {
		get maintenance() {
			return MAINTENANCE === 'true';
		}
	}
</script>

<style lang="scss" scoped>
	.logo-link {
		min-width: 155px;

		&:hover {
			background: #eee;
		}
	}

	.logo {
		height: 75px;
		padding: 8px;
	}
</style>
