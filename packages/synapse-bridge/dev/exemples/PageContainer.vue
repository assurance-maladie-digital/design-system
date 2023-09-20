<template>
	<PageContainer>
		<VCard class="pa-8"> Contenu de la page. </VCard>
	</PageContainer>
</template>

<script lang="ts">
import PageContainer from "../src/elements/PageContainer";
import { defineComponent } from "vue";

export default defineComponent({
	components: {
		PageContainer,
	},
});
</script>
