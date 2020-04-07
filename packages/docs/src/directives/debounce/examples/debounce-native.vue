<template>
	<div>
		<label class="form-input-label">
			Rechercher

			<input
				v-model.lazy="search"
				v-debounce="1000"
				class="form-input"
			>
		</label>

		<p v-if="search">
			Recherche :
			<span>
				{{ search }}
			</span>
		</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				search: ''
			};
		}
	};
</script>

<style scoped>
	.form-input-label {
		display: flex;
		font-weight: 700;
		font-size: 1.15rem;
		flex-direction: column;
	}

	.form-input {
		outline: 0;
		padding: 8px;
		margin-top: 8px;
		font-size: 1rem;
		font-weight: 400;
		border-radius: 2px;
		border: 1px solid rgba(0, 0, 0, .42);
	}

	.form-input:focus {
		color: #003463;
		border-color: #003463;
	}

	p {
		margin-top: 16px;
		margin-bottom: 0;
	}

	p span {
		font-style: italic;
	}
</style>
