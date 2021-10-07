<template>
	<div class="d-flex flex-wrap align-center justify-center w-100">
		<HeaderBar
			theme="ameli"
			display-search-bar
			@search="searchFn"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class HeaderSearchBarUsage extends Vue {
		searchFn(event: string): void {
			// eslint-disable-next-line
			console.log(event);
		}
	}
</script>
