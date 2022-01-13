<template>
	<div class="doc-home-page-header w-100">
		<div class="d-flex flex-column flex-md-row flex-wrap mb-14 w-100">
			<h1 class="primary--text text-md-h3 text-sm-h4 text-h5 mr-4 mt-n1">
				Un Design System pour<br>
				l’Assurance Maladie
			</h1>

			<div class="d-flex flex-column flex-grow-1 mt-4 mt-md-0">
				<p
					v-if="state === 'resolved'"
					class="text-left text-md-right mb-6"
				>
					<span class="text-h6">
						{{ version }}
					</span>

					<span class="d-block grey--text text--darken-1">
						Dernière publication {{ releaseDate }}
					</span>
				</p>

				<div class="d-flex align-center justify-start justify-md-end">
					<a
						href="https://netlify.com"
						class="d-flex mr-4"
					>
						<img
							src="https://www.netlify.com/img/global/badges/netlify-light.svg"
							alt="Déploiement par Netlify"
							width="93"
							height="42"
						/>
					</a>

					<VBtn
						href="https://github.com/assurance-maladie-digital/design-system"
						color="primary"
						height="42px"
						outlined
						class="text-none"
					>
						<VIcon class="mr-2">
							{{ githubIcon }}
						</VIcon>

						GitHub
					</VBtn>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiGithub } from '@mdi/js';

	import { STATE_ENUM } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

	import { formatReleaseDate } from '../../functions/formatReleaseDate';
	import { getLatestRelease } from '../../services/github/api';

	import { Fetch } from '../../decorators';

	@Component
	export default class DocHomePageHeader extends Vue {
		githubIcon = mdiGithub;

		state = STATE_ENUM.idle;

		version: string | null = null;
		releaseDate: string | null = null;

		@Fetch
		async fetch(): Promise<void> {
			this.state = STATE_ENUM.pending;

			const release = await getLatestRelease();

			this.state = STATE_ENUM.resolved;
			this.version = release.version;
			this.releaseDate = formatReleaseDate(release.date);
		}
	}
</script>

<style lang="scss" scoped>
	h1 {
		line-height: 1.25em !important;
	}
</style>
