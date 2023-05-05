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
				optional: false
			},
			{
				id: '2',
				title: 'file2',
				optional: true
			},
			{
				id: '3',
				title: 'file3',
				optional: false
			}
		];
	}
</script>
