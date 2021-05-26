<template>
	<div>
		<VTextField
			v-debounce.2000="e => search = e"
			:value="search"
			outlined
			clearable
			hide-details
			class="vd-form-input"
			label="Rechercher"
			@click:clear="search = ''"
		/>

		<p
			v-if="search"
			class="mb-0"
		>
			Votre recherche :

			<span class="font-italic">
				{{ search }}
			</span>
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DebounceArg extends Vue {
		search = '';
	}
</script>
