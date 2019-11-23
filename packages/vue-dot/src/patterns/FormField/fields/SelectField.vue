<template>
	<FormFieldCtn v-bind="$props">
		<template #content="{ emitChangeEvent }">
			<VSelect
				v-model="field.value"
				:label="field.label"
				:items="field.items"
				@change="emitChangeEvent(field)"
			/>
		</template>
	</FormFieldCtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			field: {
				type: [Array, Object],
				required: true
			}
		}
	});

	@Component
	export default class SelectField extends Props {}
</script>
