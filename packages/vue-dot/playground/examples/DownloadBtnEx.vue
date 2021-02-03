<template>
	<DocSection title="DownloadBtn">
		<DownloadBtn
			:file-promise="promise"
			text="justificatif.pdf"
			show-file-icon
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
			resolve({ // TODO
				data: 'test', // TODO filename
				status: 200,
				statusText: 'test status Text',
				headers: {
					'content-disposition': 'filebody'
				},
				config: {}
			});
		});
	}
</script>
