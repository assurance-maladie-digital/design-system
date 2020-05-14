<template>
	<VContainer fluid>
		<VRow>
			<VCol
				cols="12"
				md="6"
			>
				<h4>
					largeur (width)
				</h4>
				<p>
					"Largeur de chaque item.
				</p>
				<VTextField
					:value="width"
					outlined
					@change="width = $event"
				/>
				<h4>
					largeur minimum (min-width)
				</h4>
				<p>
					Largeur minimum du composant.
				</p>
				<VTextField
					v-model="minWidth"
					outlined
					@change="minWidth = $event"
				/>
				<h4>
					mode horizontal (row)
				</h4>
				<p>
					Force l'affichage sur une seul ligne.
				</p>
				<VSwitch
					v-model="row"
					@input="row = !row"
				/>
				<h4>
					Mode flex (flex)
				</h4>
				<p>
					Permet le passage à la ligne des items si plus de place en fin de ligne<br>(attention à la largeur de chaque items)
				</p>
				<VSwitch
					v-model="flex"
					label="mode à la ligne (flex)"
					@input="flex = !flex"
				/>
			</VCol>
			<VCol
				cols="12"
				md="6"
			>
				<VCard>
					<VCardText>
						<DataList
							:items="items"
							:row="row"
							:flex="flex"
							:width="width"
							:min-width="minWidth"
						/>
					</VCardText>
				</VCard>
			</VCol>
		</VRow>
	</VContainer>
</template>

<script>
	export default {
		data() {
			return {
				row: false,
				flex: false,
				width: '200px',
				minWidth: '',
				items: [
					{
						key: 'Nom',
						value: ''
					},
					{
						key: 'Prénom',
						value: 'Paul'
					},
					{
						key: 'Date de naissance',
						value: '09/24/1970'
					}
				]
			};
		}
	};
</script>
