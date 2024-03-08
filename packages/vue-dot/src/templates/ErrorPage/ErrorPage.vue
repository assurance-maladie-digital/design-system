<template>
	<PageContainer size="m">
		<VCard
			:elevation="mobileVersion ? 0 : 2"
			class="pa-6 pa-sm-16"
		>
			<VRow class="max-width-none">
				<VCol
					:sm="$slots.illustration ? 6 : 12"
					cols="12"
					class="order-last order-sm-first text-center text-sm-left"
				>
					<div
						class="vd-code font-weight-thin primary--text mb-4"
					>
						<span class="d-sr-only">{{ codeErrorText }}</span>
						{{ code }}
					</div>

					<h2 class="mb-2 font-weight-bold text-h5 mb-4">
						{{ pageTitle }}
					</h2>

					<p class="mb-0">
						{{ message }}
					</p>

					<slot name="additional-content" />

					<slot name="action">
						<VBtn
							v-if="!noBtn && btnText && (route || btnHref)"
							:to="route"
							:href="btnHref"
							color="primary"
							exact
							class="mt-6"
						>
							{{ btnText }}
						</VBtn>
					</slot>
				</VCol>

				<VCol
					v-if="$slots.illustration"
					cols="12"
					sm="6"
					class="d-flex align-center justify-center"
				>
					<slot name="illustration" />
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

	const Props = Vue.extend({
		props: {
			pageTitle: {
				type: String,
				default: undefined
			},
			message: {
				type: String,
				default: undefined
			},
			code: {
				type: String,
				default: undefined
			},
			btnText: {
				type: String,
				default: locales.btnText
			},
			codeErrorText: {
				type: String,
				default: locales.errorCodeText
			},
			btnRoute: {
				type: [Array, Object, String] as PropType<RawLocation>,
				default: () => ({ name: 'home' })
			},
			btnHref: {
				type: String,
				default: undefined
			},
			noBtn: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class MaintenancePage extends MixinsDeclaration {
		locales = locales;
		route: RawLocation | undefined = this.btnRoute;

		mounted() {
			if (this.btnHref) {
				this.route = undefined;
			}
		}

		get mobileVersion(): boolean {
			return this.$vuetify.breakpoint.xsOnly;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-code {
		font-size: 6rem;
		line-height: 6rem;
	}
</style>
