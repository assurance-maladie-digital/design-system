<template>
	<DocSection
		no-divider
		title="CopyBtn"
	>
		<p>Click the button bellow to copy "Test".</p>

		<CopyBtn
			text-to-copy="Test"
			label="Copy to clipboard"
			:vuetify-options="{
				tooltip: {
					right: false,
					bottom: true,
					color: 'accent'
				}
			}"
		>
			<template #icon>
				<VIcon>
					text_fields
				</VIcon>
			</template>

			<template #tooltip>
				Copied!
			</template>
		</CopyBtn>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class CopyBtnEx extends Vue {}
</script>
