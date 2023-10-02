<template>
	<DownloadBtn :file-promise="getFileFromApi">
		Télécharger mon attestation
	</DownloadBtn>
</template>

<script lang="ts">
import DownloadBtn from "../src/elements/DownloadBtn";
import { defineComponent } from "vue";

import { AxiosResponse } from '@/plugins/axios';

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

export default defineComponent({
	components: {
		DownloadBtn,
	},
	methods: {
		getFileFromApi(): Promise<AxiosResponse<string>> {
			return new Promise((resolve) => {
				setTimeout(() => resolve(file), 1500);
			});
		},
	},
});
</script>
