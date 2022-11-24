<template>
	<PageContainer size="s">
		<VCard class="pa-8">
			<VRow class="mx-0">
				<VCol
					cols="12"
					:md="image ? 6 : 12"
					class="order-last order-md-first -mt-4 md:mt-0 text-center text-md-left"
				>
					<h2 class="mb-2 font-weight-bold text-h mb-4">
						{{ pageTitle }}
					</h2>

					<p v-if="supportId">
						{{ locales.supportIdMessage }}

						<b>{{ supportId }}</b>
					</p>

					<p>{{ message }}</p>

					<VBtn
						:to="btnRoute"
						color="primary"
						class="mt-2"
						exact
					>
						{{ btnText }}
					</VBtn>
				</VCol>
				<VCol
					v-if="image"
					cols="12"
					md="6"
					class="d-flex align-center justify-center"
				>
					<VImg
						:src="selectedImage"
						:alt="pageTitle"
						max-width="90%"
						max-height="100%"
					/>
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
	export default class MaintenancePage extends MixinsDeclaration {
		locales = locales;
		selectedImage = '';

		mounted() {
			this.selectedImage = require('@cnamts/vue-dot/src/assets/images/maintenance.svg');
		}

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
