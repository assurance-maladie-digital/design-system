<template>
	<DocSection title="CopyBtn">
		<p>Click the button below to copy "Test".</p>

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
				<VIcon :color="btnColor">
					{{ plusIcon }}
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

	import { mdiPlusCircle } from '@mdi/js';

	@Component
	export default class CopyBtnEx extends Vue {
		plusIcon = mdiPlusCircle;

		get btnColor() {
			return this.$vuetify.theme.dark ? 'grey' : '';
		}
	}
</script>
