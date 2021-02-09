<template>
	<DownloadBtn
		:file-promise="getFileFromApi"
		:vuetify-options="vuetifyOptions"
	>
		Télécharger mon attestation
	</DownloadBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { AxiosResponse } from 'axios';

	const file: AxiosResponse<string> = {
		data: 'test',
		status: 200,
		statusText: 'OK',
		headers: {
			'Content-Disposition': 'attachment; filename="attestation.txt"',
			'Content-Type': 'text/plain'
		},
		config: {}
	};

	@Component
	export default class DownloadBtnOptions extends Vue {
		getFileFromApi: Promise<AxiosResponse<string>> = new Promise((resolve) => {
			setTimeout(() => resolve(file), 1500);
		});

		vuetifyOptions = {
			// The btn options can be binded
			// directly to the DownloadBtn
			btn: {
				outlined: false
			},
			icon: {
				class: 'd-none'
			}
		};
	}
</script>
