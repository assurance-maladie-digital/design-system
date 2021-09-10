<template>
	<div>
		HeaderBar
		<HeaderNavBar />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import HeaderNavBar from './HeaderNavBar';

	const Props = Vue.extend({
		props: {
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		inheritAttrs: false,
		components: {
			HeaderNavBar
		}
	})
	export default class HeaderBar extends MixinsDeclaration {}
</script>

<style lang="scss" scoped>

</style>
