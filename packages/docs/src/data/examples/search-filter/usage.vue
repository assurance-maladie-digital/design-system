<template>
	<div class="d-flex justify-center">
		<NewFilter
			v-model="filters"
			:simple-mode="true"
			:chips-limit="8"
			@remove-chip="removeChip($event)"
			@reset-filter="reset"
			v-bind="$attrs"
			v-on="$listeners"
		>
			<template #filter-name="{ on, attrs }">
				<SearchFilter
					splited="true"
					height="200"
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
				'simpleMode',
				'hideReset',
				'multiple',
				'labelChip'
			],
			textFields: [
				'height'
			]
		};

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
