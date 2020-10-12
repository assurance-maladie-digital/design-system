import Vue from 'vue';
import Component from 'vue-class-component';

import { FileListItem } from '../types';

@Component
export class UpdateFileModel extends Vue {
	/** Internal value */
	fileList: FileListItem[] = [];

	/** Add 'state' to each item */
	initFileList(value: FileListItem[]): void {
		// Clear fileList to avoid duplicates
		this.fileList = [];

		// Build fileList from value
		value.forEach((propFile: FileListItem) => {
			const file = propFile;

			// If there is not state attribute
			if (!file.state) {
				// Initiate it
				file.state = 'initial';
			}

			this.fileList.push(file);
		});
	}

	/** Set or delete a value in fileList */
	updateFileModel<T>(id: string, key: string, value: T): void {
		// Find the index with the provided id
		const index = this.fileList.findIndex((file) => file.id === id);

		// Avoid error if index isn't find
		if (index === -1) {
			return;
		}

		// If the value is undefined
		if (value === undefined) {
			// Delete the property
			this.$delete(this.fileList[index], key);
		} else {
			// Else, set it
			this.$set(this.fileList[index], key, value);
		}
	}
}
