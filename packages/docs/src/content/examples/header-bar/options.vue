<template>
	<HeaderBar :vuetify-options="vuetifyOptions" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class HeaderBarOptions extends Vue {
		vuetifyOptions = {
			appBar: {
				shaped: true
			}
		};
	}
</script>
