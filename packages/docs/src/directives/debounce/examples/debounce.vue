<template>
	<div>
		<VTextField
			v-debounce.1000="e => search = e"
			:value="search"
			clearable
			class="form-input"
			label="Rechercher"
			@click:clear="search = ''"
		/>

		<p
			v-if="search"
			class="mb-0"
		>
			Recherche :
			<span class="font-italic">
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
