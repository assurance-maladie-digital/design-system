<template>
	<VApp>
		<VMain>
			<div class="home-page d-flex h-100 white">
				<div class="home-content d-flex flex-column align-start flex-grow-1 px-16 py-10">
					<div class="d-flex flex-column justify-center flex-grow-1">
						<img
							width="250px"
							height="114px"
							src="~/assets/logo-am.svg"
							alt="l'Assurance Maladie"
							class="logo-am"
						>

						<h1 class="home-title text-lg-h3 text-md-h4 text-sm-h5 text-h5 my-10 mt-sm-16 font-weight-bold">
							Un Design System pour l'Assurance Maladie
						</h1>

						<template v-if="state === 'idle' || state === 'pending'">
							<HeaderLoading
								width="130px"
								height="2rem"
								class="mb-2"
							/>

							<HeaderLoading
								width="170px"
								height="1.25rem"
								class="mb-10"
							/>
						</template>

						<template v-else-if="state === 'resolved'">
							<h2 class="text-h6">
								{{ version }}
							</h2>

							<p class="mb-10">
								Dernière publication {{ releaseDate }}
							</p>
						</template>

						<div class="d-flex flex-wrap max-width-none ma-n3">
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

					<a
						href="https://netlify.com"
						target="_blank"
						rel="noopener noreferrer"
						class="d-flex flex-column text--primary text-decoration-none text-subtitle-1 mt-16"
					>
						<img
							src="https://www.netlify.com/img/global/badges/netlify-light.svg"
							alt="Déployé par Netlify"
							width="132px"
							height="59px"
							class="mt-1"
						/>
					</a>
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

	import { STATE_ENUM } from '../types/enums/StateEnum';

	import { formatReleaseDate } from '../functions/formatReleaseDate';
	import { getLatestRelease } from '../services/github/api';

	@Component
	export default class Index extends Vue {
		githubIcon = mdiGithub;

		state = STATE_ENUM.idle;

		version: string | null = null;
		releaseDate: string | null = null;

		async mounted() {
			this.state = STATE_ENUM.pending;

			const release = await getLatestRelease();

			this.state = STATE_ENUM.resolved;
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
			width: 175px;
			height: 80px;
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
