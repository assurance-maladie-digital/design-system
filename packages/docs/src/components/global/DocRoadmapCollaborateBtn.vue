<template>
	<VBtn
		outlined
		color="primary"
		class="text-none"
		:href="href"
	>
		Soumettre une demande
	</VBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DocRoadmapSubmitBtn extends Vue {
		href = 'https://github.com/assurance-maladie-digital/design-system/discussions';
	}
</script>
