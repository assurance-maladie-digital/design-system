<template>
	<div>
		HeaderNavBar
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

	@Component({
		inheritAttrs: false
	})
	export default class HeaderNavBar extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>

</style>
