<template>
	<div class="d-flex justify-center">
		<NewFilter
			v-model="filters"
			:simple-mode="true"
			:chips-limit="8"
			v-bind="$attrs"
			v-on="$listeners"
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
			<template #filter-date="{ on, attrs }">
				<DatePicker
					outlined
					class="mt-4"
					v-bind="attrs"
					v-on="on"
				/>
			</template>
		</NewFilter>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';


	@Component({
		inheritAttrs: false
	})
	export default class FilterModuleUsage extends Vue {
		filters = [
			{
				name: 'name',
				label: 'Nom',
				description: 'Entrez ici le nom du patient que vous recherchez',
				chips: []
			},
			{
				name: 'date',
				label: 'Date',
				description: 'Entrer ici la date du RDV que vous recherchez',
				chips: []
			},
		];

		options = {
			booleans: [
				'simpleMode',
				'hideReset'
			]
		};
	}
</script>
