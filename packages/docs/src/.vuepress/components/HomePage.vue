<template>
	<div class="home-page d-flex white">
		<div class="home-content d-flex flex-column align-start justify-center flex-grow-1 px-16 py-10">
			<div class="d-flex align-center flex-wrap ma-n4">
				<img
					width="200px"
					src="../assets/logo-am.svg"
					alt="l'Assurance Maladie"
					class="logo-am ma-4"
				>

				<img
					width="90px"
					src="../assets/logo-digital.svg"
					alt="Le Digital de l'Assurance Maladie"
					class="logo-digital ma-4"
				>
			</div>

			<h1 class="home-title text-h3 mt-16 font-weight-bold">
				Un Design System pour l'Assurance Maladie
			</h1>

			<h2 class="text-h6 pt-10">
				v{{ version }}
			</h2>

			<p class="mb-10">
				Dernière mise à jour {{ lastUpdated }}
			</p>

			<VBtn
				color="primary"
				to="/composants/copy-btn"
				class="home-cta mb-6"
				large
			>
				Commencer
			</VBtn>
		</div>

		<img
			src="../assets/design-system-background.png"
			class="home-background"
			alt=""
		>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { version } from '../../../package.json';

	import dayjs from 'dayjs';

	const LAST_UPDATED = '2020-09-18';

	@Component
	export default class HomePage extends Vue {
		version = version;

		get lastUpdated(): string {
			const lastUpdated = dayjs(LAST_UPDATED);
			const days = dayjs().diff(lastUpdated, 'day');

			if (days === 0) {
				return 'aujourd\'hui';
			}

			if (days === 1) {
				return `${days} jour`;
			}

			if (days >= 30) {
				const month = dayjs().diff(lastUpdated, 'month');

				return `il y a ${month} mois`;
			}

			return `${days} jours`;
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

	.home-cta {
		// Set color to avoid light button during hydration
		background-color: #003463 !important;
	}

	.home-background {
		width: 50%;
		height: 100%;
		object-fit: cover;
	}

	@media only screen and (max-width: 960px) {
		.home-content {
			padding: 24px 40px !important;
		}

		.logo-am {
			width: 135px;
		}

		.logo-digital {
			width: 60px;
		}

		.home-title {
			font-size: 1.5rem !important;
			line-height: 2rem !important;
		}
	}

	@media only screen and (max-width: 600px) {
		.home-page {
			flex-direction: column-reverse;
		}

		.home-background {
			width: 100%;
			height: 200px;
		}
	}
</style>
