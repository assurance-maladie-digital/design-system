<template>
	<FileList :files="fileList" />
	<br /><br />
	<FileList :files="fileList2" />
</template>

<script lang="ts">
import FileList from "../src/elements/FileList";
import { defineComponent } from "vue";

import { FileItem } from "../src/elements/FileList/types";

export default defineComponent({
	components: {
		FileList,
	},
	data() {
		return {
			fileList: [
				{
					title: "RIB",
					state: "initial",
				},
				{
					title: "Carte d’identité recto / verso",
					state: "initial",
				},
				{
					title: "Passport",
					state: "initial",
				},
			] as FileItem[],

			fileList2: [
				{
					title: "RIB",
					name: "rib.pdf",
					state: "success",
				},
				{
					title: "Carte d’identité recto / verso",
					name: "carte-identite.jpg",
					state: "success",
				},
				{
					title: "Passport",
					name: "passport.jpg",
					state: "error",
				},
			] as FileItem[],
		};
	},
});
</script>
