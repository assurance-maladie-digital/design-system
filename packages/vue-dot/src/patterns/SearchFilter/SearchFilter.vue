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
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { mdiMagnify } from '@mdi/js';

	@Component<SearchFilter>({
		watch: {
			value(newValue: string[]) {
				this.internalValue = newValue;
			}
		}
	})

	export default class SearchFilter extends Vue {
		searchIcon = mdiMagnify;
		filterSearch = '';
		tempListSearch: string[] = [];
		listSearch: string[] = [
			'foo',
			'bar',
			'baz'
		];
		selectedItems: string[] = [];
		internalValue: string[] = [];

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
			this.$emit('change', this.internalValue);
		}
	}
</script>
