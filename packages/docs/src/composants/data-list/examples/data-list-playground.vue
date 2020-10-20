<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="props.loading"
				label="Mode chargement"
				hide-details
				class="mt-0"
			/>

			<VExpandTransition mode="out-int">
				<div v-if="props.loading">
					<VSwitch
						v-model="props.headingLoading"
						label="Avec titre"
						hide-details
						class="mt-4"
					/>

					<VTextField
						v-if="props.loading"
						v-model.number="props.itemsNumberLoading"
						label="Nb. d'items en mode chargement"
						hide-details
						type="number"
						outlined
						class="mt-8"
					/>
				</div>
			</VExpandTransition>

			<VSwitch
				v-model="props.row"
				label="Mode horizontal"
				hide-details
				class="mt-4"
			/>

			<VSwitch
				v-model="props.flex"
				label="Mode flexbox"
				hide-details
				class="mt-4"
			/>

			<VTextField
				v-model="props.listTitle"
				label="Titre"
				hide-details
				outlined
				class="mt-8"
			/>

			<VTextField
				v-model="props.placeholder"
				label="Texte de remplacement"
				hide-details
				outlined
				class="mt-8"
			/>

			<VTextField
				v-model="props.itemWidth"
				label="Largeur de chaque item"
				hide-details
				outlined
				class="mt-8"
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<DataList
				v-if="props.itemsNumberLoading"
				v-bind="props"
				:items="items"
				:icons="icons"
			/>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataList } from '@cnamts/vue-dot/src/elements/DataList/types';

	import { mdiCalendar, mdiAccount } from '@mdi/js';

	@Component
	export default class DataListPlayground extends Vue {
		items: DataList = [
			{
				key: 'Nom',
				value: '',
				icon: 'userIcon'
			},
			{
				key: 'Prénom',
				value: 'Paul',
				chip: true,
				options: {
					chip: {
						color: 'success'
					}
				}
			},
			{
				key: 'Date de naissance',
				value: '09/24/1970',
				icon: 'calendarIcon',
				action: 'Modifier'
			}
		];

		props = {
			loading: false,
			itemsNumberLoading: 3,
			headingLoading: true,
			row: false,
			flex: false,
			listTitle: 'Titre',
			placeholder: '…',
			itemWidth: '200px'
		};

		icons = {
			calendarIcon: mdiCalendar,
			userIcon: mdiAccount
		};
	}
</script>
