<template>
	<SkipLink label="Contenu principal" />
	<div id="main" style="margin-top: 2000px">Content</div>
</template>

<script lang="ts">
import SkipLink from "../src/elements/SkipLink";
import { defineComponent } from "vue";

export default defineComponent({
	components: {
		SkipLink,
	},
});
</script>
