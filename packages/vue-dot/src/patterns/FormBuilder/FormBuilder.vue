<template>
	<div class="vd-form-builder">
		<FormField
			v-for="(field, index) in form"
			:key="index"
			v-model="form[index]"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			value: {
				type: [Array, Object],
				required: true
			}
		}
	});

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class FormBuilder extends Props {
		get form() {
			return this.value;
		}

		set form(value: any) {
			this.$emit('change', value);
		}
	}
</script>
