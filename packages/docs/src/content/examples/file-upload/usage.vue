<template>
	<div class="d-flex flex-wrap align-center justify-center w-100">
		<FileUpload
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class Usage extends Vue {
		defaultProps = {
			allowedExtensions: [
				'pdf',
				'jpg',
				'jpeg',
				'png'
			]
		};

		propsHiddenByDefault = [
			'fileSizeUnits',
			'allowedExtensions'
		];

		options = {
			booleans: [
				'multiple',
				'noRipple',
				'disabled'
			],
			combobox: {
				allowedExtensions: this.defaultProps.allowedExtensions
			}
		};
	}
</script>
