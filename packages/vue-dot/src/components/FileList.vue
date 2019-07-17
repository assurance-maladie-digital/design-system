<template>
	<VList class="vd-file-list">
		<template v-for="(file, index) in files">
			<VListTile
				:key="index"
				avatar
			>
				<!-- Icon -->
				<VListTileAvatar>
					<VIcon :color="getIconInfo(file.state).color">
						{{ getIconInfo(file.state).icon }}
					</VIcon>
				</VListTileAvatar>

				<VListTileContent>
					<!-- File to upload name -->
					<VListTileTitle
						:class="{
							'grey--text text--darken-1': file.state !== 'success'
						}"
					>
						{{ file.title }}
					</VListTileTitle>

					<!-- Uploaded file name -->
					<VListTileSubTitle v-if="file.name">
						{{ file.name }}
					</VListTileSubTitle>
				</VListTileContent>

				<!-- Action buttons -->
				<VListTileAction class="pr-3">
					<VLayout justify-end>
						<VBtn
							v-if="file.state === 'error'"
							icon
							@click="$emit('retry')"
						>
							<VIcon color="grey darken-1">
								refresh
							</VIcon>
						</VBtn>

						<VBtn
							v-if="showViewBtn && file.state === 'success'"
							icon
							class="mr-2"
							@click="$emit('view-file', file)"
						>
							<VIcon color="grey darken-1">
								visibility
							</VIcon>
						</VBtn>

						<VBtn
							v-if="file.state === 'success'"
							icon
							@click="$emit('delete-file', file.id)"
						>
							<VIcon color="grey darken-1">
								delete
							</VIcon>
						</VBtn>
					</VLayout>
				</VListTileAction>
			</VListTile>
		</template>
	</VList>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

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
		/** Returns the icon name & color depending on state */
		getIconInfo(state: string) {
			switch (state) {
				case 'error': {
					return {
						icon: 'error',
						color: 'error'
					};
				}

				case 'success': {
					return {
						icon: 'check_circle',
						color: 'success'
					};
				}

				default: {
					return {
						icon: 'insert_drive_file',
						color: 'grey'
					};
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.vd-file-list {
		width: 100%;
		max-width: 550px;

		/deep/ .v-list__tile {
			padding-right: 0 !important;
		}

		.v-list__tile__content,
		.v-list__tile__action {
			border-bottom: 1px solid rgba(0 ,0 ,0, .12);
		}
	}
</style>
