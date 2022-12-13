<template>
	<FooterBar v-bind="docProps">
		<template #logo>
			<HeaderBrandSection theme="ameli" />
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
			<p class="text--secondary my-3">
				Contenu supplémentaire.
			</p>
		</template>

		<template #append>
			<p class="text--secondary my-3 mx-4">
				Informations partenaires
			</p>
		</template>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import HeaderBrandSection from '@cnamts/vue-dot/src/patterns/LogoBrandSection';

	import { mdiTwitter } from '@mdi/js';

	@Component({
		components: {
			HeaderBrandSection
		}
	})
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
