<template>
	<VLayout
		column
		align-start
		class="doc-section"
	>
		<!-- The title is remplacable through a slot -->
		<slot name="title">
			<h3
				v-if="title"
				class="secondary--text mb-3 font-weight-medium headline"
			>
				{{ title }}
			</h3>
		</slot>

		<!-- Default slot is the body -->
		<slot />

		<VDivider
			v-if="!noDivider"
			class="divider my-4"
		/>
	</VLayout>
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

	/**
	 * DocSection is a component that renders
	 * a title, a body and a divider
	 */
	@Component
	export default class DocSection extends Props {}
</script>

<style lang="scss" scoped>
	.doc-section,
	.divider {
		flex: none;
		width: 100%;
	}
</style>
