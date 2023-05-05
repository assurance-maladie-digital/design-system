<template>
	<VList
		v-bind="options.list"
		:style="widthStyles"
		class="vd-file-list"
	>
		<template v-for="(file, index) in files">
			<VListItem
				:key="index"
				v-bind="options.listItem"
			>
				<VListItemAvatar v-bind="options.listItemAvatar">
					<VIcon
						v-if="!file.type"
						v-bind="options.listItemAvatarIcon"
						:color="getStateIcon(file.state).color"
					>
						{{ getStateIcon(file.state).icon }}
					</VIcon>
					<VIcon
						v-if="file.type || (file.state && file.type)"
						v-bind="options.listItemAvatarIcon"
						:color="getTypeIcon(file.type).color"
					>
						{{ getTypeIcon(file.type).icon }}
					</VIcon>
				</VListItemAvatar>

				<VListItemContent v-bind="options.listItemContent">
					<VListItemTitle
						v-if="file.title"
						v-bind="options.listItemTitle"
						:class="[
							options.listItemTitle.class,
							getItemColor(file.state)
						]"
					>
						{{ file.title }}
					</VListItemTitle>

					<VListItemSubtitle
						v-if="file.optional"
						v-bind="options.listItemSubtitle"
					>
						{{ optionalFileText }}
					</VListItemSubtitle>

					<VListItemSubtitle
						v-if="file.name"
						v-bind="options.listItemSubtitle"
					>
						{{ file.name }}
					</VListItemSubtitle>
				</VListItemContent>

				<VListItemAction
					v-if="actions"
					v-bind="options.listItemAction"
				>
					<VBtn
						v-if="file.state === FileStateEnum.INITIAL"
						v-bind="options.uploadBtn"
						:aria-label="locales.uploadFile"
						@click="$emit('upload', file.id)"
					>
						<VIcon
							v-bind="options.icon"
							:color="iconColor"
						>
							{{ uploadIcon }}
						</VIcon>
					</VBtn>

					<VBtn
						v-if="file.state === FileStateEnum.ERROR"
						v-bind="options.retryBtn"
						:aria-label="locales.uploadFile"
						@click="$emit('retry', index)"
					>
						<VIcon
							v-bind="options.icon"
							:color="iconColor"
						>
							{{ refreshIcon }}
						</VIcon>
					</VBtn>

					<VBtn
						v-if="(showViewBtn && file.state === FileStateEnum.SUCCESS) || file.state === FileStateEnum.VIEWING"
						v-bind="options.viewFileBtn"
						:aria-label="locales.viewFile"
						@click="$emit('view-file', file)"
					>
						<VIcon
							v-bind="options.icon"
							:color="iconColor"
						>
							{{ eyeIcon }}
						</VIcon>
					</VBtn>

					<VBtn
						v-if="file.state !== FileStateEnum.INITIAL && file.state !== FileStateEnum.VIEWING"
						v-bind="options.deleteFileBtn"
						@click="$emit('delete-file', index)"
					>
						<VIcon
							v-bind="options.icon"
							:color="iconColor"
						>
							{{ deleteIcon }}
						</VIcon>
					</VBtn>
				</VListItemAction>
			</VListItem>

			<VDivider
				v-if="showDivider(index)"
				:key="'divider-' + index"
				v-bind="options.divider"
			/>
		</template>
	</VList>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { FileItem, IconInfo } from './types';
	import { FileStateEnum } from './FileStateEnum';
	import { FileTypeEnum } from './FileTypeEnum';

	import { customizable } from '../../mixins/customizable';
	import { Widthable } from '../../mixins/widthable';

	import {
		mdiRefresh,
		mdiEye,
		mdiDelete,
		mdiAlertCircle,
		mdiCheckCircle,
		mdiUpload,
		mdiFile,
		mdiFilePdfBox,
		mdiFileWordBox,
		mdiFileExcelBox,
		mdiFilePowerpointBox,
		mdiFileImage,
		mdiFileVideo,
		mdiFileMusic,
		mdiZipBox,
		mdiTextBox
	} from '@mdi/js';

	const Props = Vue.extend({
		props: {
			showViewBtn: {
				type: Boolean,
				default: false
			},
			files: {
				type: Array as PropType<FileItem[]>,
				required: true
			},
			actions: {
				type: Boolean,
				default: false
			},
			hideLastDivider: {
				type: Boolean,
				default: false
			},
			optionalFileText: {
				type: String,
				default: locales.optional
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config), Widthable);

	@Component
	export default class FileList extends MixinsDeclaration {
		locales = locales;
		FileStateEnum = FileStateEnum;
		FileTypeEnum = FileTypeEnum;

		refreshIcon = mdiRefresh;
		eyeIcon = mdiEye;
		deleteIcon = mdiDelete;
		uploadIcon = mdiUpload;

		get iconColor(): string {
			return this.$vuetify.theme.dark ? 'grey-lighten-40' : 'grey';
		}

		getStateIcon(state: FileStateEnum): IconInfo {
			switch (state) {
				case FileStateEnum.ERROR: {
					return {
						icon: mdiAlertCircle,
						color: 'error'
					};
				}

				case FileStateEnum.SUCCESS: {
					return {
						icon: mdiCheckCircle,
						color: 'success'
					};
				}

				default: {
					return {
						icon: mdiFile,
						color: 'grey'
					};
				}
			}
		}

		getTypeIcon(type: FileTypeEnum): IconInfo {
			switch (type) {
				case FileTypeEnum.PDF: {
					return {
						icon: mdiFilePdfBox,
						color: 'red'
					};
				}

				case FileTypeEnum.WORD: {
					return {
						icon: mdiFileWordBox,
						color: 'blue'
					};
				}

				case FileTypeEnum.EXCEL: {
					return {
						icon: mdiFileExcelBox,
						color: 'green'
					};
				}

				case FileTypeEnum.POWERPOINT: {
					return {
						icon: mdiFilePowerpointBox,
						color: 'orange'
					};
				}

				case FileTypeEnum.IMAGE: {
					return {
						icon: mdiFileImage,
						color: 'purple'
					};
				}

				case FileTypeEnum.VIDEO: {
					return {
						icon: mdiFileVideo,
						color: 'pink'
					};
				}

				case FileTypeEnum.AUDIO: {
					return {
						icon: mdiFileMusic,
						color: 'deep-purple'
					};
				}

				case FileTypeEnum.ARCHIVE: {
					return {
						icon: mdiZipBox,
						color: 'deep-orange'
					};
				}

				case FileTypeEnum.TEXT: {
					return {
						icon: mdiTextBox,
						color: 'brown'
					};
				}

				default: {
					return {
						icon: mdiFile,
						color: 'grey'
					};
				}
			}
		}

		getItemColor(state: string): string | undefined {
			if (state === FileStateEnum.SUCCESS) {
				return;
			}

			return 'grey--text';
		}

		showDivider(index: number): boolean {
			if (this.hideLastDivider) {
				return index + 1 !== this.files.length;
			}

			return true;
		}
	}
</script>
