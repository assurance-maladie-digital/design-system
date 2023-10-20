import { defineComponent } from "vue";

import { FileListItem } from "../types";

type FileList = Partial<FileListItem>;

export default defineComponent({
	data() {
		return {
			fileList: [] as FileList[],
		};
	},
	methods: {
		initFileList(value: FileListItem[]): void {
			this.fileList = [];

			value.forEach((propFile: FileListItem) => {
				const file = propFile;

				if (!file.state) {
					file.state = "initial";
				}

				this.fileList.push(file);
			});
		},

		updateFileModel<T>(index: number, key: string, value: T): void {
			if (!this.fileList[index]) {
				return;
			}

			if (value === undefined) {
				delete this.fileList[index][key];

				return;
			}

			this.fileList[index][key] = value;
		},
	},
});
