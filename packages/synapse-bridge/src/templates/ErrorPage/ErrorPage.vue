<script lang="ts">
	import type { PropType } from 'vue'
	import { defineComponent } from 'vue'
	import { RouteRecordRaw } from 'vue-router'
	import { locales } from './locales'

	import PageContainer from '@/elements/PageContainer'

	export default defineComponent({
		components: {
			PageContainer,
		},
		props: {
			pageTitle: {
				type: String,
				default: undefined,
			},
			message: {
				type: String,
				default: undefined,
			},
			code: {
				type: String,
				default: undefined,
			},
			btnText: {
				type: String,
				default: locales.btnText,
			},
			btnRoute: {
				type: [Array, Object, String] as PropType<RouteRecordRaw | string>,
				default: () => ({ name: 'home' }),
			},
			btnHref: {
				type: String,
				default: undefined,
			},
			noBtn: {
				type: Boolean,
				default: false,
			},
			codeErrorText: {
				type: String,
				default: locales.errorCodeText
			},
		},
		data() {
			return {
				locales,
				route: this.btnRoute as RouteRecordRaw | string | undefined,
			}
		},
		created() {
			if (this.btnHref) {
				this.route = undefined
			}
		},
		computed: {
			mobileVersion(): boolean {
				return this.$vuetify.display.name === 'xs' || this.$vuetify.display.name === 'sm'
			},
		},
	})
</script>

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
					<div class="vd-code font-weight-thin text-primary mb-4">
						<span class="d-sr-only">{{ codeErrorText }}</span> {{ code }}
					</div>

					<h2 class="mb-2 font-weight-bold text-h5 mb-4">
						{{ pageTitle }}
					</h2>

					<p>
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

<style lang="scss" scoped>
	.vd-code {
		font-size: 6rem;
		line-height: 6rem;
	}
</style>
