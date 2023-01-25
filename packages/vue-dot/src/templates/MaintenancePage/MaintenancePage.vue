<template>
	<PageContainer size="s">
		<VCard class="pa-8">
			<VRow class="mx-0">
				<VCol
					cols="12"
					md="6"
					class="order-last order-md-first text-center text-md-left"
				>
					<h2 class="mb-2 font-weight-bold text-h mb-4">
						{{ pageTitle }}
					</h2>

					<p>{{ message }}</p>
				</VCol>
				<VCol
					cols="12"
					md="6"
					class="d-flex align-center justify-center"
				>
					<VImg
						:src="selectedImage"
						:alt="pageTitle"
						max-width="90%"
						max-height="100%"
						class="mx-12 mx-sm-16 mx-md-0"
					/>
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
				default: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class MaintenancePage extends MixinsDeclaration {
		selectedImage = '';

		mounted() {
			this.selectedImage = require('@cnamts/vue-dot/src/assets/images/maintenance.svg');
		}
	}

</script>
