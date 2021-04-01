<template>
	<DocSection title="SubHeader">
		<SubHeader
			:loading="loading"
			:data-list-group-items="dataListGroupItems"
			title-text="Prénom Nom (d'usage)"
			sub-title-text="1 69 08 75 125 456 75"
			@click:list-item="setItemValue"
		>
			<!-- ProgressBar -->
			<template #additional-informations>
				<VSpacer />

				<div>
					<VFadeTransition mode="out-in">
						<div
							v-if="loading"
							key="progress-skeleton"
						>
							<HeaderLoading
								class="mt-8"
								height="24"
								width="160"
								dark
							/>

							<HeaderLoading
								class="mt-2 mb-1"
								height="8"
								width="100%"
								tile
								dark
							/>
						</div>

						<div
							v-else
							key="progress-data"
						>
							<p class="white--text mt-8 mb-0">
								Profil complété à 50%
							</p>

							<VProgressLinear
								v-bind="progressLinearOpts"
								:value="progressValue"
								class="mb-1"
							/>
						</div>
					</VFadeTransition>
				</div>
			</template>
		</SubHeader>

		<VBtn
			class="mt-4"
			color="accent"
			@click="loading = !loading"
		>
			{{ loading ? 'Unset' : 'Set' }} loading
		</VBtn>

		<VTextField
			v-model="actionValue"
			label="New value"
			class="vd-form-input mt-4"
			outlined
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataListActionEvent } from '../../src/patterns/DataListGroup/types';
	import { dataListGroupItems } from '../../src/patterns/SubHeader/tests/data/subHeader';

	@Component
	export default class SubHeaderEx extends Vue {
		dataListGroupItems = dataListGroupItems;

		actionValue: string | null = 'New text';

		progressValue = 50;

		progressLinearOpts = {
			class: 'mt-2',
			color: '#fff',
			height: '8px',
			backgroundColor: '#fff',
			backgroundOpacity: '.24'
		};

		loading = false;

		/**
		 * Set the new value to the corresponding dataList item
		 *
		 * @param {DataListActionEvent} dataListAction The dataListAction object containing dataListIndex and itemIndex
		 */
		setItemValue({ dataListIndex, itemIndex }: DataListActionEvent): void {
			this.$set(this.dataListGroupItems[dataListIndex].items[itemIndex], 'value', this.actionValue);
		}
	}
</script>
