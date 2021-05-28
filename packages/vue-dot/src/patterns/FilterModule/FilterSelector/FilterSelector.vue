<template>
	<VMenu offset-y>
		<template #activator="{ on, attrs }">
			<VBtn
				v-bind="[attrs, options.btn]"
				v-on="on"
			>
				<VIcon
					v-bind="options.icon"
				>
					{{ filterIcon }}
				</VIcon>

				{{ locales.filters }}
			</VBtn>
		</template>

		<VList>
			<VListItem
				v-for="(item, index) in filters"
				:key="index"
				@click="openModal(index)"
			>
				{{ item.fieldOptions.modalTitle }}
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

		isOpen = false;

		openModal(index: number): void {
			this.$emit('filter-selected', index);
		}
	}
</script>
