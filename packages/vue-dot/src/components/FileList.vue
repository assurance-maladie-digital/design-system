<template>
	<VList class="vd-file-list">
		<template v-for="(file, index) in fileList">
			<VListTile
				:key="index"
				avatar
			>
				<VListTileAvatar>
					<VIcon :color="getIconInfo(file.state).color">
						{{ getIconInfo(file.state).icon }}
					</VIcon>
				</VListTileAvatar>

				<VListTileContent>
					<VListTileTitle
						:class="{
							'grey--text text--darken-1': file.state !== 'success'
						}"
					>
						{{ file.title }}
					</VListTileTitle>

					<VListTileSubTitle v-if="file.name">
						{{ file.name }}
					</VListTileSubTitle>
				</VListTileContent>

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
							@click="deleteFile(file.id)"
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
			showViewBtn: {
				type: Boolean,
				default: false
			}
		}
	});

	interface FileListEl {
		id: number;
		title: string;
		state: string;
		name?: string;
	}

	/**
	 * FileList is a component that does things
	 */
	@Component
	export default class FileList extends Props {
		fileList = [
			{
				id: 0,
				title: 'RIB',
				state: 'initial'
			},
			{
				id: 1,
				title: 'Carte d\'identité recto / verso',
				state: 'error'
			},
			{
				id: 2,
				title: 'Passeport',
				state: 'initial'
			},
			{
				id: 3,
				title: 'Attestation',
				state: 'success',
				name: 'file.pdf'
			}
		];

		/** Returns the icon name é the color depending on state */
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

		/** Delete a file from the list with his id */
		deleteFile(id: number) {
			// Filter out files with the id we want to delete
			const filtered = this.fileList.filter((file: FileListEl) => file.id !== id);

			// Re-assign the list to update it
			this.fileList = filtered;
		}
	}
</script>

<style lang="scss" scoped>
	.vd-file-list {
		width: 100%;

		.v-list__tile__content,
		.v-list__tile__action {
			border-bottom: 1px solid rgba(0 ,0 ,0, .12);
		}
	}
</style>
