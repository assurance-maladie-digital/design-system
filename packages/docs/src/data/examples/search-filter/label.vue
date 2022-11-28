<template>
	<div class="d-flex justify-center">
		<NewFilter
			v-model="filters"
			:simple-mode="true"
			:chips-limit="8"
			v-bind="$attrs"
			v-on="$listeners"
		>
			<template #filter-search="{ on, attrs }">
				<SearchFilter
					splited="true"
					height="200"
					:label-chip="true"
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
	import SearchFilter from '@cnamts/vue-dot/src/patterns/SearchFilter';

	@Component({
		inheritAttrs: false,
		components: {
			SearchFilter
		}
	})
	export default class FilterModuleUsage extends Vue {
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
				'hideReset'
			]
		}
	}
</script>
