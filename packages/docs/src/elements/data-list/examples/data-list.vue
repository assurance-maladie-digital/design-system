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
						value: '09/24/1970'
					}
				]
			};
		}
	};
</script>
