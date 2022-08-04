<template>
	<DownloadBtn
		:file-promise="getFileFromApi"
		:vuetify-options="vuetifyOptions"
		:outlined="false"
		tile
		color="white"
		width="396px"
		class="text--primary"
	>
		<VIcon
			color="grey-base"
			class="flex-shrink-0 mr-2"
			:class="{ 'd-none': $vuetify.breakpoint.xs }"
		>
			{{ fileIcon }}
		</VIcon>

		justificatif.txt

		<VSpacer class="ml-2" />

		<VIcon
			color="primary"
			class="flex-shrink-0"
		>
			{{ downloadIcon }}
		</VIcon>
	</DownloadBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { AxiosResponse } from '~/plugins/axios';

	import { mdiDownload, mdiFile } from '@mdi/js';

	const file: AxiosResponse<string> = {
		data: 'test',
		status: 200,
		statusText: 'OK',
		headers: {
			'content-disposition': 'attachment; filename="attestation.txt"',
			'content-type': 'text/plain'
		},
		config: {}
	};

	@Component
	export default class DownloadBtnSlots extends Vue {
		getFileFromApi(): Promise<AxiosResponse<string>> {
			return new Promise((resolve) => {
				setTimeout(() => resolve(file), 1500);
			});
		}

		downloadIcon = mdiDownload;
		fileIcon = mdiFile;

		vuetifyOptions = {
			icon: {
				class: 'd-none'
			},
			btn: {
				height: 'auto',
				minHeight: '56px'
			}
		};
	}
</script>
