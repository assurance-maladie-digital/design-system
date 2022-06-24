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

	import { AxiosResponse } from '~/plugins/axios';

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
	export default class DownloadBtnOptions extends Vue {
		getFileFromApi(): Promise<AxiosResponse<string>> {
			return new Promise((resolve) => {
				setTimeout(() => resolve(file), 1500);
			});
		}

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
