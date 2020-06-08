import Vue from 'vue';
import Component from 'vue-class-component';

import { FileListItem } from '../types';

@Component
export class UpdateFileModel extends Vue {
	/** Internal value */
	fileList: FileListItem[] = [];

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
			Vue.delete(this.fileList[index], key);
		} else {
			// Else, set it
			Vue.set(this.fileList[index], key, value);
		}
	}

}
