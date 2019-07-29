<template>
	<DocSection title="DataList">
		<DataList
			:list="[
				{
					key: 'Civility',
					value: 'Mr'
				},
				{
					key: 'Name',
					value: 'Dupont'
				},
				{
					key: 'First name',
					value: 'Paul'
				},
				{
					key: 'Birth date',
					value: '09/24/1970'
				},
				{
					key: 'Nationality',
					value: 'French'
				},
				{
					key: 'Native country',
					value: 'France'
				},
				{
					key: 'Date of registration',
					value: ''
				}
			]"
			:label-color="dark ? 'white' : '#757575'"
			:value-color="dark ? '#ccc' : '#333'"
			list-title="Informations"
			flex
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DataListEx extends Vue {
		get dark() {
			return this.$vuetify.theme.dark;
		}
	}
</script>
