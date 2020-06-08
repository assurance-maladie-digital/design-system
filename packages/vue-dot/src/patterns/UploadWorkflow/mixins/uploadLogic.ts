import Vue, { PropType } from 'vue';
import Component, { mixins } from 'vue-class-component';

import { FileListItem, UploadWorkflowRefs } from '../types';

const Props = Vue.extend({
	props: {
		/** The v-model value (the list of files) */
		value: {
			type: Array as PropType<FileListItem[]>,
			required: true
		}
	}
});

const MixinsDeclaration = mixins(Props);

@Component<UploadLogic>({
	watch: {
		value: {
			handler(): void {
				// Clear fileList to avoid duplicates
				this.fileList = [];

				// Build fileList from value
				this.value.forEach((propFile: FileListItem) => {
					const file = propFile;

					// If there is not state attribute
					if (!file.state) {
						// Initiate it
						file.state = 'initial';
					}

					this.fileList.push(file);
				});
			},
			immediate: true,
			deep: true
		}
	}
})
export class UploadLogic extends MixinsDeclaration {
	// Extend $refs
	$refs!: UploadWorkflowRefs;
	/** Internal value */
	fileList: FileListItem[] = [];
}
