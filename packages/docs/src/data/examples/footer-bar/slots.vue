<template>
	<FooterBar v-bind="docProps">
		<template #logo>
			<LogoBrandSection theme="ameli" />
		</template>

		<template #social-media-links>
			<VBtn
				icon
				aria-label="Suivez-nous sur Twitter"
				href="https://twitter.com/Assur_Maladie"
				class="mr-4"
			>
				<VIcon>
					{{ twitterIcon }}
				</VIcon>
			</VBtn>
		</template>

		<template #default>
			<p class="text--secondary mb-0">
				Contenu supplémentaire.
			</p>
		</template>

		<template #append>
			<li class="text--secondary my-3 mx-4">
				Informations partenaires
			</li>
		</template>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiTwitter } from '@mdi/js';

	@Component
	export default class FooterBarSlots extends Vue {
		docProps = {
			sitemapRoute: '/',
			cguRoute: '/',
			cookiesRoute: '/',
			legalNoticeRoute: '/',
			a11yStatementRoute: '/'
		};

		twitterIcon = mdiTwitter;
	}
</script>
