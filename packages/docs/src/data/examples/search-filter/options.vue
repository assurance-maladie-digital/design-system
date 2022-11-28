<template>
	<NewFilter
		v-model="filters"
		:simple-mode="false"
		:chips-limit="8"
		@remove-chip="removeChip($event)"
		@reset-filter="reset"
	>
		<template #filter-search="{ on, attrs }">
			<SearchFilter
				splited="true"
				height="200"
				:chip="removedChip"
				:reset="resetStatus"
				:multiple="false"
				:label-chip="false"
				v-bind="attrs"
				v-on="on"
				@change="change"
			/>
		</template>
	</NewFilter>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class SearchFilterOptions extends Vue {
		removedChip = '';
		resetFilter = false;

		filters = [
			{
				name: 'search',
				label: 'Rechercher',
				splited: true,
				chips: [],
				formatting: (value: string): string => value,
				clearAfterValidate: true
			}
		];

		options = {
			booleans: [
				'height'
			]
		}

		get resetStatus(): boolean {
			return this.resetFilter;
		}

		removeChip(chip: string): void {
			if (chip) {
				this.removedChip = Object.values(chip)[0];
			}
		}

		reset(): void {
			this.resetFilter = true;
		}

		change(): void {
			this.resetFilter = false;
		}
	}
</script>
