<template>
	<DocSection title="DownloadBtn">
		<DownloadBtn :file-promise="filePromise">
			attestation.txt
		</DownloadBtn>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { filePromise } from '../../src/elements/DownloadBtn/tests/data/filePromise';

	@Component
	export default class DownloadBtnEx extends Vue {
		filePromise = filePromise;
	}
</script>
