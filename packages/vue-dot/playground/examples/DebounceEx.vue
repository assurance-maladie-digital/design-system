<template>
	<!-- v-debounce -->
	<DocSection title="v-debounce">
		<h2 class="text-subtitle-1 mb-4 font-weight-bold">
			Native input
		</h2>

		<label for="debounce-simple-input">
			Type below
		</label>

		<input
			id="debounce-simple-input"

			v-model.lazy="text"
			v-debounce="1000"

			class="vd-simple-input vd-form-input"
		>

		<h2 class="text-subtitle-1 mt-4 font-weight-bold">
			VTextField
		</h2>

		<VTextField
			v-debounce.1000="e => text = e"
			:value="text"

			label="Type here"
			class="vd-form-input"
		/>

		<p class="mb-0 mt-2">
			Debounced text:
			<span class="font-weight-medium">
				{{ text }}
			</span>
		</p>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DebounceEx extends Vue {
		text = '';
	}
</script>

<style lang="scss" scoped>
	.vd-simple-input {
		outline: 0;
		padding: 5px 0;
		color: inherit;
		font-size: 1rem;
		border-bottom: 1px solid;
	}
</style>
