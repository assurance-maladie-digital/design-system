<template>
	<VCard
		min-height="300px"
		style="box-shadow: none"
	>
		<FiltersSideBar
			v-model="filters"
			:chips-limit="8"
		>
			<template #filter-age="{ on, attrs }">
				<VRangeSlider
					max="100"
					min="1"
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
				name: 'Age',
				label: 'age',
				description: 'Selectionner l\'age',
				formatting: (values: number[]): string => 'De ' + values[0] + ' à ' + values[1] + 'ans',
				limited: true,
				chips: [],
				value: [0,0],
				defaultValue: [50,50]
			},
		];
	}
</script>
