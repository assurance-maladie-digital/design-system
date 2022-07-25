<template>
	<div>
		<div v-for="contributor in contributors" v-bind:key="contributor">
			<div class="subtitle-2 text-uppercase font-weight-bold">{{contributor}}</div>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DocHomeContributors extends Vue {
		contributors = ['Contributeur 1', 'Contributeur 2', 'Contributeur 3']
	}
</script>