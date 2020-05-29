<template>
	<PageCard>
		<!-- The title is replaceable through a slot -->
		<slot name="title">
			<h3
				v-if="title"
				class="secondary--text mb-4 font-weight-medium headline"
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
	 * DocSection is a component that renders
	 * a title, a body and a divider
	 */
	@Component
	export default class DocSection extends MixinsDeclaration {}
</script>
