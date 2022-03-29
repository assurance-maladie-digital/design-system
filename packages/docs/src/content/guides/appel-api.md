---
title: Appels API
description: Appel à une API et exploitation du résultat.
---

## Instance axios

Pour effectuer des appels API, le package [axios](https://axios-http.com/docs/intro) est ajouté par défaut dans le Starter Kit.<br>
Les appels API seront effectués en utilisant une [instance axios](https://axios-http.com/docs/instance) qui permettra de partager une configuration commune.

Cette instance est définie dans le fichier `src/plugins/axios.ts` :

```ts
import axios, { AxiosError, AxiosResponse } from 'axios';

import { store } from '@/store';

import common from '@/translations/fr/common';

/** The axios instance */
const instance = axios.create({
	withCredentials: false,
	baseURL: window.API_URL,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

/** Default error message */
const DEFAULT_ERROR_MESSAGE = common.defaultErrorMessage;

// Response interceptor to handle errors globally
instance.interceptors.response.use(undefined, (error: AxiosError) => {
	let errorMessage: string;

	// If we don't have an error or we have a 500 HTTP Code
	if (!error.response || error.response.status >= 500) {
		// Use the default message
		errorMessage = DEFAULT_ERROR_MESSAGE;
	} else {
		// Else, use message from server or fallback to default one
		errorMessage = error.response.data.message || DEFAULT_ERROR_MESSAGE;
	}

	if (errorMessage) {
		// Send notification error
		store.dispatch('notification/add', {
			type: 'error',
			message: errorMessage
		});
	}

	return Promise.reject(error);
});

export { instance as axios };
export { AxiosResponse };
```

<doc-alert type="info">

Un [intercepteur](https://axios-http.com/docs/interceptors) est ajouté sur l'instance axios. Lorsque cette instance sera utilisée pour effectuer un appel API, l’intercepteur déclenchera une fonction spécifique en fonction du type de réponse (succès ou erreur). 

</doc-alert>

<doc-alert type="info">

Nous utilisons une variable d’environnement pour spécifier l’URL de base de notre instance axios, vous pouvez consulter le [guide sur la gestion des variables d’environnement](/guides/variables-environnement).

</doc-alert>

## Création d’un service

L’étape suivante est de créer une fonction utilisant cette instance pour appeler une API. Par convention, ces fonctions sont appelées services et seront créées dans le dossier `src/services`. Chaque appel API nécessite 2 fichiers :
- `api.ts` : ce fichier contient la fonction qui utilise l’instance axios et appelle l’API,
- `types.d.ts` : ce fichier contient les types dont notre fonction a besoin. D’une manière générale, il contiendra le typage des données attendues et renvoyées par l’API.

Par exemple, le fichier `src/services/monApi/api.ts` :

```ts
import { axios, AxiosResponse } from '@/plugins/axios';

export function getDataPaginated(params: PaginatedOptions): Promise<AxiosResponse<PaginatedData>> {
	return axios.get('/api/data', {
		params
	});
}

export function authenticateUser(credentials: UserCredentials): Promise<AxiosResponse<UserInformation>> {
	return axios.post(`/api/login`, credentials);
}
```

Fichier `src/services/monApi/types.ts` :

```ts
export interface PaginatedOptions {
	page: number;
	itemPerPage: number;
}

export interface PaginatedData {
	items: string[];
	maxPage: number;
}

export interface UserCredentials {
	username: string;
	password: string;
}

export interface UserInformation {
	firstname: string;
	lastname: string;
}
```

## Appel de l’API

Il faut finalement appeler cette fonction dans un composant et exploiter les données renvoyées :

```vue
<template>
	<div>
		<VTextfield
			v-model="credentials.username"
			label="Identifiant"
		/>

		<VTextfield
			v-model="credentials.password"
			label="Identifiant"
			type="password"
      class="mt-4"
		/>

		<VBtn
			:loading="state === 'pending'"
      class="mt-4"
			@click="login"
		>
			Se connecter
		</VBtn>

		<p v-if="user">
			{{ user.firstname }} {{ user.lastname }}
		</p>

		<p v-else>
			Pas de données
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { StateEnum } from '@cnamts/vue-dot/src/constants/enums/StateEnum';

	import { getData } from '@/services/monApi/api';
	import {
		UserCredentials,
		UserInformation
	} from '@/services/monApi/types';

	@Component
	export default class MonApiComponent extends Vue {
		credentials: UserCredentials = {
			username: null,
			password: null
		};

		state: StateEnum = StateEnum.IDLE;

		user: UserInformation | null = null;

		async login(): Promise<void> {
			try {
				this.state = StateEnum.PENDING;

				const { data } = await authenticateUser(params);

				this.data = data;
				this.state = StateEnum.RESOLVED;
			} catch {
				this.state = StateEnum.REJECTED;
			}
		}
	}
</script>
```

## Exemple

### Liste d’utilisateurs

<doc-example file="guides/api/usage"></doc-example>

`api.ts`: 

```ts
import { DataOptions } from 'vuetify';

import { UsersResult } from './types';

import { axios, AxiosResponse } from '~/plugins/axios';

export function getUsersFromApi(options: DataOptions | null = null): Promise<AxiosResponse<UsersResult>> {
	return axios.get('/users', {
		params: {
			...options
		}
	});
}
```

`types.d.ts` : 

```ts
export interface User {
	[key: string]: string;
	firstname: string;
	lastname: string;
	email: string;
}

export interface UsersResult {
	items: User[];
	total: number;
}
```
