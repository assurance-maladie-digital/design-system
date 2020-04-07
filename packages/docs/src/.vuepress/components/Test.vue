<template>
	<div>
		<VBtn color="primary">
			Test
		</VBtn>

		<DatePicker outlined />
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class Test extends Vue {}
</script>
