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
				<VListItemAction v-bind="options.listItemActions">
					<VLayout v-bind="options.layout">
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

			<!-- Don't show divider on last item if hideListDivider is true -->
			<VDivider
				v-if="hideListDivider ? index + 1 !== files.length : true"
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
	import { FileItem } from './types';

	import { customizable, Options } from '../../mixins/customizable';

	import {
		mdiRefresh,
		mdiEye,
		mdiDelete,
		mdiAlertCircle,
		mdiCheckCircle,
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
			hideListDivider: {
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

		/** Returns the icon name & color depending on state */
		getIconInfo(state: string) {
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
		getItemColor(state: string) {
			let color = 'grey--text ';
			// Only the modifier changes
			color += this.$vuetify.theme.dark ? 'text--lighten-1' : 'text--darken-1';

			// Let the default color (null) on success
			return state !== 'success' ? color : '';
		}

		/**
		 * Get the default icon color
		 * depending on theme (light or dark)
		 */
		get iconColor() {
			return this.$vuetify.theme.dark ? 'grey lighten-1' : 'grey darken-1';
		}
	}
</script>

<style lang="scss" scoped>
	.vd-file-list {
		width: 100%;
	}
</style>
