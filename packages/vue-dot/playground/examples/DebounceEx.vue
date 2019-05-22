<template>
	<!-- v-debounce -->
	<DocSection title="v-debounce">
		<h2 class="subheading mb-3 font-weight-bold">
			Native input
		</h2>

		<label>
			<input
				v-model.lazy="text"
				v-debounce="1000"

				placeholder="Type here"
				class="vd-simple-input"
			>
		</label>

		<h2 class="subheading mt-3 font-weight-bold">
			VTextField
		</h2>

		<VTextField
			v-debounce.1000="e => text = e"
			:value="text"

			label="Type here"
			class="no-flex"
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

	export default Vue.extend({
		name: 'DebounceEx',
		data() {
			return {
				text: ''
			};
		}
	});
</script>

<style lang="scss" scoped>
	.vd-simple-input {
		outline: 0;
		width: 100%;
		padding: 5px 0;
		color: inherit;
		font-size: 1rem;
		border-bottom: 1px solid rgba(0, 0, 0, .42);

		&:focus {
			color: #01579b;
			border-color: #01579b;
		}
	}
</style>
