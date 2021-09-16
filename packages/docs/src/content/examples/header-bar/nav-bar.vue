<template>
	<div class="d-flex flex-wrap align-center justify-center w-100">
		<HeaderBar
			theme="cnam"
			:nav-bar="navBar"
		>
			<template #navigation>
				<div class="ma-2">
					NavBar personnalisée
				</div>
			</template>
		</HeaderBar>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class HeaderNavBarUsage extends Vue {
		navBar = {
			bgcColor: '#c1c1c1',
			dark: false
		}
	}
</script>