<template>
	<ErrorPage
		:page-title="locales.pageTitle"
		:message="locales.message"
		no-btn
	>
		<template #illustration>
			<img
				src="../../assets/images/maintenance.svg"
				:alt="locales.pageTitle"
				width="170px"
				height="170px"
			>
		</template>
	</ErrorPage>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import { locales } from './locales';

export default defineComponent({
	data() {
		return {
			locales,
		};
	},
});
</script>
