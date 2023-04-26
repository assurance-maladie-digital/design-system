<template>
	<PageContainer size="m">
		<VCard class="pa-6 pa-sm-16">
			<VRow class="mx-0">
				<VCol
					cols="12"
					sm="6"
					class="order-last order-sm-first text-center text-sm-left"
				>
					<h2 class="mb-2 font-weight-bold text-h5 mb-4">
						{{ pageTitle }}
					</h2>

					<p class="mb-10">
						{{ message }}
					</p>

					<VBtn
						v-if="btn"
						:to="btnRoute"
						color="primary"
						exact
					>
						{{ btnText }}
					</VBtn>
				</VCol>

				<VCol
					cols="12"
					sm="6"
					class="d-flex align-center justify-center"
				>
					<slot name="illustration">
						<img
							:src="require('../../assets/images/maintenance.svg')"
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

	import { locales } from './locales';
	import { RawLocation } from 'vue-router';

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
			btn: {
				type: Boolean,
				default: false
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
	export default class MaintenancePage extends MixinsDeclaration {}
</script>
