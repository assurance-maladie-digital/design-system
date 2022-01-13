<template>
	<VExpansionPanels
		accordion
		class="doc-roadmap my-4 w-100"
	>
		<VExpansionPanel
			v-for="(item, index) in a11yCriteriaItems"
			:key="index"
		>
			<VExpansionPanelHeader class="text-subtitle-2 font-weight-bold">
				{{ item.title }}
			</VExpansionPanelHeader>

			<VExpansionPanelContent>
				<VDataTable
					:headers="headers"
					:items="item.items"
					disable-pagination
					hide-default-footer
				>
					<template #item.expertise="{ item }">
						{{ expertiseMapping[item.expertise] }}
					</template>
				</VDataTable>
			</VExpansionPanelContent>
		</VExpansionPanel>
	</VExpansionPanels>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { a11yCriteriaItems } from '../../data/a11yCriteriaItems';

	import { ExpertiseLevelEnum } from '../../constants/ExpertiseLevelEnum';

	@Component
	export default class DocA11yCriteria extends Vue {
		a11yCriteriaItems = a11yCriteriaItems;

		headers = [
			{
				text: 'N°',
				sortable: false,
				value: 'id'
			},
			{
				text: 'Critère',
				sortable: false,
				value: 'description'
			},
			{
				text: 'Niveau',
				value: 'level',
				width: '100px'
			},
			{
				text: 'Relève de l’expertise du…',
				value: 'expertise',
				width: '206px'
			}
		];

		expertiseMapping = {
			[ExpertiseLevelEnum.DEV]: 'Développeur',
			[ExpertiseLevelEnum.DESIGN]: 'Designer',
			[ExpertiseLevelEnum.DEV_DESIGN]: 'Développeur et Designer'
		};
	}
</script>

<style lang="scss" scoped>
	.v-expansion-panel ::v-deep {
		.v-expansion-panel-content__wrap {
			padding: 0;
		}

		td {
			height: 80px;
			padding: 16px !important;
		}
	}
</style>
