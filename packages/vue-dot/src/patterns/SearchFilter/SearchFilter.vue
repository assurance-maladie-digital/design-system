<template>
	<div>
		<VTextField
			v-model="filterSearch"
			label="Rechercher"
			outlined
			clearable
			@input.native="filterResults"
			@click:clear="clearResults"
		>
			<template #prepend-inner>
				<VIcon>
					{{ searchIcon }}
				</VIcon>
			</template>
		</VTextField>
		<VCol>
			<div
				v-for="item in tempListSearch"
				:key="item"
			>
				<VRow>
					<VCheckbox
						v-model="selectedItems"
						height="10"
						:value="item"
						@change="emitChangeEvent()"
					/>
					<VCol class="d-flex align-center">
						{{ item }}
					</VCol>
				</VRow>
			</div>
		</VCol>
		selectedItems : {{ selectedItems }}
		internalValue : {{ internalValue }}
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { PropType } from 'vue/types/v3-component-props';
	import { mdiMagnify } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			value: {
				type: Array as PropType<string[]>,
				default: () => [],
				required: true
			}
		}
	});

	@Component<SearchFilter>({
		watch: {
			value(newValue: string[]) {
				this.internalValue = newValue;
			}
		}
	})

	export default class SearchFilter extends Props {
		searchIcon = mdiMagnify;
		filterSearch = '';
		tempListSearch: string[] = [];
		listSearch: string[] = [
			'foo',
			'bar',
			'baz'
		];
		selectedItems: string[] = [];
		internalValue: string[] = this.value;

		mounted() {
			this.tempListSearch = this.listSearch;
		}

		filterResults(): void {
			this.tempListSearch = this.listSearch.filter((item) => item.includes(this.filterSearch));
			if (this.filterSearch === '' || this.filterSearch === null || this.filterSearch === undefined) {
				this.clearResults();
			}
		}

		clearResults(): void {
			this.tempListSearch = this.listSearch;
		}

		emitChangeEvent(): void {
			this.internalValue = this.selectedItems;
			if (this.internalValue.length > 0) {
				this.$emit('change', this.internalValue);
			}
		}
	}
</script>
