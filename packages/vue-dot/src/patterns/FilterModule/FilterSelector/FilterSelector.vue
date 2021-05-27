<template>
	<VMenu offset-y>
		<template #activator="{ on, attrs }">
			<VBtn
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

	import { locales } from './locales';

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

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class FilterSelector extends MixinsDeclaration {
		// Locales
		locales = locales;

		isOpen = false;

		// Icons
		filterIcon = mdiFilterVariant;

		openModal(index: number): void {
			this.$emit('filter-selected', index);
		}
	}
</script>
