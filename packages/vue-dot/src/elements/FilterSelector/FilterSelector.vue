<template>
	<VMenu offset-y>
		<template #activator="{ on, attrs }">
			<v-btn
				color="secondary"
				text
				v-bind="attrs"
				v-on="on"
			>
				<VIcon
					color="primary"
					class="mr-2"
				>
					{{ filterIcon }}
				</VIcon>
				Filtres
			</v-btn>
		</template>
		<VList>
			<VListItem
				v-for="(item, index) in filters"
				:key="index"
			>
				<VListItemTitle @click="openModal(index)">
					{{ item.label }}
				</VListItemTitle>
			</VListItem>
		</VList>
	</VMenu>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiFilterVariant } from '@mdi/js';

	import { FilterItem } from '../../patterns/FilterModule/types';

	const Props = Vue.extend({
		props: {
			filters: {
				type: Array as PropType<FilterItem[]>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class FilterSelector extends MixinsDeclaration {
		isOpen = false;

		// Icons
		filterIcon = mdiFilterVariant;

		openModal(index: number): void {
			this.$emit('filter-selected', index);
		}
	}
</script>

<style lang="scss" scoped>

</style>
