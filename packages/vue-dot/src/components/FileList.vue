<template>
	<VList class="vd-file-list">
		<template v-for="(file, index) in files">
			<VListItem :key="index">
				<!-- Icon -->
				<VListItemAvatar>
					<VIcon
						:size="24"
						:color="getIconInfo(file.state).color"
					>
						{{ getIconInfo(file.state).icon }}
					</VIcon>
				</VListItemAvatar>

				<VListItemContent>
					<!-- File to upload name -->
					<VListItemTitle :class="getItemColor(file.state)">
						{{ file.title }}
					</VListItemTitle>

					<!-- Uploaded file name -->
					<VListItemSubtitle v-if="file.name">
						{{ file.name }}
					</VListItemSubtitle>
				</VListItemContent>

				<!-- Action buttons -->
				<VListItemAction>
					<VLayout justify-end>
						<VBtn
							v-if="file.state === 'error'"
							icon
							small
							@click="$emit('retry', file.id)"
						>
							<VIcon :color="iconColor">
								{{ refreshIcon }}
							</VIcon>
						</VBtn>

						<VBtn
							v-if="showViewBtn && file.state === 'success'"
							icon
							small
							class="mr-2"
							@click="$emit('view-file', file)"
						>
							<VIcon :color="iconColor">
								{{ eyeIcon }}
							</VIcon>
						</VBtn>

						<VBtn
							v-if="file.state === 'success'"
							icon
							small
							@click="$emit('delete-file', file.id)"
						>
							<VIcon :color="iconColor">
								{{ deleteIcon }}
							</VIcon>
						</VBtn>
					</VLayout>
				</VListItemAction>
			</VListItem>

			<!-- Don't show divider on last item -->
			<VDivider
				v-if="index + 1 !== files.length"
				:key="'divider-' + index"
				inset
			/>
		</template>
	</VList>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

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
				type: [Array, Object],
				required: true
			}
		}
	});

	/**
	 * FileList is a component that displays a list of files
	 */
	@Component
	export default class FileList extends Props {
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
			return state !== 'success' ? color : null;
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
