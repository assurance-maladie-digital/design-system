<template>
	<div class="d-flex flex-wrap align-center justify-center">
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
				'noPadding',
				'dark',
				'outlined'
			],
			sliders: {
				elevation: {
					min: 0,
					max: 10
				}
			},
		};
	}
</script>
