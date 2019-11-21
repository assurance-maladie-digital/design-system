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

	const Props = Vue.extend({
		props: {
			field: {
				type: [Array, Object],
				required: true
			}
		}
	});

	@Component({
		inheritAttrs: false
		// functional: true
		// render(h) {
			//
		// }
	})
	export default class FormFieldCtn extends Props {
		/**
		 * Update the v-model by emitting 'change' event
		 * Also emits 'refresh' event if the field is dynamic
		 */
		emitChangeEvent(field: Field) {
			this.$emit('change', field);

			// // If the field has the `dynamic` property
			// if (field.dynamic) {
			// 	// Also emit 'refresh' event
			// 	this.$emit('refresh');
			// }
		}

		created() {
			// console.log(this);
		}
	}
</script>
