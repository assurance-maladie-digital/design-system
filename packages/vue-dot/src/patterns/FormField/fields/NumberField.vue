<template>
	<FormFieldCtn v-bind="$props">
		<template #content="{ emitChangeEvent }">
			<VTextField
				v-model="field.value"
				v-mask="field.mask"
				:label="field.label"
				@change="emitChangeEvent(field)"
			/>
		</template>
	</FormFieldCtn>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import FormFieldCtn from '../../FormFieldCtn';

	const Props = Vue.extend({
		props: {
			field: {
				type: [Array, Object],
				required: true
			}
		}
	});

	@Component({
		components: {
			FormFieldCtn
		}
	})
	export default class NumberField extends Props {}
</script>
