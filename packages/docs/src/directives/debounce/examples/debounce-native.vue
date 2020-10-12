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
			class="vd-simple-input vd-form-input"
		>

		<p v-if="search">
			Recherche :
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
		search = '';
	}
</script>

<style scoped>
	.form-input-label {
		color: #ccc;
		display: inline-flex;
		flex-direction: column;
		/*
		 Use opposite colors with mix-blend-mode
		 to support dark mode
		*/
		mix-blend-mode: difference;
	}

	.form-input {
		padding: 8px;
		margin-top: 2px;
		font-size: 1rem;
		font-weight: 400;
		border-radius: 2px;
		outline-color: #ffcb9c;
		color: hsla(0, 0%, 100%, .8);
		border: 1px solid hsla(0, 0%, 100%, .7);
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
