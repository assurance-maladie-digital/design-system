<template>
	<CookiesPage :items="cookiesList" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { TypeEnum } from '@cnamts/vue-dot/src/templates/CookiesPage/CookiesInformation/TypeEnum';
	import { CookiesPageItems } from '@cnamts/vue-dot/src/templates/CookiesPage/types';

	@Component
	export default class Playground extends Vue {
		cookiesList: CookiesPageItems = {
			[TypeEnum.ESSENTIALS]: [
				{
					name: 'session',
					description: 'Sauvegarde la session pour rester connecté.',
					conservation: '20 heures'
				},
				{
					name: 'cookie_policy',
					description: 'Sauvegarde les préférences de cookies.',
					conservation: '1 an'
				}
			],
			[TypeEnum.FUNCTIONAL]: [
				{
					name: 'contrast',
					description: 'Sauvegarde la personnalisation de l’affichage.',
					conservation: '1 an'
				}
			],
			[TypeEnum.ANALYTICS]: [
				{
					name: 'user_id',
					description: 'Sauvegarde l’identifiant unique de visiteur.',
					conservation: '6 mois'
				}
			]
		};
	}
</script>
