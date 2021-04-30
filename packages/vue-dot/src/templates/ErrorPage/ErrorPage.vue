<template>
	<PageContainer size="s">
		<VCard class="pa-8">
			<span
				v-if="code"
				class="font-weight-bold primary--text vd-code"
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
				{{ pageTitle }}
			</h2>

			<p>{{ message }}</p>

			<div
				v-if="!noBtn && btnText && btnRoute"
				class="d-flex mt-6"
			>
				<VSpacer />

				<VBtn
					:to="btnRoute"
					color="primary"
					exact
				>
					{{ btnText }}
				</VBtn>
			</div>
		</VCard>
	</PageContainer>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component from 'vue-class-component';

	import { RawLocation } from 'vue-router';

	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			/** The title of the ErrorPage (bigger if code prop isn't present) */
			pageTitle: {
				type: String,
				required: true
			},
			/** Displays a message in a paragraph to the user */
			message: {
				type: String,
				required: true
			},
			/** The HTTP code to display (optional) */
			code: {
				type: String,
				default: undefined
			},
			/** Display a link to 'home' route when a text is passed */
			btnText: {
				type: String,
				default: locales.btnText
			},
			/** The route of the button, default to home page */
			btnRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'home' })
			},
			/** Remove the button */
			noBtn: {
				type: Boolean,
				default: false
			}
		}
	});

	/** Used to display error pages */
	@Component
	export default class ErrorPage extends Props {}
</script>

<style lang="scss" scoped>
	.vd-code {
		font-size: 6rem;
		line-height: 6rem;
		font-family: serif;
	}
</style>
