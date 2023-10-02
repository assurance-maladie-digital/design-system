<template>
	<DataList :items="items" :icons="icons" />
</template>

<script lang="ts">
import DataList from "../src/elements/DataList";

import { defineComponent } from "vue";

import { mdiCalendar, mdiAccount } from "@mdi/js";

export default defineComponent({
	components: {
		DataList,
	},
	data() {
		return {
			items: [
				{
					key: "Nom",
					value: "Dupont",
					icon: "accountIcon",
				},
				{
					key: "Prénom",
					value: "Paul",
					icon: "accountIcon",
				},
				{
					key: "Date de naissance",
					value: "24/09/1970",
					icon: "calendarIcon",
				},
			],
			icons: {
				calendarIcon: mdiCalendar,
				accountIcon: mdiAccount,
			},
		};
	},
});
</script>
