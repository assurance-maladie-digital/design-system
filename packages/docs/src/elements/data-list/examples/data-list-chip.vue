<template>
	<DataList :items="items" />
</template>

<script>
	export default {
		data() {
			return {
				items: [
					{
						key: 'Nom',
						value: 'Dupont'
					},
					{
						key: 'Prénom',
						value: 'Paul'
					},
					{
						key: 'Date de naissance',
						value: '24/09/1970',
						chip: true
					},
					{
						key: 'Statut',
						value: 'Enregistré',
						chip: true,
						options: {
							chip: {
								color: 'success'
							}
						}
					}
				]
			};
		}
	};
</script>
