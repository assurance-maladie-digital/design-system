<template>
	<VLayout class="vd-layout ma-n4">
		<slot
			name="content-1"
			:field="getField(0)"
		/>
	</VLayout>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { LayoutComponent } from '../mixins/layoutComponent';

	@Component
	export default class LayoutM extends LayoutComponent {}
</script>

<style lang="scss" scoped>
	.vd-layout .v-input {
		width: 50%;
		flex: none;
	}
</style>
