---
title: Store
description: 
---

## Pour commencer

Le store utilisé dans vue-dot est l'application `Vuex`. Nous reprendrons ici une partie de la documentation de cette aplication, mise en forme pour répondre aux usages de vue-dot. Pour plus d'informations sur `Vuex`, merci de consulter leur [documentation](https://vuex.vuejs.org/fr).

### Le store le plus simple

<doc-alert type="info">

NOTE

Nous allons utiliser la syntaxe TypeScript pour nos exemples, si vous souhaitez en savoir plus sur sur l'usage JavaScript et la syntaxe ES2015, rendez-vous sur la documentation [`Vuex`](https://vuex.vuejs.org/fr/guide/#le-store-le-plus-simple).

</doc-alert>

Après avoir [installé Vuex](https://vuex.vuejs.org/fr/installation.html), nous allons créer un store. Commencez par créer, à la racine de votre projet, un fichier `store.ts` ou un dossier `store` qui contiendra un fichier `index.ts`. Dans l'hypothèse de l'sage de modules, nous recommandons l'usage de l'organisation en dossier.

```ts
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

Vue.use(Vuex);

// Peut être dans un fichier type.d.ts si vous avez une organisation en dossier
// Dans ce cas, faire import { RootState } from '@/store/types'
export interface RootState {
	helloMessage: string;
}

const store: StoreOptions<RootState> {
	state: {
		helloMessage: 'Bonjour de vue-dot';
	}
}

export default New Vuex.store<RootState>(store);
```

Puis dans votre fichier `main.ts`, importez votre store

```ts
import Vue from 'vue';
import store from '@/store';

Vue.config.productionTip = false;

import App from './App.vue';

new Vue({
	store,
	render: (h) => h(App)
}).$mount('#app');
```

Enfin, dans le fichier `.vue` dans lequel vous souhaitez voir apparaitre la donnée stockée dans le store, ajoutez une propriété `computed` pour consulter le store et retourner la valeur

```vue
<template>
	<div id="app">
		<h1>{{ helloMessage }}</h1>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
	name: 'App',
	computed: {
		helloMessage: {
			get(): string {
				return this.$store.state.helloMessage
			}
		}
	}
});
</script>
```

## State

```ts
import { RootState } from '@/store/types';

export interface UserState {
	userName: string;
	email: string;
	lastLogin: Date;
}

export const state: UserState = {
	username: 'admin',
	email: 'admin@my-domain.fr',
	lastLogin: new Date
} 
```

## Accesseurs

```ts
import { GetterTree } from 'vuex';
import { RootState, UserState } from '@/store/types';

export const getters: GetterTree<UserState, RootState> = {
	// Vous pouvez aussi utiliser cette syntaxe: GET_USER_INFOS pour définir vos getters
	getUserInfos(state): UserState {
		return state;
	}
}
```

## Mutations

```ts
import { MutationTree } from 'vuex';
import { UserState } from '@/store/types';

export const mutations: MutationTree<UserState> = {
	// Vous pouvez aussi utiliser cette syntaxe: SET_USERNAME pour définir vos setters
	setUserName(state, payload: string): void {
		state.userName = payload;
	}
}
```

voici une autre manière de déclarer vos mutations

```ts
import { MutationTree } from 'vuex';
import { UserState } from '@/store/types';

export enum UserMutations {
	SET_USERNAME = 'SET_USERNAME'
}

export const mutations: MutationTree<UserState> = {
	[UserMutations.SET_USERNAME](state, payload: string): void {
		state.userName = payload;
	}
}
```

## Actions

```ts
import { ActionTree } from 'vuex';
import { RootState, UserState } from '@/store/types';
import { UserMutations } from '@/store/user/mutations';

import axios from 'axios';

export const actions: ActionTree<UserState, RootState> = {
	// Vous pouvez aussi utiliser cette syntaxe: UPDATE_USERNAME pour définir vos setters
	async updateUserName({ commit }): void {
		try {
			const res: Promise<object> = await axios.get('your/api/uri');
			commit(UserMutations.SET_USERNAME, res.username as string);
		} catch(e) {
			console.log(e)
		}
	}
}
```

## Modules

Pour organiser votre store en module, veuillez vous référer dans un premier temps au recommandations du [`store`](/guides/store#le-store-le-plus-simple).
Pour ajouter un module, commencez par ajouter un sous-dossier au dossier store qui portera le nom de votre module. Dans notre exemple: `store/user/index.ts`.

```ts
import { Module } from 'vuex';
import { RootState } from '@/store/types';
import { UserState } from '@/store/user/types';

import actions from '@/store/user/actions';
import getters from '@/store/user/getters';
import mutations from '@/store/user/mutations';
import state from '@/store/user/state';

export const store: Module<UserState, RootState> {
	actions,
	getters,
	mutations,
	state
}
```

Il vous faudra ensuite importer votre module dans `store/index.ts` pour y avoir accès dans votre projet.

```ts
import Vue from 'vue';
import Vuex, {StoreOptions} from 'vuex';

import { RootState } from '@/store/types';
import user from '@/store/user';

Vue.use(Vuex);

const store: StoreOptions<RootState> {
	module: {
		user
	}
}

export default New Vuex.store<RootState>(store);
```
