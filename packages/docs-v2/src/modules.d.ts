// Declare module for every package without typings
declare module 'vuetify/es5/locale/fr';
declare module 'vue-input-facade';
declare module 'vue-prism-component';
declare module 'prismjs';

// Make Vue SFC modules
declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}
