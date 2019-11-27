<template>
	<VLayout
		wrap
		class="ma-n4 no-max-width"
	>
		<slot
			name="content-1"
			v-bind="{ field: fields[0] }"
		/>

		<slot
			name="content-2"
			v-bind="{ field: fields[1] }"
		/>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	const Props = Vue.extend({
		props: {
			fields: {
				type: [Array, Object],
				required: true
			}
		}
	});

	@Component
	export default class TwoColumnsLayout extends Props {}
</script>

<style lang="scss" scoped>
	.no-max-width {
		max-width: none;
	}
</style>
