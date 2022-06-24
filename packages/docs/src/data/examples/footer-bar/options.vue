<template>
	<FooterBar :vuetify-options="vuetifyOptions" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FooterBarOptions extends Vue {
		vuetifyOptions = {
			footer: {
				color: '#f8f9fc'
			}
		};
	}
</script>
