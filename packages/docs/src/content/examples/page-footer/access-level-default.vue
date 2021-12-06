<template>
	<div class="d-flex align-center">
		<PageFooter :access-level=0 />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

   	@Component
	export default class PageFooterLevel extends Vue {
	}
</script>