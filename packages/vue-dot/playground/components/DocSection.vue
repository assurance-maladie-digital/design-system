<template>
	<div class="doc-section d-flex flex-column align-start">
		<!-- The title is replaceable through a slot -->
		<slot name="title">
			<h3
				v-if="title"
				class="secondary--text mb-4 font-weight-medium text-h5"
			>
				{{ title }}
			</h3>
		</slot>

		<!-- Default slot is the body -->
		<slot />

		<VDivider
			v-if="!noDivider"
			class="w-100 my-6"
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
			/**
			 * Disable divider
			 * eg. for last section
			 */
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
