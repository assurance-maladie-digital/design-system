<script lang="ts">
import { defineComponent } from "vue";

import { locales } from './locales';

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
});
</script>

<template>
	<ErrorPage
		:page-title="locales.pageTitle"
		:message="locales.message"
		no-btn
	>
		<template #illustration>
			<img
				src="@/assets/images/maintenance.svg"
				:alt="locales.pageTitle"
			>
		</template>
	</ErrorPage>
</template>

<style lang="scss" scoped>
img {
	width: 170px;
	height: 170px;
}
</style>
