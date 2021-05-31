<template>
	<div>
		Header Nav Bar
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {

		}
	});

	const MixinsDeclaration = mixins(Props);

	/**
	 * HeaderNavBar is a component that display a navigation menu into the HeaderBar
	 */
	@Component
	export default class HeaderNavBar extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>

</style>
