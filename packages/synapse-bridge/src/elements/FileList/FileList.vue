<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

import { config } from "./config";
import { locales } from "./locales";

import { FileItem, IconInfo } from "./types";

import { FileStateEnum } from "./FileStateEnum";

import { customizable } from "@/mixins/customizable";
import { Widthable } from "@/mixins/widthable";

import {
	mdiRefresh,
	mdiEye,
	mdiDelete,
	mdiAlertCircle,
	mdiCheckCircle,
	mdiUpload,
	mdiFile,
} from "@mdi/js";

export default defineComponent({
	mixins: [customizable(config), Widthable],
	props: {
		files: {
			type: Array as PropType<FileItem[]>,
			required: true,
		},
		hideUploadBtn: {
			type: Boolean,
			default: false
		},
		showViewBtn: {
			type: Boolean,
			default: false,
		},
		alwaysShowDeleteBtn: {
			type: Boolean,
			default: false
		},
		hideDeleteBtn: {
			type: Boolean,
			default: false,
		},
		hideLastDivider: {
			type: Boolean,
			default: false,
		},
		optionalFileText: {
			type: String,
			default: locales.optional,
		},
	},
	data() {
		return {
			locales,
			FileStateEnum,
			refreshIcon: mdiRefresh,
			eyeIcon: mdiEye,
			deleteIcon: mdiDelete,
			uploadIcon: mdiUpload,
		};
	},
	computed: {
		iconColor() {
			return this.$vuetify.theme.current.dark ? "grey-lighten-40" : "grey";
		},
	},
	methods: {
		isFileItem(file: FileItem | File): file is FileItem {
			return !(file instanceof File);
		},
		shouldDisplayDeleteBtn(file: FileItem | File): boolean {
			if (this.hideDeleteBtn) {
				return false;
			}

			return (this.isFileItem(file) && file.state !== FileStateEnum.INITIAL) || this.alwaysShowDeleteBtn;
		},
		getIconInfo(file: FileItem | File): IconInfo {
			const state = this.isFileItem(file) ? file.state : FileStateEnum.INITIAL;
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
						color: 'turquoise-darken-60'
					};
				}

				default: {
					return {
						icon: mdiFile,
						color: 'grey'
					};
				}
			}
		},
		getItemColor(state: string): string | undefined {
			if (state === FileStateEnum.SUCCESS) {
				return;
			}

			return 'text-grey';
		},
		showDivider(index: number): boolean {
			if (this.hideLastDivider) {
				return index + 1 !== this.files.length;
			}

			return true;
		},
	},
});
</script>

<template>
	<VList v-bind="options.list" :style="widthStyles" class="vd-file-list">
		<template v-for="(file, index) in files" :key="index">
			<VListItem v-bind="options.listItem">
				<template v-slot:prepend>
					<VIcon
						v-bind="options.listItemAvatarIcon"
						:color="getIconInfo(file).color"
					>
						{{ getIconInfo(file).icon }}
					</VIcon>
				</template>

				<VListItemTitle
					v-if="isFileItem(file) && file.title"
					v-bind="options.listItemTitle"
					:class="[
						options.listItemTitle.class,
						getItemColor(file.state),
					]"
				>
					{{ file.title }}
				</VListItemTitle>

				<VListItemSubtitle
					v-if="isFileItem(file) && file.optional"
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

				<template v-slot:append>
					<VListItemAction v-bind="options.listItemAction">
						<VBtn
							v-if="isFileItem(file) && file.state === FileStateEnum.INITIAL && !hideUploadBtn"
							v-bind="options.uploadBtn"
							:aria-label="locales.uploadFile"
							@click="$emit('upload', file.id)"
						>
							<VIcon v-bind="options.icon" :color="iconColor">
								{{ uploadIcon }}
							</VIcon>
						</VBtn>

						<VBtn
							v-if="isFileItem(file) && file.state === FileStateEnum.ERROR"
							v-bind="options.retryBtn"
							:aria-label="locales.uploadFile"
							@click="$emit('retry', index)"
						>
							<VIcon v-bind="options.icon" :color="iconColor">
								{{ refreshIcon }}
							</VIcon>
						</VBtn>

						<VBtn
							v-if="showViewBtn && (!isFileItem(file) || file.state === FileStateEnum.SUCCESS)"
							v-bind="options.viewFileBtn"
							:aria-label="locales.viewFile"
							@click="$emit('view-file', file)"
						>
							<VIcon v-bind="options.icon" :color="iconColor">
								{{ eyeIcon }}
							</VIcon>
						</VBtn>

						<VBtn
							v-if="shouldDisplayDeleteBtn(file)"
							v-bind="options.deleteFileBtn"
							@click="$emit('delete-file', index)"
						>
							<VIcon v-bind="options.icon" :color="iconColor">
								{{ deleteIcon }}
							</VIcon>
						</VBtn>
					</VListItemAction>
				</template>
			</VListItem>

			<VDivider
				v-if="showDivider(index)"
				:key="'divider-' + index"
				v-bind="options.divider"
			/>
		</template>
	</VList>
</template>

<style lang="scss" scoped>
.v-list-item__prepend > .v-icon,
.v-list-item__append > .v-icon {
	opacity: 1 !important;
}
.v-list-item-subtitle {
	line-height: 1.2;
}
</style>
