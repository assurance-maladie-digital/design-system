<template>
	<CookiesPage :items="cookiesList" />
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { TypeEnum } from '@cnamts/vue-dot/src/templates/CookiesPage/CookiesInformation/TypeEnum';
	import { CookiesPageItems, CookiesList } from '@cnamts/vue-dot/src/templates/CookiesPage/types';

	@Component
	export default class Playground extends Vue {
		cookies: CookiesList[] = [
			{
				name: 'lorem-ipsum',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				conservation: 'XX mois'
			},
			{
				name: 'lorem-ipsum',
				description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				conservation: 'XX mois'
			}
		];

		cookiesList: CookiesPageItems = {
			[TypeEnum.ESSENTIALS]: this.cookies,
			[TypeEnum.FUNCTIONAL]: this.cookies,
			[TypeEnum.ANALYTICS]: this.cookies
		};
	}
</script>
