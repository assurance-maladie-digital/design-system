<template>
	<VMenu v-bind="options.menu">
		<template #activator="{ on, attrs }">
			<VBtn
				v-bind="{
					...attrs,
					...options.btn
				}"
				v-on="on"
			>
				<VIcon v-bind="options.icon">
					{{ filterIcon }}
				</VIcon>

				{{ locales.filters }}
			</VBtn>
		</template>

		<VList v-bind="options.list">
			<VListItem
				v-for="(item, index) in filters"
				:key="index"
				v-bind="options.listItem"
				@click="emitFilterSelectedEvent(index)"
			>
				{{ item.fieldOptions.filterTitle }}
			</VListItem>
		</VList>
	</VMenu>
</template>

<script lang="ts">
	import Vue, { PropType } from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { config } from './config';
	import { locales } from './locales';

	import { customizable } from '../../../mixins/customizable';

	import { mdiFilterVariant } from '@mdi/js';

	import { Field } from '@cnamts/form-builder/src/components/FormField/types';

	const Props = Vue.extend({
		props: {
			filters: {
				type: Array as PropType<Field[]>,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props, customizable(config));

	@Component
	export default class FilterSelector extends MixinsDeclaration {
		// Locales
		locales = locales;

		// Icons
		filterIcon = mdiFilterVariant;

		emitFilterSelectedEvent(index: number): void {
			this.$emit('filter-selected', index);
		}
	}
</script>
