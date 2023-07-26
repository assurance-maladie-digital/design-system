<template>
	<ErrorPage
		:code="locales.code"
		:page-title="locales.pageTitle"
		:message="locales.message"
	>
		<template
			v-if="supportId"
			#additional-content
		>
			<p class="mt-4">
				{{ locales.supportIdMessage }}

				<b>{{ supportId }}</b>.
			</p>
		</template>

		<template #illustration>
			<img
				:src="require('../../assets/images/not-found.svg')"
				alt=""
				width="170px"
				height="170px"
			>
		</template>
	</ErrorPage>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { locales } from './locales';

	import { insertAt } from '@cnamts/vue-dot/src/functions/insertAt';

	@Component
	export default class NotFoundPage extends Vue {
		locales = locales;

		/**
		 * Support ID is a number added by our firewall if a rule is violated
		 * This should be displayed to the user so it can be used to track down the error
		 */
		get supportId(): string | null {
			const SUPPORT_ID_PARAM_NAME = 'support_id';
			const SPACE_CHARACTER = ' ';

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
