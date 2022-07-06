<template>
	<div class="debounce-native-ex">
		<label
			for="debounce-simple-input"
			class="form-input-label"
		>
			Rechercher
		</label>

		<input
			id="debounce-simple-input"
			v-model.lazy="search"
			v-debounce
			class="form-input"
		>

		<p v-if="search">
			Votre recherche :

			<span>
				{{ search }}
			</span>
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DebounceNative extends Vue {
		search: string | null = null;
	}
</script>

<style scoped>
	.form-input-label {
		width: 328px;
		display: block;
		color: hsla(0, 0%, 100%, .7);
		font-weight: 300;
		/**
		 * Use inverted colors with mix-blend-mode
		 * to support dark mode
		 */
		mix-blend-mode: difference;
	}

	.form-input {
		width: 328px;
		padding: 8px;
		margin-top: 2px;
		font-size: 1rem;
		font-weight: 400;
		border-radius: 4px;
		mix-blend-mode: difference;
		color: hsla(0, 0%, 100%, .7);
		outline-color: hsla(0, 0%, 60%, .7);
		border: 1px solid hsla(0, 0%, 60%, .7);
	}

	.form-input-label::selection {
		color: #fff;
		background-color: #ad9269;
	}

	.form-input-label::-moz-selection {
		color: #fff;
		background-color: #ad9269;
	}

	.form-input:focus {
		color: #fff;
		border-color: #ffcb9c;
	}

	p {
		margin-top: 16px;
		margin-bottom: 0;
	}

	p span {
		font-style: italic;
	}
</style>
