<template>
	<div class="d-flex flex-wrap align-center justify-center">
		<PeriodField
			v-model="periodValue"
			v-bind="$attrs"
			v-on="$listeners"
			class="vd-form-input"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class PeriodFieldUsage extends Vue {
		periodValue = {
			from: null,
			to: null
		};

		tabs = [
			'outlined'
		];
	}
</script>
