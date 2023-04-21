<template>
	<div>
		<FilePreview
		v-if="file"
			:file="file"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FilePreviewUsage extends Vue {
		file: File | null = null;
		myImage = new Image

		mounted() {
			fetch( 'https://picsum.photos/700')
			.then((res) => res.blob())
			.then((myBlob) => {
				const myFile = new File([myBlob], 'image.jpeg', {
					type: myBlob.type,
				});
				this.file = myFile
			});
		}
	}

</script>
