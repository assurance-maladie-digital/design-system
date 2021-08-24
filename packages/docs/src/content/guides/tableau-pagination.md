---
title: Tableau avec pagination
description: Création d’un tableau paginé qui récupère des données d’une API.
---

Dans ce guide, nous allons voir comment créer un tableau paginé qui récupère et affiche des données provenant d’une API. Nous utiliserons le composant [`PaginatedTable`](https://digital-design-system.netlify.app/composants/paginated-table). Ce composant permet d’afficher des données dans un tableau, de les trier et de les paginer.

## Création de l’API

La première étape consiste à créer l’API qui récuperera les données que l'on souhaite afficher dans notre tableau paginé. Nous allons définir cette API dans le fichier `src/services/getDataFromApi/api.ts`. 

Dans notre cas, nous n’allons pas appeller une vraie API, mais nous allons simuler la récupération de données via une fonction qui retourne un jeu de données sur lequel nous auront effectué des modifications. Le jeu de données que nous souhaitons manipuler est le suivant : 

```ts
function getItems(): User[] {
    return [
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
```

Il faut définir l’interface de ces données dans le fichier `src/services/getDataFromApi/types.d.ts` :

```ts
export interface User {
    firstname: string;
    lastname: string;
    email: string;
}
```

Nous allons donc définir une fonction asynchrone `getDataFromApi` qui a pour but de récupérer les données. Dans notre cas nous allons simuler le comportement d’une API de pagination standard coté serveur. Notre fonction attendra de recevoir des options qui lui permettront d’afficher/trier nos données (dans le cas d’une vraie API, ces options seraient envoyées dans les paramètres de la requête) . L’interface de ces options est `DataOptions` que nous importons de vuetify.

Nous utiliserons seulement 4 de ces options :

- `sortBy`: indique sur quels champs les données doivent êtres triées, le type attendu est `string[]`,
- `sortDesc`: indique si les données doivent être triées de manière ascendante ou descendante, le type attendu est `boolean`,
- `page`: indique la page dont nous souhaitons voir les données, le type attendu est `number`,
- `itemsPerPage`: indique le nombre d’items par page que nous voulons voir afichés, le type est `number`.

<doc-alert type="info">

L’interface `DataOptions` permet d’autres options, voir l’API du composant [`PaginatedTable`](https://digital-design-system.netlify.app/composants/paginated-table#section/api)

</doc-alert>

Voici la définition de notre API :

```ts
import { DataOptions } from 'vuetify';

export async function getDataFromApi({ sortBy, sortDesc, page, itemsPerPage }: DataOptions): Promise<Result> {
    return new Promise((resolve) => {
        let items: User[] = getItems();
        const total = items.length;

        // Sorting algorithm
        if (sortBy) {
            items = items.sort((a, b) => {
                const sortA = a[sortBy[0]];
                const sortB = b[sortBy[0]];

                if (sortDesc) {
                    if (sortA < sortB) {
                        return 1;
                    }

                    if (sortA > sortB) {
                        return -1;
                    }

                    return 0;
                } else {
                    if (sortA < sortB) {
                        return -1;
                    }

                    if (sortA > sortB) {
                        return 1;
                    }

                    return 0;
                }
            });
        }

        // Pagination
        if (itemsPerPage > 0) {
            items = items.slice((page - 1) * itemsPerPage, page * itemsPerPage);
        }

        resolve({
            items,
            total
        });
    });
}
```

Cette fonction renvoie des données dont l’interface est définie dans le fichier `src/services/getDataFromApi/types.d.ts` :

```ts
export interface Result {
    items: User[];
    total: number;
}
```

Dans le cas d’une vraie API, la fonction aurait été du type : 

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

<doc-alert type="info">

L’interface `Result` serait définie dans le fichier `./types.d.ts`;

</doc-alert>

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

	import { User } from '@/services/getDataFromApi/types';

	import { STATE_ENUM } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

	import { getDataFromApi } from '@/services/getDataFromApi/api';

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

		fetchData(): void {
			this.state = STATE_ENUM.pending;

			getDataFromApi(this.options)
				.then(({ items, total }) => {
					this.users = items;
					this.totalUsers = total;

					this.state = STATE_ENUM.resolved;
				})
				.catch(() => this.state = STATE_ENUM.rejected);
		}
	}
</script>
```

Il faut définir un array d’objet `headers` pour indiquer au tableau quelles sont les différentes colonnes que nous voulons afficher et quelles données afficher. Cette varaible sera ensuite passé dans la props `headers`.

Les valeurs de l’objet `options` seront mises à jour par le composant [`PaginatedTable`](https://digital-design-system.netlify.app/composants/paginated-table#section/api).

C’est la fonction `fetchData` qui utilisera notre API pour récupérer les données. Elle sera appelée lorsque l’objet `options` sera modifié grâce la directive `@update:options="fetchData"`. Une fois récupérée, nous stockerons les `items` dans la variables `users` et le nombre total d’items `total` dans la variable `totalUsers` pour les passer respectivement au tableau dans les props `items` et `server-items-length`.

<doc-alert type="info">

 Nous utiliserons l’enum `STATE_ENUM` et la variable `state` pour gérer l’état de chargement du tableau au travers de la props `loading`, qui doit afficher le chargement lorsque la fonction `fetchData` est appelée et tant qu’elle n’a pas reçu de réponse qu’il s’agisse de données ou d’une erreur.

</doc-alert>
