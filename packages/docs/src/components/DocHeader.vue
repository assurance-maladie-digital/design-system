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
			:aria-label="drawerActionLabel"
			class="ml-2 ml-sm-3 hidden-lg-and-up"
			@click="emitDrawerEvent"
		/>

		<div class="doc-header-logo px-2">
			<img
				src="~/assets/logo-am-no-text.svg"
				alt="l’Assurance Maladie"
				width="156px"
			>
		</div>

		<VDivider
			class="d-none d-md-block"
			vertical
			inset
		/>

		<VToolbarTitle class="d-none d-md-block text-h6 ml-4">
			Design System
		</VToolbarTitle>
	</VAppBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			drawer: {
				type: Boolean,
				default: false
			}
		}
	})

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocHeader extends MixinsDeclaration {
		get drawerActionLabel(): string {
			const action = this.drawer ? 'Masquer' : 'Afficher';

			return `${action} le menu`;
		}

		emitDrawerEvent(): void {
			this.$emit('update:drawer', !this.drawer);
		}
	}
</script>

<style lang="scss" scoped>
	.doc-header ::v-deep .v-toolbar__content {
		padding: 0;
	}

	.doc-header-logo,
	.doc-header-title {
		height: 100%;
	}

	.doc-header-logo {
		min-width: 172px;
		display: flex;
		align-items: center;
	}
</style>
