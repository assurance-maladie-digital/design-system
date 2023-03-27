<template>
	<VCard
		min-height="300px"
		style="box-shadow: none"
	>
		<FiltersSideBar
			v-model="filters"
			:chips-limit="6"
		>
			<template #filter-name="{ on, attrs }">
				<VTextField
					label="Nom"
					class="mt-4"
					outlined
					v-bind="attrs"
					v-on="on"
				/>
			</template>
		</FiltersSideBar>
	</VCard>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FilterModuleUsage extends Vue {
		filters = [
			{
				name: 'name',
				label: 'Nom',
				description: 'Entrez un nom',
				chips: []
			}
		];
	}
</script>
