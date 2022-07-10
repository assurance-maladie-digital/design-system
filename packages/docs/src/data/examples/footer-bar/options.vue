<template>
	<FooterBar :vuetify-options="vuetifyOptions" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { tokens } from '@cnamts/design-tokens';

	@Component
	export default class FooterBarOptions extends Vue {
		vuetifyOptions = {
			footer: {
				color: tokens.colors.amBlue.lighten97
			}
		};
	}
</script>
