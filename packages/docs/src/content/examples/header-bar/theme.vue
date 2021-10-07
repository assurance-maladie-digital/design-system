<template>
	<div class="d-flex flex-column align-center justify-center w-100">
		<h4 class="ma-2">
			cnam
		</h4>

		<HeaderBar
			theme="cnam"
			:nav-bar="navBar"
		/>

		<VDivider
			light
			class="my-5 w-100"
		/>

		<h4 class="ma-2">
			ameli.fr
		</h4>

		<HeaderBar
			theme="ameli"
			:nav-bar="navBar"
		/>

		<VDivider
			light
			class="my-5 w-100"
		/>

		<h4 class="ma-2">
			ameli-pro
		</h4>

		<HeaderBar
			theme="ameli-pro"
			:nav-bar="navBar"
		/>

		<VDivider
			light
			class="my-5 w-100"
		/>

		<h4 class="ma-2">
			risque-pro
		</h4>

		<HeaderBar
			theme="risque-pro"
			:nav-bar="navBar"
		/>

		<VDivider
			light
			class="my-5 w-100"
		/>

		<h4 class="ma-2">
			custom
		</h4>

		<HeaderBar theme="custom"/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class HeaderThemeUsage extends Vue {
		navBar = {}
	}
</script>
