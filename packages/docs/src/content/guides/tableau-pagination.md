---
title: Tableau avec pagination
description: Création d’un tableau paginé qui récupère des données d’une API.
---

## Création de l’API

La première étape consiste à créer l’API qui récupérera les données que l’on souhaite afficher dans notre tableau paginé. Vous pouvez créer un dossier `src/services/getUsersFromApi` qui contiendra le service permettant d'appeler cette API.

Vous pouvez commencer par définir l’interface décrivant les données qui seront retournées par l'API dans le fichier `src/services/getUsersFromApi/types.d.ts` :

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

Maintenant, vous devez définir l’instance axios qui sera utilisée pour récupérer les données, elle doit être définie dans le fichier `@/plugins/axios` :

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

Nous utilisons une variable d’environnement pour spécifier l’URL de base de notre instance axios, vous pouvez consulter le [guide sur la gestion des variables d’environnement](/guides/variables-environnement).

</doc-alert>

Ensuite, vous pouvez définir une fonction asynchrone appelée `getUsersFromApi` qui aura pour but de récupérer les données.<br>
Notre fonction attendra paramètre un objet qui contiendra les options dont notre API a besoin pour trier nos données. L’interface de ces options est `DataOptions` que nous importons de Vuetify :

```ts
import { DataOptions } from 'vuetify';
```

Nous utiliserons plus loin dans ce guide seulement 4 propriétés de l’interface `DataOptions`:

- `sortBy`: indique sur quels champs les données doivent êtres triées, le type attendu est `string[]`,
- `sortDesc`: indique si les données doivent être triées de manière ascendante ou descendante, le type attendu est `boolean`,
- `page`: indique le numéro de la page dont nous souhaitons voir les données, le type attendu est `number`,
- `itemsPerPage`: indique le nombre d’items par page que nous voulons voir affichés, le type est `number`.

<doc-alert type="info">

L’interface `DataOptions` permet d’autres options, vous pouvez consulter [l’API du composant `PaginatedTable`](/composants/tableaux/paginated-table#section/api)

</doc-alert>

Enfin, vous devez définir la fonction qui effectuera l'appel API dans le fichier `src/services/getUsersFromApi/api.ts` en utilisant l’instance que vous avez définie précédemment :

```ts
import { axios, AxiosResponse } from '@/plugins/axios';

import { DataOptions } from 'vuetify';

import { Result } from '@/services/getUsersFromApi/types';

export function getUsersFromApi(options: DataOptions): Promise<AxiosResponse<Result>> {
	return axios.get('/mon-api.example', {
		params: {
			...options
		}
	});
}
```

## Affichage du tableau paginé

Pour afficher les données, vous pouvez utiliser le [composant `PaginatedTable`](/composants/tableaux/paginated-table) :

```vue
<template>
	<PaginatedTable
		:options.sync="options"
		:headers="headers"
		:items="users"
		:server-items-length="totalUsers"
		:loading="state === StateEnum.PENDING"
		suffix="api-example"
		@update:options="fetchData"
	/>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { DataOptions } from 'vuetify';

	import { User } from '@/services/getUsers/types';
	import { getUsersFromApi } from '@/services/getUsers/api';

	import { StateEnum } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

	@Component
	export default class PaginatedTableApi extends Vue {
		StateEnum = StateEnum;

		state = StateEnum.IDLE;

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

		async fetchData(): Promise<void> {
			this.state = StateEnum.PENDING;

			try {
				const res = await getUsersFromApi(this.options);
				const { items, total } = res.data;

				this.users = items;
				this.totalUsers = total;

				this.state = StateEnum.RESOLVED;
			} catch(err) {
				this.state = StateEnum.REJECTED;
			}
		}
	}
</script>
```

Pour afficher le tableau de données, vous devez définir un tableau `headers` pour indiquer quelles sont les différentes colonnes que nous voulons afficher et quelles données afficher.
Cette variable sera ensuite passée dans la prop `headers` du composant [`PaginatedTable`](/composants/tableaux/paginated-table#section/api).

Les valeurs de l’objet `options` seront mises à jour par le composant `PaginatedTable`.

C’est la fonction `fetchData` qui utilisera notre API pour récupérer les données. Elle sera appelée lorsque l’objet `options` sera modifié grâce à la directive `@update:options="fetchData"`.<br>
Une fois récupérés, nous stockerons les `items` dans la variables `users` et le nombre total d’items `total` dans la variable `totalUsers` pour les passer respectivement au tableau dans les props `items` et `server-items-length`.

L’enum `StateEnum` et la variable `state` servent à gérer l’état de chargement du tableau via la prop `loading`, qui active le chargement lorsque la fonction `fetchData` est appelée et ce tant qu’elle n’a pas reçu de réponse qu’il s’agisse de données ou d’une erreur.

## Exemple

<doc-example file="guides/paginated-table/usage"></doc-example>
