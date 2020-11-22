// Declare module for every package without typings
declare module 'vue-prism-component';

// Make Vue SFC modules
declare module '*.vue' {
	import Vue from 'vue';
	export default Vue;
}
