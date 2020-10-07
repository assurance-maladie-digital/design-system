<template>
	<DocSection
		title="DialogBox"
	>
		<VBtn
			color="primary"
			@click="dialog = true"
		>
			Show dialog
		</VBtn>

		<DialogBox
			v-model="dialog"
			title="DialogBox"
			@cancel="dialog = false"
			@confirm="dialog = false"
		>
			<p>This is a simple dialog</p>
		</DialogBox>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DialogBoxEx extends Vue {
		dialog = false;
	}
</script>
