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

			<p v-if="supportId">
				{{ locales.supportIdMessage }}

				<b>{{ supportId }}</b>
			</p>

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
	import Component, { mixins } from 'vue-class-component';

	import { RawLocation } from 'vue-router';

	import { locales } from './locales';

	import { insertAt } from '@cnamts/vue-dot/src/functions/insertAt';

	const SUPPORT_ID_PARAM_NAME = 'support_id';
	const SPACE_CHARACTER = ' ';

	const Props = Vue.extend({
		props: {
			pageTitle: {
				type: String,
				required: true
			},
			message: {
				type: String,
				required: true
			},
			code: {
				type: String,
				default: undefined
			},
			btnText: {
				type: String,
				default: locales.btnText
			},
			btnRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'home' })
			},
			noBtn: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class ErrorPage extends MixinsDeclaration {
		locales = locales;

		/**
		 * Support ID is a number added by our firewall if a rule is violated
		 * This should be displayed to the user so it can be used to track down the error
		 */
		get supportId(): string | null {
			const params = new URLSearchParams(document.location.search);
			let supportId = params.get(SUPPORT_ID_PARAM_NAME);

			if (!supportId) {
				return null;
			}

			const SPACE_POSITIONS = [4, 9, 14, 19];

			SPACE_POSITIONS.forEach((position) => {
				supportId = insertAt(supportId as string, position, SPACE_CHARACTER);
			});

			return supportId.trim();
		}
	}
</script>

<style lang="scss" scoped>
	.vd-code {
		font-size: 6rem;
		line-height: 6rem;
		font-family: serif;
	}
</style>
