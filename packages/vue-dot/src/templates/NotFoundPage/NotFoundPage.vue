<template>
	<PageContainer size="m">
		<VCard class="pa-6 pa-sm-16">
			<VRow class="mx-0">
				<VCol
					cols="12"
					md="6"
					class="order-last order-md-first text-center text-md-left"
				>
					<div
						aria-hidden="true"
						class="vd-code font-weight-thin primary--text mb-4"
					>
						{{ locales.code }}
					</div>

					<h2 class="mb-2 font-weight-bold text-h mb-4">
						{{ pageTitle }}
					</h2>

					<p v-if="supportId">
						{{ locales.supportIdMessage }}

						<b>{{ supportId }}</b>.
					</p>

					<p class="mb-10">
						{{ message }}
					</p>

					<VBtn
						:to="btnRoute"
						color="primary"
						exact
					>
						{{ btnText }}
					</VBtn>
				</VCol>

				<VCol
					cols="12"
					md="6"
					class="d-flex align-center justify-center"
				>
					<slot name="illustration">
						<img
							:src="require('../../assets/images/not-found.svg')"
							alt=""
						>
					</slot>
				</VCol>
			</VRow>
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
				default: locales.pageTitle
			},
			message: {
				type: String,
				default: locales.message
			},
			btnText: {
				type: String,
				default: locales.btnText
			},
			btnRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'home' })
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class NotFoundPage extends MixinsDeclaration {
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
	}
</style>
