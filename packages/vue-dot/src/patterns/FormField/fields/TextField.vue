<template>
	<FormFieldCtn v-bind="$props">
		<template #content="{ emitChangeEvent }">
			<VTextField
				v-model="field.value"
				:label="field.label"
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
	export default class TextField extends Props {}
</script>
