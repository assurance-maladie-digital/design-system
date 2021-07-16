<template>
	<VCard
		class="mx-auto overflow-hidden"
		min-height="128px"
	>
		<ExternalLinks
			:items="links"
			position="top right"
		/>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class ExternalLinksNoData extends Vue {
		links = [];
	}
</script>
