<template>
	<v-menu offset-y>
		<template #activator="{ on, attrs }">
			<v-btn
				color="secondary"
				dark
				rounded
				v-bind="attrs"
				class="mr-2"
				style="text-transform:lowercase;"
				v-on="on"
			>
				{{ `${applyedFilters.length} ${applyedFilters > 1 ? 'filtres' : 'filtre'}` }}
				<VIcon
					color="white"
					class="ml-2"
					@click="resetFilters"
				>
					{{ closeIcon }}
				</VIcon>
			</v-btn>
		</template>
		<v-list>
			<v-list-item
				v-for="(item, index) in applyedFilters"
				:key="index"
			>
				<v-list-item-title v-if="item.form.filterList.value">
					<div style="display: flex; align-items:center;">
						<div style="width:300px;">
							<div>
								{{ item.label }}
							</div>
							<div>
								{{ item.form.filterList.value.value }}
								<!--{{ `${item.form.filterList.value.value.length} ${item.form.filterList.value.value > 1 ? item.label : item.label} sélectionné` }}-->
							</div>
						</div>
						<div
							class="mr-2"
							@click="editFilters(index)"
						>
							<VIcon
								color="black"
								class=""
							>
								{{ editIcon }}
							</VIcon>
						</div>
						<div
							class="mr-2"
							@click="clearFiltersRow(index)"
						>
							<VIcon
								color="black"
								class=""
							>
								{{ deleteIcon }}
							</VIcon>
						</div>
					</div>
				</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component, { mixins } from 'vue-class-component';

	import { mdiCloseCircle } from '@mdi/js';
	import { mdiWindowClose } from '@mdi/js';
	import { mdiPencil } from '@mdi/js';

	const Props = Vue.extend({
		props: {
			applyedFilters: {
				type: Array,
				default: undefined,
				required: true
			}
		}
	});

	const MixinsDeclaration = mixins(Props);

	@Component
	export default class FilterManager extends MixinsDeclaration {
		// Icon
		closeIcon = mdiCloseCircle;
		deleteIcon = mdiWindowClose;
		editIcon = mdiPencil;

		editFilters(index: number): void {
			this.$emit('edit-filters', index);
		}

		clearFiltersRow(index: number): void {
			this.$emit('clear-filters-row', index);
		}

		resetFilters(): void {
			this.$emit('reset-filters');
		}
	}
</script>

<style lang="scss" scoped>

</style>
