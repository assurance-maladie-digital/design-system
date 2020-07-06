<template>
	<VList
		v-bind="options.list"
		class="vd-file-list"
	>
		<template v-for="(file, index) in files">
			<VListItem
				:key="index"
				v-bind="options.listItem"
			>
				<!-- Icon -->
				<VListItemAvatar v-bind="options.listItemAvatar">
					<VIcon
						v-bind="options.listItemAvatarIcon"
						:color="getIconInfo(file.state).color"
					>
						{{ getIconInfo(file.state).icon }}
					</VIcon>
				</VListItemAvatar>

				<VListItemContent v-bind="options.listItemContent">
					<!-- File to upload name -->
					<VListItemTitle
						v-bind="options.listItemTitle"
						:class="getItemColor(file.state)"
					>
						{{ file.title }}
					</VListItemTitle>

					<!-- Uploaded file name -->
					<VListItemSubtitle
						v-if="file.name"
						v-bind="options.listItemSubtitle"
					>
						{{ file.name }}
					</VListItemSubtitle>
				</VListItemContent>

				<!-- Action buttons -->
				<VListItemAction v-bind="options.listItemAction">
					<VLayout v-bind="options.layout">
						<VBtn
							v-if="file.state === 'initial'"
							v-bind="options.uploadBtn"
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
							v-if="file.state === 'error'"
							v-bind="options.retryBtn"
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
							v-if="showViewBtn && file.state === 'success'"
							v-bind="options.viewFileBtn"
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
							v-if="file.state === 'success'"
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
					</VLayout>
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
	import { FileItem, IconInfo } from './types';

	import { customizable } from '../../../mixins/customizable';

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
			/** Show the "view file" button */
			showViewBtn: {
				type: Boolean,
				default: false
			},
			/** The list of files to display */
			files: {
				type: Array as PropType<FileItem[]>,
				required: true
			},
			hideLastDivider: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	/** FileList is a component that displays a list of files */
	@Component
	export default class FileList extends MixinsDeclaration {
		// Icons
		refreshIcon = mdiRefresh;
		eyeIcon = mdiEye;
		deleteIcon = mdiDelete;
		uploadIcon = mdiUpload;

		/** Returns the icon name & color depending on state */
		getIconInfo(state: string): IconInfo {
			switch (state) {
				case 'error': {
					return {
						icon: mdiAlertCircle,
						color: 'error'
					};
				}

				case 'success': {
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

		/**
		 * Get the default item color
		 * depending on theme (light or dark)
		 */
		getItemColor(state: string): string {
			let color = 'grey--text ';
			// Only the modifier changes
			color += this.$vuetify.theme.dark ? 'text--lighten-1' : 'text--darken-1';

			// Let the default color (null) on success
			return state !== 'success' ? color : '';
		}

		/** Don't show divider on last item if hideLastDivider is true */
		showDivider(index: number): boolean {
			if (this.hideLastDivider) {
				return index + 1 !== this.files.length;
			}

			return true;
		}

		/**
		 * Get the default icon color
		 * depending on theme (light or dark)
		 */
		get iconColor(): string {
			return this.$vuetify.theme.dark ? 'grey lighten-1' : 'grey darken-1';
		}
	}
</script>

<style lang="scss" scoped>
	.vd-file-list {
		width: 100%;
	}
</style>
