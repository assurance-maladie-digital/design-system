<template>
	<FooterBar
		v-bind="docProps"
		:social-media-links="socialMediaLinks"
	>
		<p class="text--secondary mb-0">
			Contenu supplémentaire.
		</p>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiFacebook, mdiInstagram, mdiTwitter, mdiYoutube } from '@mdi/js';

	@Component
	export default class FooterBarSocialMediaLinks extends Vue {
		docProps = {
			sitemapRoute: '/',
			cguRoute: '/',
			cookiesRoute: '/',
			legalNoticeRoute: '/',
			a11yStatementRoute: '/'
		};

		socialMediaLinks = [
			{
				icon: mdiInstagram,
				link: 'https://instagram.com/'
			},
			{
				icon: mdiFacebook,
				link: 'https://facebook.com/'
			},
			{
				icon: mdiTwitter,
				link: 'https://twitter.com/'
			},
			{
				icon: mdiYoutube,
				link: 'https://youtube.com/'
			}
		];
	}
</script>
