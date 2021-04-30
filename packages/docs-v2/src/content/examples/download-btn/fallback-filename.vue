<template>
	<div>
		<DownloadBtn
			:file-promise="getFileFromApi"
			:fallback-filename="fallbackFilename"
		>
			Télécharger mon attestation
		</DownloadBtn>

		<VCheckbox
			v-model="useFallback"
			label="Utiliser un nom par défaut"
			hide-details
		/>
	</div>
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
			'content-type': 'text/plain'
		},
		config: {}
	};

	@Component
	export default class DownloadBtnNameType extends Vue {
		useFallback = true;

		getFileFromApi(): Promise<AxiosResponse<string>> {
			return new Promise((resolve) => {
				setTimeout(() => resolve(file), 1500);
			});
		}

		get fallbackFilename(): string | undefined {
			return this.useFallback ? 'Attestation.txt' : undefined;
		}
	}
</script>
