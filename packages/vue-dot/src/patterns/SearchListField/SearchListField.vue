<template>
	<div class="vd-search-list">
		<VTextField
			v-model="search"
			:label="locales.search"
			hide-details
			outlined
			clearable
		>
			<template #prepend-inner>
				<VIcon class="mr-1">
					{{ searchIcon }}
				</VIcon>
			</template>
		</VTextField>

		<VList class="pb-0">
			<VListItem
				v-for="(item) in filteredItems"
				:key="`item-${item.label}`"
				:input-value="selectedItems.includes(item.value)"
				active-class="am-blue-lighten-90"
				@click="toggleItem(item)"
			>
				<template #default="{ active, toggle }">
					<VListItemAction>
						<VCheckbox
							:input-value="active"
							@change="toggle"
						>
							<template #label>
								<span class="d-sr-only">
									{{ locales.checkboxLabel }}
								</span>
							</template>
						</VCheckbox>
					</VListItemAction>

					<VListItemContent>
						<VListItemTitle>{{ item.label }}</VListItemTitle>
					</VListItemContent>
				</template>
			</VListItem>
		</VList>
	</div>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiMagnify } from '@mdi/js';

	import { SearchListItem } from './types';
	import { locales } from './locales';

	const Props = Vue.extend({
		props: {
			value: {
				type: Array as PropType<unknown[]>,
				default: () => []
			},
			items: {
				type: Array as PropType<SearchListItem[]>,
				default: () => []
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component({
		model: {
			prop: 'value',
			event: 'change'
		}
	})
	export default class SearchListField extends MixinsDeclaration {
		locales = locales;

		searchIcon = mdiMagnify;

		search: string | null = null;
		selectedItems: unknown[] = [];

		get filteredItems(): SearchListItem[] {
			if (this.search === null) {
				return this.items;
			}

			const lowercaseSearch = this.search.toLowerCase();

			return this.items.filter((item) => {
				const lowercaseLabel = item.label.toLowerCase();

				return lowercaseLabel.includes(lowercaseSearch);
			});
		}

		toggleItem(toggledItem: SearchListItem): void {
			const index = this.selectedItems.findIndex((item) => item === toggledItem.value);

			if (index === -1) {
				this.emitChangeEvent([...this.value, toggledItem.value]);
			} else {
				this.emitChangeEvent([
					...this.selectedItems.slice(0, index),
					...this.selectedItems.slice(index + 1)
				]);
			}
		}

		emitChangeEvent(newValue: unknown[]): void {
			this.selectedItems = newValue;
			this.$emit('change', newValue);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-search-list .v-list-item--active::before {
		opacity: 0;
	}
</style>
