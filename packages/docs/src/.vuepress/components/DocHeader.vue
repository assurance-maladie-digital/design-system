<template>
	<VAppBar
		app
		wrap
		align-center
		clipped-left
		:height="headerHeight"
		class="doc-header white no-flex"
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
			:class="{ 'logo-small': isMobile }"
		>
			<img
				src="../assets/logo.svg"
				alt="l'Assurance Maladie"
				class="d-block app-logo"
			>
		</RouterLink>

		<VLayout
			align-center
			class="doc-header-title pr-1 py-2"
		>
			<VDivider
				vertical
				inset
			/>

			<slot name="title">
				<VToolbarTitle :class="titleClasses">
					Design System
				</VToolbarTitle>
			</slot>
		</VLayout>
	</VAppBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DocHeader extends Vue {
		get isMobile() {
			return this.$vuetify.breakpoint.smAndDown;
		}

		get headerHeight(): number {
			return this.isMobile ? 56 : 80;
		}

		get titleClasses(): string {
			return this.isMobile ? 'subtitle-1 ml-2' : 'title ml-4';
		}
	}
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
		min-width: 155px;

		&.logo-small {
			min-width: 108px;
		}

		&:not([disabled]):hover {
			background: #eee;
		}

		&[disabled] {
			pointer-events: none;
		}
	}

	.app-logo {
		flex: 1;
	}
</style>
