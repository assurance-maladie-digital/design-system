<template>
	<div class="doc-section">
		<slot name="title">
			<h3
				v-if="title"
				class="primary--text mb-3 font-weight-medium headline"
			>
				{{ title }}
			</h3>
		</slot>

		<slot />

		<VDivider
			v-if="!noDivider"
			class="divider my-4"
		/>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';

	export default Vue.extend({
		name: 'DocSection',
		props: {
			title: {
				type: String,
				default: undefined
			},
			// Disable divider
			// eg. for last section
			noDivider: {
				type: Boolean,
				default: false
			}
		}
	});
</script>

<style lang="scss" scoped>
	.doc-section {
		width: 100%;
	}
</style>
