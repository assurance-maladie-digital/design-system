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
						v-bind="options.listItemAvatarIcon"
						:color="getIconInfo(file.state).color"
					>
						{{ getIconInfo(file.state).icon }}
					</VIcon>
				</VListItemAvatar>

				<VListItemContent v-bind="options.listItemContent">
					<VListItemTitle
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

				<VListItemAction v-bind="options.listItemAction">
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
						@click="$emit('retry', file.id)"
					>
						<VIcon
							v-bind="options.icon"
							:color="iconColor"
						>
							{{ refreshIcon }}
						</VIcon>
					</VBtn>

					<VBtn
						v-if="showViewBtn && file.state === FileStateEnum.SUCCESS"
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
						v-if="file.state !== FileStateEnum.INITIAL"
						v-bind="options.deleteFileBtn"
						@click="$emit('delete-file', file.id)"
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

	import { customizable } from '../../../mixins/customizable';
	import { Widthable } from '../../../mixins/widthable';

	import {
		mdiRefresh,
		mdiEye,
		mdiDelete,
		mdiAlertCircle,
		mdiCheckCircle,
		mdiUpload,
		mdiFile
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

		refreshIcon = mdiRefresh;
		eyeIcon = mdiEye;
		deleteIcon = mdiDelete;
		uploadIcon = mdiUpload;

		get iconColor(): string {
			return this.$vuetify.theme.dark ? 'grey lighten-1' : 'grey darken-1';
		}

		getIconInfo(state: FileStateEnum): IconInfo {
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

		getItemColor(state: string): string | undefined {
			if (state === FileStateEnum.SUCCESS) {
				return;
			}

			return 'grey--text ' + this.$vuetify.theme.dark ? 'text--lighten-1' : 'text--darken-1';
		}

		showDivider(index: number): boolean {
			if (this.hideLastDivider) {
				return index + 1 !== this.files.length;
			}

			return true;
		}
	}
</script>
