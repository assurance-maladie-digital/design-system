<template>
	<div>
		<slot
			name="content"
			v-bind="{
				emitChangeEvent
			}"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { Field } from '../FormField/types';

	@Component({
		inheritAttrs: false
	})
	export default class FormFieldCtn extends Vue {
		/**
		 * Update the v-model by emitting 'change' event
		 * Also emits 'refresh' event if the field is dynamic
		 */
		emitChangeEvent(field: Field) {
			this.$nextTick(() => {
				this.$parent.$emit('change', field);
			});

			// // If the field has the `dynamic` property
			// if (field.dynamic) {
			// 	// Also emit 'refresh' event
			// 	this.$emit('refresh');
			// }
		}
	}
</script>
