<template>
	<DataList :items="items">
		<template #title>
			<h3 class="text-subtitle-1 font-weight-bold mb-3">
				Liste de données

				<VTooltip bottom>
					<template #activator="{ on, attrs }">
						<VIcon
							v-bind="attrs"
							v-on="on"
						>
							{{ informationIcon }}
						</VIcon>
					</template>

					<span>Cette liste contient des données concernant le patient.</span>
				</VTooltip>
			</h3>
		</template>
	</DataList>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataList } from '@cnamts/vue-dot/src/elements/DataList/types';

	import { mdiInformationOutline } from '@mdi/js';

	@Component
	export default class DataListSlot extends Vue {
		informationIcon = mdiInformationOutline;

		items: DataList = [
			{
				key: 'Nom',
				value: undefined
			},
			{
				key: 'Prénom',
				value: 'Paul'
			},
			{
				key: 'Date de naissance',
				value: '24/09/1970'
			}
		];
	}
</script>
