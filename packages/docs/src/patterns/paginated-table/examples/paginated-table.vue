<template>
	<PaginatedTable
		:headers="headers"
		:items="users"
		:items-per-page="5"
		:options.sync="options"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataOptions } from 'vuetify/types';

	@Component
	export default class PaginatedTableEx extends Vue {
		options = {} as DataOptions;

		headers = [
			{
				text: 'Nom',
				value: 'lastname'
			},
			{
				text: 'Prénom',
				value: 'firstname'
			},
			{
				text: 'Email',
				value: 'email'
			}
		];

		users = [
			{
				firstname: 'Virginie',
				lastname: 'Beauchesne',
				email: 'virginie.beauchesne@example.com'
			},
			{
				firstname: 'Simone',
				lastname: 'Bellefeuille',
				email: 'simone.bellefeuille@example.com'
			},
			{
				firstname: 'Étienne',
				lastname: 'Salois',
				email: 'etienne.salois@example.com'
			},
			{
				firstname: 'Bernadette',
				lastname: 'Langelier',
				email: 'bernadette.langelier@example.com'
			},
			{
				firstname: 'Agate',
				lastname: 'Roy',
				email: 'agate.roy@example.com'
			},
			{
				firstname: 'Louis',
				lastname: 'Denis',
				email: 'louis.denis@example.com'
			},
			{
				firstname: 'Édith',
				lastname: 'Cartier',
				email: 'edith.cartier@example.com'
			},
			{
				firstname: 'Alphonse',
				lastname: 'Bouvier',
				email: 'alphonse.bouvier@example.com'

			},
			{
				firstname: 'Eustache',
				lastname: 'Dubois',
				email: 'eustache.dubois@example.com'

			},
			{
				firstname: 'Rosemarie',
				lastname: 'Quessy',
				email: 'rosemarie.quessy@example.com'
			},
			{
				firstname: 'Serge',
				lastname: 'Rivard',
				email: 'serge.rivard@example.com'
			},
			{
				firstname: 'Jacques',
				lastname: 'Demers',
				email: 'jacques.demers@example.com'
			},
			{
				firstname: 'Aimée',
				lastname: 'Josseaume',
				email: 'aimee.josseaume@example.com'
			},
			{
				firstname: 'Delphine',
				lastname: 'Robillard',
				email: 'delphine.robillard@example.com'
			},
			{
				firstname: 'Alexandre',
				lastname: 'Lazure',
				email: 'alexandre.lazure@example.com'
			}
		];
	}
</script>
