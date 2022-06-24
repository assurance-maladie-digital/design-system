<template>
	<LangBtn
		v-model="lang"
		:available-languages="[
			'fr',
			'en',
			'de',
			'zh'
		]"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class LangBtnAvailableLanguages extends Vue {
		lang = 'fr';
	}
</script>
