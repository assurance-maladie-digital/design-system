// Declare module for every package without types
declare module 'vuex-persist/dist/umd';
declare module 'vue-input-facade';

// Make Vue SFC modules
declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}
