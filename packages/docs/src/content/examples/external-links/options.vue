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
		     <ExternalLinks  position="top left" :vuetify-options="vuetifyOptions" nudgeTop=112 />
          </v-card-text>
        </v-card>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ExternalLinksOptions extends Vue {
		vuetifyOptions = {
             btn: {
		        tile: true,
		        minHeight: '48px',
		        width: '328px',
		        color: 'red',
		        class: 'd-flex px-3'
	        },
		};
	}
</script>
