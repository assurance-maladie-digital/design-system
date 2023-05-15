<template>
	<div
		:class="{ 'primary': $attrs.dark }"
		class="d-flex flex-wrap align-center justify-center w-100"
	>
		<BackBtn
			v-bind="$attrs"
			v-on="$listeners"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component({
		inheritAttrs: false
	})
	export default class BackBtnUsage extends Vue {
		options = {
			booleans: [
				'hideBackIcon',
				'dark'
			]
		};
	}
</script>
