<template>
	<DocSection
		no-divider
		title="DialogBox"
	>
		<h2 class="subtitle-1 mb-4 font-weight-bold">
			Show list of button actions
		</h2>

		<VBtn
			color="primary"
			class="ml-6 px-5"
			@click="dialog = true"
		>
			Show dialog
		</VBtn>

		<DialogBox
			:dialog.sync="dialog"
			@cancel="dialog = false"
			@validate="dialog = false"
		>
			<div>This it's a simple dialog with a text ...</div>
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
