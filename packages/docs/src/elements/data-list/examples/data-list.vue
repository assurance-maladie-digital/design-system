<template>
	<DataList :list="list" />
</template>

<script>
	export default {
		data() {
			return {
				list: [
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
