<template>
	<div>
		<FileUpload
			v-model="file"
			:class="{ 'mb-8': file !== null }"
		/>

		<FilePreview :file="file" />
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
		};
	},
});
</script>
