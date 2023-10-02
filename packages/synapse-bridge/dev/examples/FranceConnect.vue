<template>
	<FranceConnectBtn href="https://app.franceconnect.gouv.fr/" />
	<br />
	<FranceConnectBtn
		connect-plus
		href="https://app.franceconnect.gouv.fr/"
	/>
</template>

<script lang="ts">
import FranceConnectBtn from "../src/elements/FranceConnectBtn";
import { defineComponent } from "vue";

export default defineComponent({
	components: {
		FranceConnectBtn,
	},
});
</script>
