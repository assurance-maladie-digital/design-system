<template>
	<VAppBar
		app
		height="80"
		clipped-left
		color="white"
		class="doc-header flex-grow-0"
	>
		<VAppBarNavIcon
			class="ml-2 hidden-lg-and-up"
			@click="$emit('drawer-action')"
		/>

		<RouterLink
			to="/"
			exact
			aria-label="Accueil"
			class="app-logo-link"
		>
			<img
				src="../assets/logo-am.svg"
				alt="l'Assurance Maladie"
				class="px-4 py-3"
				width="155px"
			>
		</RouterLink>

		<div class="d-flex align-center flex-grow-1 doc-header-title pr-1 py-2">
			<VDivider
				vertical
				inset
			/>

			<slot name="title">
				<VToolbarTitle class="text-h6 ml-4">
					Design System
				</VToolbarTitle>
			</slot>
		</div>
	</VAppBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DocHeader extends Vue {}
</script>

<style lang="scss" scoped>
	.doc-header ::v-deep .v-toolbar__content {
		padding: 0;
	}

	.doc-header-title {
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
