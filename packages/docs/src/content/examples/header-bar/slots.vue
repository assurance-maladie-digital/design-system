<template>
	<HeaderBar>
		<template #navigation-bar-content>
			<h1 class="text-body-2 text-sm-subtitle-1">
				Déclaration de maintien à domicile
			</h1>
		</template>
	</HeaderBar>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class HeaderBarSlots extends Vue {}
</script>
