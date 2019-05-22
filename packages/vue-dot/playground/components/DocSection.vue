<template>
	<div class="doc-section">
		<slot name="title">
			<h3
				v-if="title"
				class="primary--text mb-3 font-weight-medium headline"
			>
				{{ title }}
			</h3>
		</slot>

		<slot />

		<VDivider
			v-if="!noDivider"
			class="divider my-4"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			title: {
				type: String,
				default: undefined
			},
			// Disable divider
			// eg. for last section
			noDivider: {
				type: Boolean,
				default: false
			}
		}
	});

	@Component
	export default class DocSection extends Props {}
</script>

<style lang="scss" scoped>
	.doc-section {
		width: 100%;
	}
</style>
