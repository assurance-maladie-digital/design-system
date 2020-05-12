<template>
	<DocSection title="SubHeader">
		<SubHeader
			:loading="loading"
			:data-lists="dataLists"
			title-text="Prénom Nom (d'usage)"
			sub-title-text="1 69 08 75 125 456 75"
			@click:list-item="setItemValue"
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

	import { dataLists } from '../../src/patterns/SubHeader/tests/data/subHeader';
	import { IDataListAction } from '../../src/patterns/SubHeader/types';

	@Component
	export default class SubHeaderEx extends Vue {
		dataLists = dataLists;

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
		 * @param {IDataListAction} dataListAction The dataListAction object containing dataListIndex and itemIndex
		 */
		setItemValue({ dataListIndex, itemIndex }: IDataListAction) {
			this.$set(this.dataLists[dataListIndex].items[itemIndex], 'value', this.actionValue);
		}
	}
</script>
