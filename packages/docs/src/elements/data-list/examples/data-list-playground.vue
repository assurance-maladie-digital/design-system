<template>
	<VContainer fluid>
		<VRow>
			<VCol
				cols="12"
				md="6"
			>
				<VSwitch
					v-model="loading"
					class="mb-4"
					label="mode chargement"
					@input="loading = !loading"
				/>
				<VExpandTransition mode="out-int">
					<div v-if="loading">
						<VSwitch
							v-model="headingLoading"
							label="avec titre"
							@input="headingLoading = !headingLoading"
						/>
						<VTextField
							v-if="loading"
							v-model="itemsNumberLoading"
							type="number"
							label="prop = itemsNumberLoading"
							outlined
						/>
					</div>
				</VExpandTransition>
				<h4>
					Valeur item par défaut (placeholder)
				</h4>
				<p>Valeur des items visible par défaut quand il n'y en a pas encore.</p>
				<VTextField
					v-model="placeholder"
					outlined
				/>
				<h4>
					Titre (listTitle)
				</h4>
				<p>
					titre de la items.
				</p>
				<VTextField
					v-model="listTitle"
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
							:list-title="listTitle"
							:items="items"
							:loading="loading"
							:icons="icons"
							:placeholder="placeholder"
							:items-number-loading="Number(itemsNumberLoading)"
							:heading-loading="headingLoading"
							:title-class="titleClass"
							@click:item-action="setItemValue"
						/>
					</VCardText>
				</VCard>
				<h4 class="mt-5">
					* Liste des items (prop = items)
				</h4>
				<p>
					Cet exemple importe seulement les icones 'mdiCalendar' et 'mdiAccount'
				</p>
				<pre
					v-if="items"
					contenteditable="true"
					class="mt-4"
					:class="[
						$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'
					]"
					@blur="items = JSON.parse($event.target.textContent)"
					v-html="items"
				/>
			</VCol>
		</VRow>
	</VContainer>
</template>

<script>
	import { mdiCalendar, mdiAccount } from '@mdi/js';

	export default {
		data() {
			return {
				actionValue: '',
				loading: false,
				placeholder: 'Valeur',
				listTitle: 'Titre',
				titleClass: '',
				itemsNumberLoading: 3,
				headingLoading: true,
				icons: {
					mdiCalendar, mdiAccount
				},
				items: [
					{
						key: 'Nom',
						value: '',
						icon: 'mdiAccount'
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
						action: 'Edit'
					}
				]
			};
		},

		// Vuex bindings
		methods: {
			setItemValue(itemIndex){
				alert(`Vous avez clicker sur l'action de l'item, voici l'évènement émit => $emit('click:item-action', ${itemIndex})`);
			}
		}
	};
</script>
