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
				title: 'file1',
				name: 'file1.pdf',
				state: 'initial',
				optional: false
			},
			{
				id: '2',
				title: 'file2',
				name: 'file2.pdf',
				state: 'success',
				optional: true
			},
			{
				id: '3',
				title: 'file3',
				name: 'file3.pdf',
				state: 'error',
				optional: false
			}
		];
	}
</script>
