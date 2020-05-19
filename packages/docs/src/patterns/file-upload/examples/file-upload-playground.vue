<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="props.multiple"
				label="Multiple"
			/>

			<VSwitch
				v-model="props.noRipple"
				label="Désactive l'ondulation"
			/>

			<VSwitch
				v-model="props.disabled"
				label="Désactive le composant"
			/>
		</VCol>
		<VCol
			cols="12"
			md="6"
		>
			<FileUpload
				v-model="file"
				v-bind="props"
			/>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FileUploadPlayground extends Vue {
		file: File | null = null;

		props = {
			multiple: false,
			noRipple: false,
			disabled: false
		};
	}
</script>
