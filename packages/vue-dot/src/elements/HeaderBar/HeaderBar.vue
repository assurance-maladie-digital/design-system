<template>
	<div>
		Header
		<HeaderNavBar />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import HeaderNavBar from './HeaderNavBar';

	const Props = Vue.extend({
		components: {
			HeaderNavBar
		},
		props: {

		}
	});

	const MixinsDeclaration = mixins(Props);

	/**
	 * HeaderBar is a component that can be used as the app main header
	 * it contains the HeaderNavBar component
	 */
	@Component
	export default class HeaderBar extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>

</style>
