<template>
	<LangBtn
		v-model="lang"
		:vuetify-options="vuetifyOptions"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class LangBtnOptions extends Vue {
		lang = 'fr';

		vuetifyOptions = {
			btn: {
				outlined: false,
				color: 'primary'
			},
			menu: {
				top: true
			}
		};
	}
</script>