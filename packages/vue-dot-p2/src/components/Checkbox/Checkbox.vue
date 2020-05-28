<template>
	<VCheckbox
		v-model="computedCheck"
		:label="label"
		:rules="rules"
		:on-icon="checkIcon"
		:off-icon="checkIcon"
		class="p2-checkbox mt-4"
		color="black"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiCheck } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			check: {
				type: Boolean,
				required: true
			},
			label: {
				type: String,
				required: false,
				default: ''
			},
			rules: {
				type: Array,
				required: false,
				default: () => []
			}
		}
	});

	@Component({
		model: {
			prop: 'check',
			event: 'change'
		}
	})
	export default class Checkbox extends Props {
		checkIcon = mdiCheck;

		get computedCheck(): boolean {
			return this.check;
		}

		set computedCheck(value) {
			this.$emit('change', value);
		}
	}
</script>
