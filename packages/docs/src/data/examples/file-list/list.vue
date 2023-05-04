<template>
	<div>
		<FileList
			:files="fileList"
			no-actions
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
				state: 'initial'
			},
			{
				id: '2',
				title: 'file2',
				state: 'initial'
			},
			{
				id: '3',
				title: 'file3',
				state: 'initial'
			}
		];
	}
</script>
