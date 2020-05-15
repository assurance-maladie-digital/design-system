<template>
	<div>
		<h2 class="subtitle-1 mt-4 mb-2 font-weight-bold">
			Range
		</h2>

		<DatePicker
			v-model="startDate"
			text-field-class="mb-4"
			label="Date de départ"
		/>

		<DatePicker
			show-week-ends
			:start-date="startDate"
			label="Date de fin"
		/>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				startDate: ''
			};
		}
	};
</script>
