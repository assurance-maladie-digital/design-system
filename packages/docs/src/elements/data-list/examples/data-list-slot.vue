<template>
	<VCard>
		<VCardText>
			<DataList
				:items="items"
			>
				<template #title>
					<div class="grey red--text primary pa-5">
						Titre
					</div>
				</template>
			</DataList>
		</VCardText>
	</VCard>
</template>

<script>
	export default {
		data() {
			return {
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
