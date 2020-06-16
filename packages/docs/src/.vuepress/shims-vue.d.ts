// Declare module for every package without types
declare module 'languages';
declare module 'vue-input-facade';
declare module 'vue-prism-component';

// Make Vue SFC modules
declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}
