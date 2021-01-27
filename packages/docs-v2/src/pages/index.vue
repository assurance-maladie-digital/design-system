<template>
	<VApp>
		<VMain>
			<div class="home-page d-flex h-100 white">
				<div class="home-content d-flex flex-column align-start justify-center flex-grow-1 px-16 py-10">
					<div class="d-flex align-center flex-wrap no-max-width my-n2 mx-n4">
						<img
							width="250px"
							height="114px"
							src="~/assets/logo-am.svg"
							alt="l'Assurance Maladie"
							class="logo-am my-2 mx-4"
						>

						<img
							width="85px"
							height="85px"
							src="~/assets/logo-digital.svg"
							alt="Le Digital de l'Assurance Maladie"
							class="logo-digital my-2 mx-4"
						>
					</div>

					<h1 class="home-title text-lg-h3 text-md-h4 text-sm-h5 text-h5 my-10 mt-sm-16 font-weight-bold">
						Un Design System pour l'Assurance Maladie
					</h1>

					<template v-if="version && releaseDate">
						<h2 class="text-h6">
							{{ version }}
						</h2>

						<p class="mb-10">
							Dernière publication {{ releaseDate }}
						</p>
					</template>

					<div class="d-flex flex-wrap no-max-width ma-n3">
						<VBtn
							color="primary"
							to="/demarrer/introduction"
							class="getting-started-btn ma-3"
							large
						>
							Commencer
						</VBtn>

						<VBtn
							color="#24292e"
							href="https://github.com/assurance-maladie-digital/design-system"
							target="_blank"
							rel="noopener noreferrer"
							class="ma-3"
							outlined
							large
						>
							<VIcon class="mr-2">
								{{ githubIcon }}
							</VIcon>

							GitHub
						</VBtn>
					</div>
				</div>

				<picture class="home-background">
					<source srcset="~/assets/design-system-background.webp" type="image/webp">
					<source srcset="~/assets/design-system-background.png" type="image/png">
					<img src="~/assets/design-system-background.png" alt="">
				</picture>
			</div>
		</VMain>
	</VApp>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiGithub } from '@mdi/js';

	import { formatReleaseDate } from '../functions/formatReleaseDate';
	import { getLatestRelease } from '../services/github/api';

	@Component
	export default class Index extends Vue {
		githubIcon = mdiGithub;

		version: string | null = null;
		releaseDate: string | null = null;

		async mounted() {
			const release = await getLatestRelease();

			this.version = release.version;
			this.releaseDate = formatReleaseDate(release.date);
		}
	}
</script>

<style lang="scss" scoped>
	.home-page {
		height: 100vh;
	}

	.home-title {
		max-width: 750px;
	}

	.home-content {
		width: 50%;
	}

	.home-background {
		width: 50%;
		background: #2190d3;
		background: linear-gradient(180deg, #2190d3 0%, #2190d3 50%, #005297 100%);

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	@media only screen and (max-width: 960px) {
		.home-content {
			padding: 24px 40px !important;
		}

		.logo-am {
			width: 135px;
			height: 62px;
		}

		.logo-digital {
			width: 60px;
			height: 60px;
		}
	}

	@media only screen and (max-width: 600px) {
		.home-page {
			flex-direction: column-reverse;
		}

		.home-content {
			width: 100%;
		}

		.home-background {
			width: 100%;
			height: 200px;
		}

		a {
			flex-grow: 1;
		}
	}
</style>
