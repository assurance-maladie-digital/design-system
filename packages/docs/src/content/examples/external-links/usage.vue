<template>
        <v-card>
          <v-toolbar>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <template v-slot:extension>
              <v-fab-transition>

              </v-fab-transition>
            </template>
          </v-toolbar>
          <v-card-text
            style="height: 300px;"
            class="grey lighten-5 text-center"
          >
		     <ExternalLinks  :items="links" position="top right" nudgeTop=112 />
          </v-card-text>
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
