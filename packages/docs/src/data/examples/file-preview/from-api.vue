<template>
	<FilePreview
		:file="file"
		:options="options"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FilePreviewFromApi extends Vue {
		file: Blob | null = null;

		options = {
			image: {
				alt: 'Photo de paysage montagneux du site Picsum.'
			}
		};

		mounted() {
			fetch('https://picsum.photos/seed/picsum/750/350')
				.then((res) => res.blob())
				.then((blob) => this.file = blob);
		}
	}
</script>
