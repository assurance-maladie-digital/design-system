<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="loading"
				label="Mode chargement"
				hide-details
				class="mt-0"
			/>

			<VExpandTransition mode="out-int">
				<div v-if="loading">
					<VSwitch
						v-model="headingLoading"
						label="Avec titre"
						hide-details
					/>

					<VTextField
						v-if="loading"
						v-model.number="itemsNumberLoading"
						label="Nb. d'items en mode chargement"
						hide-details
						type="number"
						class="mt-8"
						outlined
					/>
				</div>
			</VExpandTransition>

			<VSwitch
				v-model="row"
				label="Mode horizontal"
				hide-details
			/>

			<VSwitch
				v-model="flex"
				label="Mode flexbox"
				hide-details
				class="mb-8"
			/>

			<VTextField
				v-model="listTitle"
				label="Titre"
				hide-details
				class="mb-8"
				outlined
			/>

			<VTextField
				v-model="placeholder"
				label="Text de remplacement"
				hide-details
				class="mb-8"
				outlined
			/>

			<VTextField
				v-model="itemWidth"
				label="Largeur de chaque item"
				hide-details
				outlined
			/>
		</VCol>

		<VCol
			cols="12"
			md="6"
		>
			<VCard>
				<VCardText>
					<DataList
						v-if="itemsNumberLoading"
						:items="items"
						:icons="icons"
						:list-title="listTitle"
						:loading="loading"
						:items-number-loading="itemsNumberLoading"
						:heading-loading="headingLoading"
						:placeholder="placeholder"
						:item-width="itemWidth"
						:flex="flex"
						:row="row"
					/>
				</VCardText>
			</VCard>
		</VCol>
	</VRow>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mdiCalendar, mdiAccount } from '@mdi/js';

	@Component
	export default class DataListPlayground extends Vue {
		items = [
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

		loading = false;
		itemsNumberLoading = 3;
		headingLoading = true;
		row = false;
		flex = false;
		listTitle = 'Titre';
		placeholder = '…';
		itemWidth = '200px';

		icons = {
			calendarIcon: mdiCalendar,
			userIcon: mdiAccount
		};
	}
</script>
