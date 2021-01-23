<template>
	<VAppBar
		app
		fixed
		height="80"
		clipped-left
		color="white"
		class="doc-header flex-grow-0"
	>
		<VAppBarNavIcon
			aria-label="Afficher/masquer le menu"
			class="ml-2 ml-sm-3 hidden-lg-and-up"
			@click="$emit('drawer-action')"
		/>

		<RouterLink
			to="/"
			nuxt
			exact
			aria-label="Accueil"
			class="doc-logo px-2"
		>
			<img
				src="~/assets/logo-am-no-text.svg"
				alt="l'Assurance Maladie"
				width="156px"
			>
		</RouterLink>

		<VDivider
			class="d-none d-md-block"
			vertical
			inset
		/>

		<VToolbarTitle class="d-none d-md-block text-h6 ml-4">
			Design System
		</VToolbarTitle>

		<VSpacer />

		<SearchField />
	</VAppBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import SearchField from './SearchField.vue';

	@Component({
		components: {
			SearchField
		}
	})
	export default class DocHeader extends Vue {}
</script>

<style lang="scss" scoped>
	.doc-header ::v-deep .v-toolbar__content {
		padding: 0;
	}

	.doc-logo,
	.doc-header-title {
		height: 100%;
	}

	.doc-logo {
		min-width: 172px;
		display: flex;
		align-items: center;

		&:not([disabled]):hover {
			background: #eee;
		}

		&[disabled] {
			pointer-events: none;
		}
	}

	@media only screen and (max-width: 425px) {
		.spacer,
		.doc-logo {
			display: none !important;
		}
	}
</style>
