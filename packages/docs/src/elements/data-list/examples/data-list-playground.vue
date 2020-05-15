<template>
	<VRow>
		<VCol
			cols="12"
			md="6"
		>
			<VSwitch
				v-model="loading"
				label="Mode chargement (loading)"
				hide-details
				class="mt-0"
			/>

			<VExpandTransition mode="out-int">
				<div v-if="loading">
					<VSwitch
						v-model="headingLoading"
						label="Avec titre (heading-loading)"
						hide-details
					/>

					<VTextField
						v-if="loading"
						v-model.number="itemsNumberLoading"
						label="Nb. d'items en mode chargement (items-number-loading)"
						hide-details
						type="number"
						class="mt-8"
						outlined
					/>
				</div>
			</VExpandTransition>

			<VSwitch
				v-model="row"
				label="Mode horizontal (row)"
				hide-details
			/>

			<VSwitch
				v-model="flex"
				label="Mode flexbox (flex)"
				hide-details
				class="mb-8"
			/>

			<VTextField
				v-model="listTitle"
				label="Titre (list-title)"
				hide-details
				class="mb-8"
				outlined
			/>

			<VTextField
				v-model="placeholder"
				label="Text de remplacement (placeholder)"
				hide-details
				class="mb-8"
				outlined
			/>

			<VTextField
				v-model="itemWidth"
				label="Largeur de chaque item (item-width)"
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

<script>
	import { mdiCalendar, mdiAccount } from '@mdi/js';

	export default {
		data() {
			return {
				loading: false,
				itemsNumberLoading: 3,
				headingLoading: true,
				row: false,
				flex: false,
				listTitle: 'Titre',
				placeholder: '…',
				itemWidth: '200px',
				icons: {
					calendarIcon: mdiCalendar,
					userIcon: mdiAccount
				},
				items: [
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
				]
			};
		}
	};
</script>
