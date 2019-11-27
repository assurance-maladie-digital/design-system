<template>
	<VLayout class="ma-n4">
		<slot
			name="content-1"
			v-bind="getField(0)"
		/>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import LayoutComponent from '../mixins/layoutComponent';

	@Component
	export default class LayoutXL extends LayoutComponent {}
</script>
