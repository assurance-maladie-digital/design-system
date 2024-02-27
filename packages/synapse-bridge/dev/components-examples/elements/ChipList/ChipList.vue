<template>
	<ChipList :items="items" />
	<ChipList
		:items="items"
		:overflow-limit="10"
	/>
</template>

<script lang="ts">
import ChipList from "@/elements/ChipList";
import {ChipItem} from "@/elements/ChipList/types";

export default {
	components: {
		ChipList,
	},
	data() {
		return {
			items: [
				{ text: "Item 1" },
				{ text: "Item 2" },
				{ text: "Item 3" },
				{ text: "Item 4" },
				{ text: "Item 5" },
				{ text: "Item 6" },
				{ text: "Item 7" },
				{ text: "Item 8" },
				{ text: "Item 9" },
				{ text: "Item 10" },
				{ text: "Item 11" },
				{ text: "Item 12" },
				{ text: "Item 13" },
				{ text: "Item 14" },
				{ text: "Item 15" },
				{ text: "Item 16" },
				{ text: "Item 17" },
				{ text: "Item 18" },
				{ text: "Item 19" },
				{ text: "Item 20" },
			] as ChipItem[],
		};
	},
};
</script>
