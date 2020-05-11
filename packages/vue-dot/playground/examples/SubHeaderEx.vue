<template>
	<DocSection title="SubHeader">
		<SubHeader
			:loading="loading"
			:data-lists="dataLists"
			title-text="Prénom Nom (d'usage)"
			sub-title-text="1 69 08 75 125 456 75"
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
			@click="toggleLoading(loading)"
		>
			{{ loading ? 'Unset' : 'Set' }} loading
		</VBtn>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';
	import { IDataListItem } from '../../src/elements/DataList/types';
	import { IDataList } from '../../src/patterns/SubHeader/types';

	const dataListItems: IDataListItem[] = [
		{
			key: 'Libellé',
			value: 'Texte saisi'
		},
		{
			key: 'Libellé',
			value: 'Texte saisi'
		}
	];

	@Component
	export default class SubHeaderEx extends Vue {
		dataLists: IDataList[] = [
			{
				items: [],
				itemsNumberLoading: 2,
				headingLoading: true
			},
			{
				title: 'Catégorie 2',
				items: dataListItems,
				itemsNumberLoading: 2
			},
			{
				title: 'Catégorie 3',
				items: dataListItems,
				itemsNumberLoading: 2
			},
			{
				title: 'Catégorie 4',
				items: dataListItems,
				itemsNumberLoading: 2
			}
		];

		progressValue = 50;

		progressLinearOpts = {
			class: 'mt-2',
			color: '#fff',
			height: '8px',
			backgroundColor: '#fff',
			backgroundOpacity: '.24'
		};

		loading: boolean = true;

		toggleLoading(loading: boolean) {

			this.dataLists[0].title= !loading ? '' : 'Catégorie 1';
			this.dataLists[0].items = !loading ? [] : dataListItems;

			this.loading = !loading;
		}
	}
</script>
