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
		{{ value }}
		<div
			v-if="tempListSearch.length"
			:style="filterHeight"
		>
			<VCol class="px-0 pt-0">
				<div
					v-for="item in tempListSearch"
					:key="item.id"
				>
					<VRow
						class="mx-0 px-3 my-0"
						:class="{ 'bg-blue': selectedItems.includes(item.name) }"
					>
						<VCheckbox
							v-model="selectedItems"
							height="9"
							:value="item.name"
							@change="emitChangeEvent()"
						/>
						<VCol class="d-flex align-center justify-space-between pl-2 pr-0">
							{{ item.name }}
							<VTooltip
								v-if="item.info !== ''"
								top
							>
								<template #activator="{ on, attrs }">
									<VBtn
										icon
										height="9"
										v-bind="attrs"
										v-on="on"
									>
										<VIcon color="grey lighten-3">
											{{ infoIcon }}
										</VIcon>
									</VBtn>
								</template>
								{{ item.info }}
							</VTooltip>
						</VCol>
					</VRow>
				</div>
			</VCol>
		</div>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';
	import { mdiMagnify, mdiInformation } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			height: {
				type: String,
				default: 'auto'
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	interface Item {
		name: string;
		info?: string;
	}

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
		infoIcon = mdiInformation;
		filterSearch = '';
		tempListSearch: Item[] = [];
		selectedItems: Array<string> = [];
		internalValue: Array<string> = [];

		mounted() {
			this.tempListSearch = this.listSearch;
		}

		get filterHeight(): string {
			if (this.height === 'auto') {
				return 'height: auto';
			} else {
				return `height: ${Number(this.height)}px; overflow-y: auto;`;
			}
		}

		filterResults(): void {
			this.tempListSearch = this.listSearch.filter((item: Item) => {
				return item.name.toLowerCase().includes(this.filterSearch.toLowerCase());
			});
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

<style lang="scss" scoped>
	@import '@cnamts/design-tokens/dist/tokens';
	.bg-blue {
		background-color: $vd-am-blue-lighten-90 !important;
	}
</style>
