// Declare module for every package without typings
declare module '@cnamts/design-tokens/dist/colors';
declare module 'vuetify/es5/locale/fr';
declare module 'vue-input-facade';
declare module 'languages';
declare module 'vue-prism-component';
declare module 'prismjs';

declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}
