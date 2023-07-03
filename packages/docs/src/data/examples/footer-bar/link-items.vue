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
				to: '/',
				ariaLabel: 'Accueil'
			},
			{
				text: 'Conditions générales d’utilisation',
				to: '/',
				ariaLabel: 'Conditions générales d’utilisation'
			},
			{
				text: 'Mentions légales',
				to: '/',
				ariaLabel: 'Mentions légales'
			},
			{
				text: 'Gestion des cookies',
				to: '/',
				ariaLabel: 'Gestion des cookies'
			},
			{
				text: 'Accessibilité : non conforme',
				to: '/',
				ariaLabel: 'Accessibilité : non conforme'
			},
			{
				text: 'Plan du site',
				to: '/',
				ariaLabel: 'Plan du site'
			},
			{
				text: 'Aide',
				href: 'https://www.ameli.fr/assure/aide',
				ariaLabel: 'Aide'
			}
		];
	}
</script>
