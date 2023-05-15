<template>
	<HeaderBar>
		<template #brand-content>
			<div class="d-flex justify-center flex-column primary--text">
				<h1 class="font-weight-bold">
					Mon <span class="green--text">titre</span>
				</h1>
			</div>
		</template>
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class HeaderBarBrandContent extends Vue {}
</script>
