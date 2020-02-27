<template>
	<DocSection title="DataListItem">
		<DataListItem
			label="Label"
			value="Text"
		/>

		<DataListItem
			class="mt-4"
			label="Label"
		/>

		<DataListItem
			:vuetify-options="{
				chip: {
					color: 'accent'
				}
			}"
			class="mt-4"
			label="Label"
			value="Text"
			chip
		/>

		<DataListItem
			:icon="emailIcon"
			class="mt-4"
			label="Label"
			value="Text"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiEmail } from '@mdi/js';

	@Component
	export default class DataListItemEx extends Vue {
		emailIcon = mdiEmail;

		get dark() {
			return this.$vuetify.theme.dark;
		}
	}
</script>
