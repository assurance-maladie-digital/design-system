<template>
	<FooterBar 
		complex-mode 
		:centerSlotsNumber="0"
		:custom-socials-list="socialsList">
		<template #default>
			<p class="grey--text text--darken-1 my-3 mx-4">
				Slot par défaut
			</p>
		</template>
	</FooterBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { mdiFacebook, mdiInstagram, mdiTwitter, mdiYoutube } from '@mdi/js';

	@Component
	export default class FooterBarSlots extends Vue {
		socialsList = [
			{ icon: mdiInstagram, link: 'www.instagram.com' },
			{ icon: mdiFacebook, link: 'https://fr-fr.facebook.com/' },
			{ icon: mdiTwitter, link: 'https://twitter.com/' },
			{ icon: mdiYoutube, link: 'https://www.youtube.com/' }
		];
	}
</script>
