import Vue from 'vue';
import Component from 'vue-class-component';

import { FileListItem } from '../types';

type FileList = Partial<FileListItem>;

@Component
export class UpdateFileModel extends Vue {
	fileList: FileList[] = [];

	initFileList(value: FileListItem[]): void {
		this.fileList = [];

		value.forEach((propFile: FileListItem) => {
			const file = propFile;

			if (!file.state) {
				file.state = 'initial';
			}

			this.fileList.push(file);
		});
	}

	updateFileModel<T>(index: number, key: string, value: T): void {
		if (!this.fileList[index]) {
			return;
		}

		if (value === undefined) {
			this.$delete(this.fileList[index], key);

			return;
		}

		this.$set(this.fileList[index], key, value);
	}
}
