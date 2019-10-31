<template>
	<PageCard
		card-class="px-5"
		min-height
	>
		<span
			v-if="code"
			class="font-weight-bold primary--text code"
		>
			{{ code }}
		</span>

		<h2
			:class="{
				'display-2': !code,
				'title': code
			}"
			class="mb-2 font-weight-bold"
		>
			{{ title }}
		</h2>

		<p>{{ message }}</p>

		<VBtn
			v-if="cta && btnRoute"
			:to="btnRoute"
			exact
			text
			color="accent"
			class="back-button ma-n5"
		>
			<VIcon class="mr-2">
				{{ backArrowIcon }}
			</VIcon>

			{{ cta }}
		</VBtn>
	</PageCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiArrowLeft } from '@mdi/js';

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
				type: [Array, Object],
				default: () => ({ name: 'home' })
			}
		}
	});

	/** Used to display error pages */
	@Component
	export default class ErrorPage extends Props {
		backArrowIcon = mdiArrowLeft;
	}
</script>

<style lang="scss" scoped>
	.code {
		font-size: 6rem;
		font-family: serif;
	}
</style>
