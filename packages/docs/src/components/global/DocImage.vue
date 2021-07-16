<template>
	<img
		:src="require(`~/data/images/${src}`)"
		:alt="alt"
	>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			src: {
				type: String,
				required: true
			},
			alt: {
				type: String,
				default: ''
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class DocImage extends MixinsDeclaration {}
</script>
