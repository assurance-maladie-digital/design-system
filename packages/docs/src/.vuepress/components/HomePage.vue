<template>
	<div
		class="home-page d-flex white"
		:class="{ 'flex-column-reverse': xs }"
	>
		<div
			class="d-flex flex-column align-start justify-center flex-grow-1"
			:class="smAndDown ? 'px-10 py-6' : 'px-16 py-10'"
		>
			<div class="d-flex align-center flex-wrap ma-n4">
				<img
					:width="smAndDown ? '135px' : '200px'"
					src="../assets/logo-am.svg"
					alt="l'Assurance Maladie"
					class="ma-4"
				>

				<img
					:width="smAndDown ? '60px' : '90px'"
					src="../assets/logo-digital.svg"
					alt="Le Digital de l'Assurance Maladie"
					class="ma-4"
				>
			</div>

			<h1
				class="home-title text-h3 mt-16 font-weight-bold"
				:class="{ 'text-h5': smAndDown }"
			>
				Un Design System pour l'Assurance Maladie
			</h1>

			<h2 class="text-h6 pt-10">
				v{{ version }}
			</h2>

			<p class="mb-10">
				Dernière mise à jour il y a {{ lastUpdated }}
			</p>

			<VBtn
				color="primary"
				to="/composants/copy-btn"
				class="mb-6"
				large
			>
				Commencer
			</VBtn>
		</div>

		<img
			src="../assets/design-system-background.png"
			alt=""
			class="home-background"
			:class="{ 'horizontal': $vuetify.breakpoint.xs }"
		>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { version } from '../../../package.json';

	@Component
	export default class HomePage extends Vue {
		version = version;
		lastUpdated = '6 jours';

		isClient = false;

		mounted() {
			this.isClient = true;
		}

		get smAndDown(): boolean {
			if (!this.isClient) {
				return false;
			}

			return this.$vuetify.breakpoint.smAndDown;
		}

		get xs(): boolean {
			if (!this.isClient) {
				return false;
			}

			return this.$vuetify.breakpoint.xs;
		}
	}
</script>

<style lang="scss" scoped>
	.home-page {
		height: 100%;
	}

	.home-title {
		max-width: 750px;
	}

	.home-background {
		width: 50%;
		height: 100%;
		object-fit: cover;

		&.horizontal {
			width: 100%;
			height: 200px;
		}
	}
</style>
