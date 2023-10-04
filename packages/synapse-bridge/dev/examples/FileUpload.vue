<template>
	<div>
		<FileUpload v-model="file" :class="{ 'mb-8': file !== null }" />
		<FilePreview :file="file" />

		<FilePreview :file="file2" :options="options" />
	</div>
</template>

<script lang="ts">
import FileUpload from "../src/patterns/FileUpload";
import FilePreview from "../src/elements/FilePreview";

import { defineComponent } from "vue";

export default defineComponent({
	components: {
		FileUpload,
		FilePreview,
	},
	data() {
		return {
			file: null,
			file2: null,

			options: {
				image: {
					alt: "Photo de paysage montagneux du site Picsum.",
				},
			},
		};
	},
	mounted() {
		fetch("https://picsum.photos/seed/picsum/750/350")
			.then((res) => res.blob())
			.then((blob) => (this.file2 = blob));
	},
});
</script>
