<template>
	<DataList :items="items">
		<template #title>
			<h3 class="subtitle-2 d-block white--text primary py-3 px-4 mb-2">
				Titre
			</h3>
		</template>
	</DataList>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	@Component
	export default class DataListSlot extends Vue {
		items = [
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
				value: '24/09/1970'
			}
		];
	}
</script>
