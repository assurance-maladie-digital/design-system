<template>
	<div>
		<FileList
			:files="fileList"
			hide-last-divider
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
	export default class FileListUsage extends Vue {
		fileList: FileItem[] = [
			{
				id: '1',
				title: 'file',
				name: 'file.pdf',
				type: 'pdf',
				optional: false
			},
			{
				id: '2',
				title: 'file',
				name: 'file.docx',
				type: 'word',
				optional: true
			},
			{
				id: '3',
				title: 'file',
				name: 'file.xcl',
				type: 'excel',
				optional: false
			},
			{
				id: '4',
				title: 'file',
				name: 'file.ppt',
				type: 'powerpoint',
				optional: false
			}
		];
	}
</script>
