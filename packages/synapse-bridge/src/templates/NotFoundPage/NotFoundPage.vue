<script lang="ts">
import { defineComponent } from "vue";

import { locales } from "./locales";
import { insertAt } from "@/functions/insertAt";

import ErrorPage from "@/templates/ErrorPage";

export default defineComponent({
	components: {
		ErrorPage,
	},
	data() {
		return {
			locales,
		};
	},
	computed: {
		/**
		 * Support ID is a number added by our firewall if a rule is violated
		 * This should be displayed to the user so it can be used to track down the error
		 */
		supportId(): string | null {
			const SUPPORT_ID_PARAM_NAME = "support_id";
			const SPACE_CHARACTER = " ";

			const params = new URLSearchParams(document.location.search);
			let supportId = params.get(SUPPORT_ID_PARAM_NAME);

			if (!supportId) {
				return null;
			}

			const SPACE_POSITIONS = [4, 9, 14, 19];

			SPACE_POSITIONS.forEach((position) => {
				supportId = insertAt(
					supportId as string,
					position,
					SPACE_CHARACTER
				);
			});

			return supportId.trim();
		},
	},
});
</script>

<template>
	<ErrorPage
		:code="locales.code"
		:page-title="locales.pageTitle"
		:message="locales.message"
	>
		<template v-if="supportId" #additional-content>
			<p class="mt-4">
				{{ locales.supportIdMessage }}

				<b>{{ supportId }}</b
				>.
			</p>
		</template>

		<template #illustration>
			<img src="@/assets/images/not-found.svg" :alt="locales.pageTitle" />
		</template>
	</ErrorPage>
</template>

<style lang="scss" scoped>
img {
	width: 170px;
	height: 170px;
}
</style>
