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
	import Component, { mixins } from 'vue-class-component';
	import { mdiMagnify } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			chip: {
				type: String,
				default: ''
			},
			reset: {
				type: Boolean,
				default: false
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component<SearchFilter>({
		watch: {
			value(newValue: string[]) {
				this.internalValue = newValue;
			},
			chip(value: string) {
				if (value && value !== '') {
					this.selectedItems = this.selectedItems.filter((item: string) => item !== value);
				}
			},
			resetValue(value: boolean) {
				if (value) {
					this.selectedItems = [];
				}
			}
		}
	})

	export default class SearchFilter extends MixinsDeclaration {
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

		get resetValue(): boolean {
			return this.reset;
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
