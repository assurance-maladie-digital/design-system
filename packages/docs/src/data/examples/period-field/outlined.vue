<template>
	<div class="d-flex flex-wrap max-width-none">
		<PeriodField
			v-model="periodValue"
			outlined
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class PeriodFieldOutlined extends Vue {
		periodValue = {
			from: null,
			to: null
		};
	}
</script>
