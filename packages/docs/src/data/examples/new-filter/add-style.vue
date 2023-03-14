<template>
	<div class="d-flex justify-center">
		<FilterMenu
			v-model="filters"
			:simple-mode="true"
			:hide-reset="true"
			v-bind="$attrs"
			v-on="$listeners"
		>
			<template #filter-firstname="{ on, attrs }">
				<VTextField
					label="Prénom"
					class="mt-4"
					outlined
					v-bind="attrs"
					v-on="on"
				/>
			</template>
			<template #filter-lastname="{ on, attrs }">
				<VTextField
					label="Nom"
					class="mt-4"
					outlined
					v-bind="attrs"
					v-on="on"
				/>
			</template>
			<template #filter-date="{ on, attrs }">
				<DatePicker
					label="Date"
					class="mt-4"
					outlined
					v-bind="attrs"
					v-on="on"
				/>
			</template>
			<template #filter-age="{ on, attrs }">
				<VRangeSlider
					max="100"
					min="1"
					v-bind="attrs"
					v-on="on"
				/>
			</template>
		</FilterMenu>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class FilterModuleUsage extends Vue {
		filters = [
			{
				name: 'firstname',
				label: 'Prénom',
				description: 'Entrez ici le prénom du patient que vous recherchez',
				chips: []
			},
			{
				name: 'lastname',
				label: 'Nom',
				description: 'Entrez ici le nom du patient que vous recherchez',
				chips: []
			},
			{
				name: 'age',
				label: 'Age',
				description: 'Selectionner l\'age',
				limited: true,
				chips: [],
				value: [0,0],
				defaultValue: [50,50],
				style: 'margin-left: 40px;'
			},
		];
	}
</script>
