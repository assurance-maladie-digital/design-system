<template>
	<PageCard>
		<!-- The title is replaceable through a slot -->
		<slot name="title">
			<h3
				v-if="title"
				class="primary--text mb-4 font-weight-medium text-h5"
			>
				{{ title }}
			</h3>
		</slot>

		<!-- Default slot is the body -->
		<slot />
	</PageCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			title: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/**
	 * DocSection is a component that renders a
	 * PageCard with a title and a body
	 */
	@Component
	export default class DocSection extends MixinsDeclaration {}
</script>
