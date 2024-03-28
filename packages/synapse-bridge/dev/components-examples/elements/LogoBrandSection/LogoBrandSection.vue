<template>
	<PageContainer>
		<LogoBrandSection
			service-sub-title="Documentation du Design System"
			service-title="Design System"
			theme="risque-pro"
		/>

		<br/><br/>

		<LogoBrandSection
			home-href="http://www.google.fr"
			theme="ameli-pro"
		/>

		<br/><br/>

		<LogoBrandSection home-href="http://www.google.fr">
			<img
				src="@/assets/images/logo-msa.svg"
				alt="MSA : Santé, Famille, Retraite, Services"
				width="115px"
				height="52px"
				class="ml-8 my-auto"
			>
		</LogoBrandSection>
	</PageContainer>
</template>

<script lang="ts">
import Logo from "@/elements/Logo";
import LogoBrandSection from "@/elements/LogoBrandSection";
import PageContainer from "@/elements/PageContainer";

import { defineComponent } from "vue";

export default defineComponent({
	components: {
		Logo,
		LogoBrandSection,
		PageContainer,
	}
});
</script>
