<template>
	<PageCard
		width="680"
		card-class="px-5"
	>
		<span
			v-if="code"
			class="font-weight-bold primary--text code"
		>
			{{ code }}
		</span>

		<h2
			:class="{
				'text-h4': !code,
				'mb-4': !code,
				'text-h6': code
			}"
			class="mb-2 font-weight-bold"
		>
			{{ title }}
		</h2>

		<p>{{ message }}</p>

		<VLayout
			v-if="cta && btnRoute"
			class="mt-6"
		>
			<VSpacer />

			<VBtn
				:to="btnRoute"
				color="primary"
				exact
			>
				{{ cta }}
			</VBtn>
		</VLayout>
	</PageCard>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';
	import { Next } from '../../types';

	const Props = Vue.extend({
		props: {
			/** The HTTP code to display (optional) */
			code: {
				type: String,
				default: undefined
			},
			/** The title of the ErrorPage (if no code is passed, it will be bigger) */
			title: {
				type: String,
				required: true
			},
			/** Displays a message in a paragraph to the user */
			message: {
				type: String,
				required: true
			},
			/** Display a link to 'home' route when a text is passed */
			cta: {
				type: String,
				default: undefined
			},
			/** The route of the CTA button, default to home page */
			btnRoute: {
				type: [Array, Object] as PropType<Next>,
				default: () => ({ name: 'home' })
			}
		}
	});

	/** Used to display error pages */
	@Component
	export default class ErrorPage extends Props {}
</script>

<style lang="scss" scoped>
	.code {
		font-size: 6rem;
		font-family: serif;
	}
</style>
