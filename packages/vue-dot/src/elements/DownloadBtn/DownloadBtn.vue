<template>
	<VBtn
		:loading="state === 'pending'"
		outlined
		height="56"
		color="grey darken-1"
		class="vd-form-input text-none"
		@click="download"
	>
		<VIcon class="mr-2">
			{{ fileIcon }}
		</VIcon>

		<span>{{ text }}</span>

		<VSpacer />

		<VIcon color="primary">
			{{ downloadIcon }}
		</VIcon>
	</VBtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiDownload } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			text: {
				type: String,
				default: null
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	/**
	 * CopyBtn is a component that copy text to the clipboard and
	 * shows a tooltip
	 */
	@Component
	export default class CopyBtn extends MixinsDeclaration {
		downloadIcon = mdiDownload;

	}
</script>
