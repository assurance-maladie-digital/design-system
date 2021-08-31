---
title: Tableau avec pagination
description: Création d’un tableau paginé qui récupère des données d’une API.
---

Dans ce guide, nous allons voir comment créer un tableau paginé qui récupère et affiche des données provenant d’une API. Nous utiliserons le composant [`PaginatedTable`](https://digital-design-system.netlify.app/composants/paginated-table). Ce composant permet d’afficher des données dans un tableau, de les trier et de les paginer.

## Création de l’API

La première étape consiste à créer l’API qui récuperera les données que l’on souhaite afficher dans notre tableau paginé. Nous allons définir différents éléments le dossier `src/services/getDataFromApi`. 

Commençons par définir l’interface des données qui seront retournées, dans le fichier `src/services/getDataFromApi/types.d.ts` :

```ts
export interface User {
    firstname: string;
    lastname: string;
    email: string;
}

export interface Result {
    items: User[];
    total: number;
}
```

Il nous faut maintenant définir l’instance axios que nous allons utiliser pour récupérer les données, elle doit être définie dans le fichier `@/plugins/axios`:

```ts
import axios from 'axios';

/** Axios instance to request our APIs */
const instance = axios.create({
	withCredentials: false,
	baseURL: WINDOW.API_URL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	}
});

export {
	instance as axios
};
```

<doc-alert type="info">

Nous utilisons une variable d’environement pour spécifier l’URL de base de notre instance axios, voir le guide sur la gestion des [variables d’environnement](https://digital-design-system.netlify.app/guides/variables-environnement).

</doc-alert>

Nous allons ensuite définir une fonction asynchrone `getDataFromApi` qui a pour but de récupérer les données. Notre fonction attendra de recevoir en paramètre un objet qui contient les options dont notre API à besoin qui lui permettront trier nos données. L’interface de ces options est `DataOptions` que nous importons de vuetify :

```ts
import { DataOptions } from 'vuetify';
```

Nous utiliserons plus loin dans ce guide seulement 4 propriétés de l’interface `DataOptions`:

- `sortBy`: indique sur quels champs les données doivent êtres triées, le type attendu est `string[]`,
- `sortDesc`: indique si les données doivent être triées de manière ascendante ou descendante, le type attendu est `boolean`,
- `page`: indique le numéro de la page dont nous souhaitons voir les données, le type attendu est `number`,
- `itemsPerPage`: indique le nombre d’items par page que nous voulons voir afichés, le type est `number`.

<doc-alert type="info">

L’interface `DataOptions` permet d’autres options, voir l’API du composant [`PaginatedTable`](https://digital-design-system.netlify.app/composants/paginated-table#section/api)

</doc-alert>

Nous pouvons maintenant définir notre API, nous utilisons l’instance que nous avons définie précédement, nous définissons notre API dans le fichier `src/services/getDataFromApi/api.ts`:

```ts
import { axios, AxiosResponse } from '@/plugins/axios';

import { DataOptions } from 'vuetify';

import { Result }

export function getDataFromApi(options: DataOptions): Promise<AxiosResponse<Result>> {
	return axios.get('/mon-api.example', {
		params: {
			...options
		}
	});
}
```

## Création du composant tableau paginé

Il faut maintenant créer le composant qui contient le tableau paginé :

```vue
<template>
	<PaginatedTable
		:options.sync="options"
		:headers="headers"
		:items="users"
		:server-items-length="totalUsers"
		:loading="state === STATE_ENUM.pending"
		suffix="api-example"
		@update:options="fetchData"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataOptions } from 'vuetify';

	import { User } from '@/services/getUsers/types';

	import { STATE_ENUM } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

	import { getUsersFromApi } from '@/services/getUsers/api';

	@Component
	export default class PaginatedTableApi extends Vue {
		STATE_ENUM = STATE_ENUM;

		state = STATE_ENUM.idle;

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

		users: User[] = [];
		totalUsers = 0;

		mounted() {
			this.fetchData();
		}

		async fetchData(): Promise<void> {

			this.state = STATE_ENUM.pending;

			try {
				const res = await getUsersFromApi(this.options);
				const { items, total } = res.data;

				this.users = items;
				this.totalUsers = total;

				this.state = STATE_ENUM.resolved;
			} catch(err) {
				this.state = STATE_ENUM.rejected;
			}
		}
	}
</script>
```

Il faut définir un array d’objet `headers` pour indiquer au tableau quelles sont les différentes colonnes que nous voulons afficher et quelles données afficher. Cette varaible sera ensuite passé dans la props `headers` du componsant `PaginatedTable`.

Les valeurs de l’objet `options` seront mises à jour par le composant [`PaginatedTable`](https://digital-design-system.netlify.app/composants/paginated-table#section/api).

C’est la fonction `fetchData` qui utilisera notre API pour récupérer les données. Elle sera appelée lorsque l’objet `options` sera modifié grâce la directive `@update:options="fetchData"`. Une fois récupérée, nous stockerons les `items` dans la variables `users` et le nombre total d’items `total` dans la variable `totalUsers` pour les passer respectivement au tableau dans les props `items` et `server-items-length`.

Il faut appeler la fonction `fetchData` après l’initialisation du composant, pour récupérer les données une première fois. Nous le faisons dans le hook `mounted`.

Nous utiliserons l’enum `STATE_ENUM` et la variable `state` pour gérer l’état de chargement du tableau au travers de la props `loading`, qui doit afficher le chargement lorsque la fonction `fetchData` est appelée et tant qu’elle n’a pas reçu de réponse qu’il s’agisse de données ou d’une erreur.

## Exemple

<doc-example file="paginated-table-guide/usage"></doc-example>
