<template>
	<PageContainer size="s">
		<VCard class="pa-8">
			<VRow class="mx-0">
				<VCol
					cols="12"
					:md="image || $slots['maintenance-page-content'] ? 6 : 12"
					class="order-last order-md-first text-center text-md-left"
				>
					<h2 class="mb-2 font-weight-bold text-h mb-4">
						{{ pageTitle }}
					</h2>

					<p>{{ message }}</p>
				</VCol>
				<VCol
					v-if="image || $slots['maintenance-page-content']"
					cols="12"
					md="6"
					class="d-flex align-center justify-center"
				>
					<slot name="maintenance-page-content">
						<VImg
							:src="defaultImage"
							:alt="pageTitle"
							max-width="90%"
							max-height="100%"
							class="mx-12 mx-sm-16 mx-md-0"
						/>
					</slot>
				</VCol>
			</VRow>
		</VCard>
	</PageContainer>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

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
			image: {
				type: Boolean,
				default: false
			},
			imageUrl: {
				type: String,
				default: undefined
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class MaintenancePage extends MixinsDeclaration {
		defaultImage = '';

		mounted() {
			this.defaultImage = require('@cnamts/vue-dot/src/assets/images/maintenance.svg');
		}
	}

</script>
