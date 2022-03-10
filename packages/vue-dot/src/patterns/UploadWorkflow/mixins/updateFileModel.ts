import Vue from 'vue';
import Component from 'vue-class-component';

import { FileListItem } from '../types';

@Component
export class UpdateFileModel extends Vue {
	fileList: FileListItem[] = [];

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

	updateFileModel<T>(id: string, key: string, value: T): void {
		const index = this.fileList.findIndex((file) => file.id === id);

		if (index === -1) {
			return;
		}

		if (value === undefined) {
			this.$delete(this.fileList[index], key);
			return;
		}

		this.$set(this.fileList[index], key, value);
	}
}
