<template>
	<DataList
		:items="items"
		@click:item-action="updateBirthdate"
	/>
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
						action: 'Modifier'
					}
				]
			};
		},
		methods: {
			updateBirthdate(itemIndex) {
				this.$set(this.items[itemIndex], 'value', '01/01/1970');
			}
		}
	};
</script>
