<template>
  <v-card
    class="mx-auto overflow-hidden"
    height="400"
    width="80%"
  >
    <v-app-bar
      color=" accent-4"
	>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title class="text-color-white">ExternalLinks: top left</v-toolbar-title>
    </v-app-bar>
     <ExternalLinks :items="links" position="top left" nudgeTop=60 />
  </v-card>
</template>
<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
    import { ExternalLink } from '../../../../../vue-dot/src/elements/ExternalLinks/types';

	@Component({
		inheritAttrs: false
	})
	export default class ExternalLinksUsage extends Vue {

        clicked = true;
		drawer=true;
		links:ExternalLink[]  = [
			{
				href: 'https://www.ameli.fr/professionnel-de-la-lpp',
				text: 'Vers ameli pro'
			},
			{
				href: 'https://www.impots.gouv.fr/portail/',
				text: 'Impots GOUV'
			},
			{
				href: 'https://github.com/assurance-maladie-digital',
				text: 'Design System'
			},
			{
				href: 'https://www.lassuranceretraite.fr/portail-info/home.html',
				text: 'Assurance retraite'
			}
			,
			{
				href: 'https://www.lassuranceretraite.fr/portail-info/home.html',
				text: 'Assurance maladie'
			}
			,
			{
				href: 'https://www.lassuranceretraite.fr/portail-info/home.html',
				text: 'Assurance'
			}
		];
	}
</script>
<style lang="scss">
	.menuClass{
    border:1px solid red!important
}
</style>
