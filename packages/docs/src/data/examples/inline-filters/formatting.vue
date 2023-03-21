<template>
	<div class="d-flex justify-center">
		<InlineFilters
			v-model="filters"
			:chips-limit="8"
		>
			<template #filter-nom="{ on, attrs }">
				<VTextField
					label="Nom"
					outlined
					class="mt-3"
					v-bind="attrs"
					v-on="on"
				/>
			</template>
		</InlineFilters>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	interface IndexedObject<T = string> {
		[key: string]: T;
	};

	@Component
	export default class Formating extends Vue {

		filters = [
			{
				name: 'nom',
				label: 'Nom',
				description: "Quel est le nom du patient ?",
				formatting: (value: string): string => `Le nom du patient est ${value}`,
				chips: []
			},
		];
	}
</script>
