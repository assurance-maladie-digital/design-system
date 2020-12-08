<template>
	<DocSection title="DownloadBtn">
		<p>Click the button below to download a file</p>

		<DownloadBtn
			show-file-icon
			text="justificatif.pdf"
			notification="Justificatif Téléchargé"
			:file-promise="promise"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { AxiosResponse } from 'axios';

	@Component
	export default class DownloadBtnEx extends Vue {

		promise: Promise<AxiosResponse<string>> = new Promise((resolve) => {
			resolve(
				{
					data: 'test',
					status: 200,
					statusText: 'test status Text',
					headers: { 'content-disposition': 'filebody' },
					config: {}
				}
			);
		});
	}
</script>
