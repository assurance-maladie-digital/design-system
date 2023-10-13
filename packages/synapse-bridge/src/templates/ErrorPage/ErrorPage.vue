<template>
	<PageContainer size="m">
		<VCard :elevation="mobileVersion ? 0 : 2" class="pa-6 pa-sm-16">
			<VRow class="max-width-none">
				<VCol
					:sm="$slots.illustration ? 6 : 12"
					cols="12"
					class="order-last order-sm-first text-center text-sm-left"
				>
					<div
						aria-hidden="true"
						class="vd-code font-weight-thin text-primary mb-4"
					>
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
							v-if="!noBtn && btnText && btnRoute"
							:to="btnRoute"
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
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { RawLocation } from "vue-router";

import { locales } from "./locales";

import { useDisplay } from 'vuetify';

import PageContainer from "@/elements/PageContainer/PageContainer.vue";

const Props = {
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
			type: [Array, Object, String] as PropType<RawLocation>,
			default: () => ({ name: "home" }),
		},
		btnHref: {
			type: String,
			default: undefined,
		},
		noBtn: {
			type: Boolean,
			default: false,
		},
	},
};

export default defineComponent({
	components: {
		PageContainer,
	},
	props: {
		...Props.props,
	},
	data() {
		return {
			locales,
		};
	},
	computed: {
		mobileVersion(): boolean {
			const { name } = useDisplay();
			return name.value === 'xs' || name.value === 'sm';
		},
	},
});
</script>

<style lang="scss" scoped>
.vd-code {
	font-size: 6rem;
	line-height: 6rem;
}
</style>
