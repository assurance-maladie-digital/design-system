---
title: Appels API
description: Faire des appels API en utilisant axios.
---

## Instance axios

Pour effectuer des appels API, le package [axios](https://axios-http.com/docs/intro) est ajouté de base dans le starter kit, la première étape est de créer une instance pour effectuer un appel API. Cette instance est définie dans le fichier `src/plugins/axios.ts`, ce fichier est présent par défaut.

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

Un intercepteur est ajouté sur cette instance axios. Lorsque cette instance sera utilisée poru effectuer un appel API, l'intercepteur déclenchera une fonction spécifique en fonction de la réponse (succès ou erreur). Dans notre exemple, c'est un intercepteur en cas d'erreur.

</doc-alert>

<doc-alert type="info">

Nous utilisons une variable d’environement pour spécifier l’URL de base de notre instance axios, vous pouvez consulter le [guide sur la gestion des variables d’environnement](/guides/variables-environnement).

</doc-alert>

## Création d’un appel API

L’étape suivante est de créer une fonction utilisant cette instance pour appeller une API. Par convention, ces fonctions seront créées dans le dossier `src/services`. Chaque appel API néccéssite 2 fichiers :
- `api.ts`: ce fichier contient la fonction qui appelle l’API,
- `types.d.ts`: ce fichier contient les types dont notre fonction à besoin. D’une manière générale, il contiendra le typage du payload et le typage des données renvoyées par l’API.

Fichier `src/services/monApi/api.ts`:

```ts
import { axios, AxiosResponse } from '@/plugins/axios';

interface Payload {
	example: string;
}

export function getData(params: MonApiParams): Promise<AxiosResponse<MonApiResponseGet>> {
	return axios.get('/api/data', {
		params
	});
}

export function postData(id: string, payload: MonApiPayload): Promise<AxiosResponse<MonApiResponsePost>> {
	return axios.post(`/api/${id}`, payload);
}

```

Fichier `src/services/monApi/types.ts`:

```ts
export interface MonApiParams {
  param1: string;
  param2: number;
}

export interface MonApiResponseGet {
  data1: number;
  data2: string;
}

export interface MonApiPayload {
  field1: number;
  field2: string;
  field3: string[];
}

export interface MonApiResponsePost {
  data1: number;
  data2: string;
	}
```

## Appel de l’API

Il faut finalement appeler cette fonction dans un composant et exploiter les données renvoyées :

```vue
<template>
	<div>
    <VBtn
      @click="getData"
      :loading="state === 'pending'"
    >
      Appeler l’API
    </VBtn>

    <p v-if="data">
      {{ data.data1 }} {{ data.data2 }}
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
		MonApiParams,
		MonApiResponseGet
	} from '@/services/monApi/types';

	@Component
	export default class MonApiComponent extends Vue {
    state: StateEnum = StateEnum.IDLE;
		data: MonApiResponseGet | null = null;

		async getData(): Promise<void> {
			try {
				this.state = StateEnum.PENDING;
				
				const params: MonApiParams = {
					param1: '1',
					param2: 1
				};

				const { data } = await getData(params);

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

import { AxiosResponse } from 'axios';
import { axios } from '~/plugins/axios';

export function getUsersFromApi(options: DataOptions | null = null): Promise<AxiosResponse<UsersResult>> {
	return axios.get('/users', {
		params: {
			...options
		}
	});
}

```

`type.d.ts`: 

```ts

export interface User {
	firstname: string;
	lastname: string;
	email: string;
	[key: string]: string;
}

export interface UsersResult {
	items: User[];
	total: number;
}

```
