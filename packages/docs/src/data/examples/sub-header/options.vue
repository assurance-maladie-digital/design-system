<template>
	<SubHeader
		title-text="Paul Dupont"
		sub-title-text="1 69 08 75 125 456 75"
		:vuetify-options="vuetifyOptions"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class SubHeaderOptions extends Vue {
		vuetifyOptions = {
			background: {
				color: 'primary'
			},
			backBtn: {
				color: 'transparent',
				small: true,
				depressed: true
			}
		};
	}
</script>
