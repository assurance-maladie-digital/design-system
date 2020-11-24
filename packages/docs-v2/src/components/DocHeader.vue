<template>
	<VAppBar
		app
		fixed
		height="80"
		clipped-left
		color="white"
		class="doc-header flex-grow-0"
	>
		<div class="doc-logo-container d-flex align-center">
			<VAppBarNavIcon
				aria-label="Afficher/masquer le menu"
				class="ml-3 mr-2 hidden-lg-and-up"
				@click="$emit('drawer-action')"
			/>

			<RouterLink
				to="/"
				exact
				aria-label="Accueil"
				class="doc-logo-link"
			>
				<img
					src="~/assets/logo-am-no-text.svg"
					alt="l'Assurance Maladie"
					height="80px"
					width="155px"
				>
			</RouterLink>
		</div>

		<div class="d-flex align-center flex-grow-1 doc-header-title pr-1 py-2">
			<VDivider
				vertical
				inset
			/>

			<slot name="title">
				<VToolbarTitle class="text-h6 ml-3">
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
		width: 100%;
	}

	.doc-logo-link {
		height: 100%;
		min-width: 155px;
		display: flex;
		align-items: center;

		&:not([disabled]):hover {
			background: #eee;
		}

		&[disabled] {
			pointer-events: none;
		}
	}

	@media only screen and (max-width: 512px) {
		.doc-header {
			height: auto !important;

			::v-deep {
				.v-toolbar__content {
					align-items: flex-start;
					flex-direction: column;
					height: auto !important;
				}

				.doc-logo-container {
					padding-top: 6px;
					margin-left: 6px;
				}

				.doc-header-title {
					margin-top: 6px;
					padding-top: 6px !important;
					padding-bottom: 6px !important;
					border-top: 1px solid rgba(0, 0, 0, .12);
				}

				.v-toolbar__title {
					white-space: normal;
				}

				h1 {
					font-size: 1rem !important;
					font-weight: 700;
					line-height: 1.5rem;
					letter-spacing: .009375em !important;
				}
			}
		}
	}
</style>
