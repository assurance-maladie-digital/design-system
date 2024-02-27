<template>
	<PageContainer>
		<Logo />
		<Logo hide-signature />
		<Logo risque-pro />
		<Logo avatar />
		<Logo avatar size="small" />
	</PageContainer>
</template>

<script lang="ts">
import Logo from "@/elements/Logo";
import PageContainer from "@/elements/PageContainer";

import { defineComponent } from "vue";

export default defineComponent({
	components: {
		Logo,
		PageContainer,
	}
});
</script>
