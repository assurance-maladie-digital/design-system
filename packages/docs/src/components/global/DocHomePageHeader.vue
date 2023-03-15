<template>
	<div class="doc-home-page-header d-flex flex-column w-100">
		<h1 class="primary--text text-md-h2 text-sm-h3 text-h5 font-weight-medium mb-6 mt-n1">
			Un Design System pour<br>
			l’Assurance Maladie
		</h1>

		<div class="d-flex flex-wrap flex-grow-1 justify-space-between max-width-none ma-n2">
			<p
				v-if="state === StateEnum.RESOLVED"
				class="ma-2"
			>
				<span class="text-h6">
					{{ version }}
				</span>

				<span class="d-block grey--text">
					Dernière publication {{ releaseDate }}
				</span>
			</p>

			<div class="d-flex flex-wrap align-center max-width-none ma-n1">
				<a
					href="https://netlify.com"
					class="d-flex ma-3"
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
					class="text-none ma-3"
				>
					<VIcon class="mr-2">
						{{ githubIcon }}
					</VIcon>

					GitHub
				</VBtn>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiGithub } from '@mdi/js';

	import { StateEnum } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

	import { formatReleaseDate } from '../../functions/formatReleaseDate';
	import { getLatestRelease } from '../../services/github/api';

	import { Fetch } from '../../decorators';

	@Component
	export default class DocHomePageHeader extends Vue {
		StateEnum = StateEnum;

		githubIcon = mdiGithub;

		state = StateEnum.IDLE;

		version: string | null = null;
		releaseDate: string | null = null;

		@Fetch
		async fetch(): Promise<void> {
			this.state = StateEnum.PENDING;

			const release = await getLatestRelease();

			this.state = StateEnum.RESOLVED;
			this.version = release.name;
			this.releaseDate = formatReleaseDate(release.date);
		}
	}
</script>

<style lang="scss" scoped>
	h1 {
		line-height: 1.25em !important;
	}
</style>
