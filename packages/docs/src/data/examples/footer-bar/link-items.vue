<template>
	<FooterBar :link-items="linkItems" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { LinkItem } from '@cnamts/vue-dot/src/patterns/FooterBar/types';

	@Component
	export default class FooterBarLinkItems extends Vue {
		linkItems: LinkItem[] = [
			{
				text: 'Accueil',
				to: '/'
			},
			{
				text: 'Conditions générales d’utilisation',
				to: '/'
			},
			{
				text: 'Mentions légales',
				to: '/'
			},
			{
				text: 'Gestion des cookies',
				to: '/'
			},
			{
				text: 'Accessibilité : non conforme',
				to: '/'
			},
			{
				text: 'Plan du site',
				to: '/',
				ariaLabel: 'Plan du site'
			},
			{
				text: 'Aide',
				href: 'https://www.ameli.fr/assure/aide',
				ariaLabel: 'Aide (s’ouvre sur le site ameli.fr)',
				openInNewTab: true
			}
		];
	}
</script>
