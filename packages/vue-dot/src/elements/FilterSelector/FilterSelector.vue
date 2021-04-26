<template>
	<v-menu offset-y>
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
		<v-list>
			<v-list-item
				v-for="(item, index) in filters"
				:key="index"
			>
				<v-list-item-title @click="openModal(index)">
					{{ item.label }}
				</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiFilterVariant } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			filters: {
				type: Array,
				default: undefined,
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
