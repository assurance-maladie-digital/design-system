<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<DownloadBtn
			v-bind="$attrs"
			v-on="$listeners"
		>
			attestation.txt
		</DownloadBtn>
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
			'content-disposition': 'attachment; filename="attestation.txt"',
			'content-type': 'text/plain'
		},
		config: {}
	};

	const filePromise: () => Promise<AxiosResponse<string>> = () => {
		return new Promise((resolve) => {
			setTimeout(() => resolve(file), 1500);
		});
	};

	@Component({
		inheritAttrs: false
	})
	export default class DownloadBtnUsage extends Vue {
		defaultProps = {
			notification: 'Document téléchargé avec succès.',
			filePromise
		};

		propsHiddenByDefault = [
			'notification'
		];

		slotContent = `
	attestation.txt
`;

		options = {
			textFields: [
				'notification'
			]
		};
	}
</script>
