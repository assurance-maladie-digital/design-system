<template>
	<div>
		<VMenu
			v-if="activeFilters.length"
			offset-y
			:close-on-content-click="false"
		>
			<template #activator="{ on }">
				<VChip
					class="mx-1"
					color="accent"
					close
					v-on="on"
					@click:close="deleteAllFilters"
				>
					<span>
						{{ locales.nbFilters(activeFilters.length) }}
					</span>
				</VChip>
			</template>

			<VList
				width="400"
				class="py-0"
			>
				<VListItem
					v-for="(row, index) in activeFilters"
					:key="index"
					two-line
				>
					<VListItemContent class="mr-2">
						<VListItemTitle v-text="row.label" />

						<VListItemSubtitle
							class="body-2"
							v-text="row.text"
						/>
					</VListItemContent>

					<VListItemAction>
						<VBtn
							icon
							@click="openFilterDialog(row.filterName)"
						>
							<VIcon>
								{{ editIcon }}
							</VIcon>
						</VBtn>
					</VListItemAction>

					<VListItemAction class="ml-0">
						<VBtn
							icon
							@click="deleteFilter(index)"
						>
							<VIcon>
								{{ removeIcon }}
							</VIcon>
						</VBtn>
					</VListItemAction>
				</VListItem>
			</VList>
		</VMenu>

		<VMenu offset-y>
			<template #activator="{ on }">
				<VBtn
					text
					class="mr-8"
					v-on="on"
				>
					<VIcon>{{ filterIcon }}</VIcon>
					{{ locales.addFilterLabel }}
				</VBtn>
			</template>

			<VList
				width="200"
				class="py-0"
			>
				<VListItem
					v-for="(row, index) in filters"
					:key="index"
					@click="openFilterDialog(index)"
				>
					<VListItemTitle v-text="row.label" />
				</VListItem>
			</VList>
		</VMenu>

		<VDialog
			v-model="filterDialog"
			max-width="360"
		>
			<VCard v-if="filterTypeEdit">
				<VCardTitle v-if="filterEditLabel">
					{{ filterEditLabel }}
				</VCardTitle>

				<VCardText class="pt-4">
					<VForm ref="filterForm">
						<FormFieldList
							:fields="filterTypeEdit.fields"
							@change="fieldsUpdated($event)"
						/>
					</VForm>

					<VBtn
						class="mt-8"
						block
						color="accent"
						@click="applyFilter"
					>
						{{ locales.applyFilterLabel }}
					</VBtn>
				</VCardText>
			</VCard>
		</VDialog>
	</div>
</template>

<script lang="ts">
	import Component, { mixins } from 'vue-class-component';

	import { mdiFilterVariant, mdiPencil, mdiClose } from '@mdi/js';

	import { Refs } from '@cnamts/vue-dot/src/types';

	import { locales } from './locales';

	import { FilterWorkflowCore } from './mixins/filterWorkflowCore';
	import FormFieldList from '@cnamts/form-builder/src/components/FormFieldList/FormFieldList.vue';

	const MixinsDeclaration = mixins(FilterWorkflowCore);

	@Component<FilterWorkflow>({
		components: {
			FormFieldList
		}
	})
	export default class FilterWorkflow extends MixinsDeclaration {
		$refs!: Refs<{
			filterForm: HTMLFormElement;
		}>;

		filterIcon = mdiFilterVariant;
		editIcon = mdiPencil;
		removeIcon = mdiClose;

		locales = locales;

		/** Apply the editing filter */
		submitForm(): void {
			if (!this.filterEditName || !this.filterTypeEdit) {
				return;
			}

			if (!this.$refs.filterForm.validate()) {
				return;
			}

			this.applyFilter();
		}
	}
</script>
