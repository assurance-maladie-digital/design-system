<template>
	<div>
		<DatePicker v-model="date" />

		<p
			v-if="date"
			class="mt-4 mb-0"
		>
			{{ date }}
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DatePickerEx extends Vue {
		date = '';
	}
</script>
