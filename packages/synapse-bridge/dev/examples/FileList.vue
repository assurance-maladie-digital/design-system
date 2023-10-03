<template>
	<FileList :files="fileList" />
</template>

<script lang="ts">
import FileList from "../src/elements/FileList";
import { defineComponent } from "vue";

import { FileItem } from '../src/elements/FileList/types';

export default defineComponent({
	components: {
		FileList,
	},
	data() {
		return {
			fileList: [
				{
					title: 'RIB',
					state: 'initial'
				},
				{
					title: 'Carte d’identité recto / verso',
					state: 'initial'
				},
				{
					title: 'Passport',
					state: 'initial'
				}
			] as FileItem[]
		};
	},
});
</script>
