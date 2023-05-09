<template>
	<div>
		<FileList
			:files="fileList"
			hide-last-divider
			downloadable
			@download="downloadFile"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { FileItem } from "@cnamts/vue-dot/src/elements/FileList/types";

	@Component({
		inheritAttrs: false
	})
	export default class FileListDownload extends Vue {
		fileList: FileItem[] = [
			{
				id: '1',
				title: 'file',
				name: 'file.pdf',
				type: 'pdf',
				state: 'download',
				optional: false
			},
			{
				id: '2',
				title: 'file',
				name: 'file.docx',
				type: 'word',
				state: 'download',
				optional: true
			}
		];

		downloadFile(file: FileItem): void {
			console.log(file);
		}
	}
</script>
