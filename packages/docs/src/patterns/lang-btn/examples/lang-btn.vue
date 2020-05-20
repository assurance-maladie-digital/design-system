<template>
	<LangBtn
		v-model="lang"
		:available-languages="[
			'fr',
			'en'
		]"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class LangBtnEx extends Vue {
		lang = 'fr';
	}
</script>
