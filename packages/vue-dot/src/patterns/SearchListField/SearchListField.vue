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
			<VListItemGroup
				:value="value"
				multiple
				active-class="am-blue-lighten-90"
				@change="emitChangeEvent"
			>
				<VListItem
					v-for="(item, index) in filteredItems"
					:key="index"
					:value="item.value"
				>
					<template #default="{ active }">
						<VListItemAction>
							<VCheckbox :input-value="active">
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
			</VListItemGroup>
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

		get filteredItems(): SearchListItem[] {
			if (this.search === null) {
				return this.items;
			}

			return this.items.filter(item => {
				return item.label.toLowerCase().includes((this.search as string).toLowerCase());
			});
		}

		emitChangeEvent(value: unknown[]): void {
			this.$emit('change', value);
		}
	}
</script>

<style lang="scss" scoped>
	.vd-search-list .v-list-item--active::before {
		opacity: 0;
	}
</style>
