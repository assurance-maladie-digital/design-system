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
			'Content-Disposition': 'attachment; filename="attestation.txt"',
			'Content-Type': 'text/plain'
		},
		config: {}
	};

	const filePromise: Promise<AxiosResponse<string>> = new Promise((resolve) => {
		setTimeout(() => resolve(file), 1500);
	});

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
