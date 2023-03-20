<template>
	<PageContainer size="m">
		<VCard class="pa-6 pa-sm-16">
			<VRow class="mx-0">
				<VCol
					cols="12"
					sm="6"
					class="order-last order-sm-first text-center text-sm-left"
				>
					<h2 class="mb-2 font-weight-bold text-h mb-4">
						{{ pageTitle }}
					</h2>

					<p class="mb-0">
						{{ message }}
					</p>
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
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			pageTitle: {
				type: String,
				default: locales.pageTitle
			},
			message: {
				type: String,
				default: locales.message
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class MaintenancePage extends MixinsDeclaration {}
</script>
