<template>
	<ChipList :items="items" />
</template>

<script lang="ts">
import ChipList from "../src/elements/ChipList";
import { defineComponent } from "vue";

export default defineComponent({
	components: {
		ChipList,
	},
	data() {
		return {
			items: [
				{ text: "Item 1", value: "item1" },
				{ text: "Item 2", value: "item2" },
				{ text: "Item 3", value: "item3" },
			],
		};
	},
});
</script>
