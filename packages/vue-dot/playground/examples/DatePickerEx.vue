<template>
	<DocSection title="DatePicker">
		<!-- <DatePicker v-model="date" />

		<DatePicker
			birthdate
			:text-field-options="{
				appendIcon: 'code',
				clearable: true,
				appendIcon: 'code',
				prependInnerIcon: 'menu',
				appendOuterIcon: 'home'
			}"
			:prepend-icon="false"
		/> -->
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerEx extends Vue {
		date = '';
	}
</script>
