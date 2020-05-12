<template>
	<DocSection title="SubHeader">
		<SubHeader
			:loading="loading"
			:data-lists="dataLists"
			title-text="Prénom Nom (d'usage)"
			sub-title-text="1 69 08 75 125 456 75"
			@click:list-item="setNewItemValue"
		>
			<!-- ProgressBar -->
			<template #additional-informations>
				<VSpacer />

				<template v-if="loading">
					<HeaderLoading
						class="mt-8"
						height="24"
						width="150"
						dark
					/>

					<HeaderLoading
						class="mt-2 mb-1"
						height="8"
						width="100%"
						tile
						dark
					/>
				</template>

				<template v-else>
					<p class="white--text mt-8 mb-0">
						Profil complété à 50%
					</p>

					<VProgressLinear
						v-bind="progressLinearOpts"
						:value="progressValue"
						class="mb-1"
					/>
				</template>
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
			class="mt-4"
			outlined
			label="New value"
		/>
	</DocSection>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { IDataList } from '../../src/elements/DataList/types';

	import { dataLists } from '../../src/patterns/SubHeader/tests/data/subHeader';
	import { IDataListAction } from '../../src/patterns/SubHeader/types';

	@Component
	export default class SubHeaderEx extends Vue {
		dataLists: IDataList[] = dataLists;

		actionValue: string | null = 'New text';

		progressValue: number = 50;

		progressLinearOpts = {
			class: 'mt-2',
			color: '#fff',
			height: '8px',
			backgroundColor: '#fff',
			backgroundOpacity: '.24'
		};

		loading: boolean = false;

		/**
		 * Example to set the new item value to the corresponding dataList item after clicked on an data list item action
		 *
		 * @param {IDataListAction} dataListAction The dataListAction object containing the dataListIndex and his ItemIndex
		 */
		setNewItemValue(dataListAction :IDataListAction) {
			this.$set(this.dataLists[dataListAction.dataListIndex].items[dataListAction.itemIndex], 'value', this.actionValue);
		}
	}
</script>
