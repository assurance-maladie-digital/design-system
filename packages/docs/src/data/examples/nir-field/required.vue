<template>
	<NirField
		v-model="nir"
		required
		outlined
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class NirFieldRequired extends Vue {
		nir: string | null = null;
	}
</script>
