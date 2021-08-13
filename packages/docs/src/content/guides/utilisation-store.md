---
title: Utilisation du store
description: Quand et comment utiliser le store pour partager des données à travers une application.
---

## Pour commencer

<doc-indent>

Le store est un espace centralisé, accessible dans toute l’application, avec des règles garantissant que l’état ne peut être muté que de manière prévisible.

</doc-indent>

Nous utilisons la librairie [Vuex](https://vuex.vuejs.org/fr/) pour la gestion du store.

## Quand utiliser le store

<doc-indent>

Pour savoir si vous devez stocker une donnée dans le store ou plutôt dans un composant, vous pouvez vous demander si cette donnée a besoin d’être accessible dans toute l’application. Si c’est le cas, vous pouvez la stocker dans le store. Sinon, c’est que cette donnée doit être stockée localement.

</doc-indent>

Par exemple, les informations de profil d’un utilisateur peuvent être nécessaires pour l’affichage dans l’en-tête de l’application, mais aussi pour afficher ou masquer certaines fonctionnalités en fonction des droits de l’utilisateur. Ces données peuvent être stockées dans le store.

Les informations concernant le détail d’un dossier, remontées par un appel API seront affichées sur une page, dans ce cas ces données doivent être stockées en local, même si celles-ci sont partagées entre plusieurs composants de la page, vous pouvez consulter [le guide sur la gestion des événements](/guides/gestion-evenements).

## Comment utiliser le store

### Store par défaut

Lors de la création d’un nouveau projet, un fichier `src/store/index.ts` est créé et ressemble à cela :

```ts
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import VuexPersistence from 'vuex-persist';

import { RootState } from './types';

// Use the notification module from Vue Dot
import { notification } from '@cnamts/vue-dot/src/modules/notification';

/** The store is saved in the browser's session */
const vuexLocal = new VuexPersistence<RootState>();

Vue.use(Vuex);

/** See https://vuex.vuejs.org/fr/getting-started.html for help */
const storeOptions: StoreOptions<RootState> = {
	strict: true,
	state: {},
	// See https://vuex.vuejs.org/guide/modules.html for more info on modules
	modules: {
		notification
	},
	plugins: [
		vuexLocal.plugin
	]
};

export const store = new Vuex.Store<RootState>(storeOptions);
```

<doc-alert type="info">

Le store est ensuite importé dans le fichier `src/main.ts` et passé en paramètre de l’instance Vue.js de l’application.

</doc-alert>

Le store est composé du `state`, où seront stockées les données, ainsi que de modules qui permettent de découper le store en plusieurs parties.
Le module notification est utilisé avec le composant [`NotificationBar`](/composants/notification-bar) pour afficher des notifications aux utilisateurs.

Par défaut, le plugin [VuexPersist](https://github.com/championswimmer/vuex-persist) est installé pour persister le store dans le `localStorage`, mais il est possible de le configurer pour utiliser le `sessionStorage` ou de ne persister que certains modules.

### Modules

L’utilisation des modules n’est pas obligatoire mais fortement recommandée afin de garder le store organisé et donc plus maintenable.

Pour créer un module, vous devez créer un fichier du nom de celui-ci dans le dossier `modules` dans `src/store`, par exemple pour ajouter un `userData`, vous pouvez créer le fichier `src/store/modules/userData` avec le contenu suivant :

```ts
import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';

import { RootState } from '../';

export interface UserDataState {}

export const state: UserDataState = {};

export const actions: ActionTree<UserDataState, RootState> = {};

export const mutations: MutationTree<UserDataState> = {};

export const getters: GetterTree<UserDataState, RootState> = {};

export const userData: Module<UserDataState, RootState> = {
	namespaced: true,
	state,
	actions,
	mutations,
	getters
};
```

Ensuite, vous devez importer votre module dans le fichier `src/store/index.ts` et l’ajouter dans la liste des modules :

```ts
import { userData } from './modules/userData';

// …

const storeOptions: StoreOptions<RootState> = {
	// …
	modules: {
		notification,
		userData
	},
	// …
};
```

#### State

Pour ajouter des données dans votre module, vous devez les ajouter dans la constante `state` et compléter l’interface `UserDataState` :

```ts
export interface UserDataState {
	username: string;
	email: string;
	lastLogin: Date;
}

export const state: UserDataState = {
	username: 'admin',
	email: 'admin@example.com',
	lastLogin: new Date()
};
```

Afin de récupérer ces données dans un composant, vous pouvez utiliser la fonction `mapState` mise à disposition par Vuex :

```vue
<template>
	<p>Bonjour {{ username }}</p>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapState } from 'vuex';

	@Component({
		computed: mapState('userData', ['username'])
	})
	export default class UserInformations extends Vue {}
</script>
```

#### Accesseurs

Les accesseurs sont comparables aux propriétés calculées des composants Vue.js, ils sont utiles pour les calculs sur les données car ils sont également mis en cache. Les getters sont des fonctions définies dans la constante `getters` :

```ts
export const getters: GetterTree<UserDataState, RootState> = {
	formattedLastLogin(state): string {
		return dayjs(state.lastLogin).format(DATE_FORMAT);
	}
};
```

Afin d’utiliser cet accesseur dans un composant, vous pouvez utiliser la fonction `mapGetters` mise à disposition par Vuex :

```vue
<template>
	<div>
		<p>Bonjour {{ username }}</p>

		<p>
			Dernière connexion le

			<time :datetime="lastLogin">
				{{ formattedLastLogin }}
			</time>
		</p>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapState, mapGetters } from 'vuex';

	@Component({
		computed: {
			...mapState('userData', [
				'username',
				'lastLogin'
			]),
			...mapGetters('userData', [
				'formattedLastLogin'
			])
		}
	})
	export default class UserInformations extends Vue {}
</script>
```

#### Actions et mutations

Les mutations sont le seul moyen de mettre à jour le store.<br>
Les actions sont similaires aux mutations, elles permettent en plus l’exécution de code asynchrone mais doivent appeler des mutations pour mettre à jour le store.

Pour cette raison et par convention, il est recommandé de toujours utiliser des actions dans les composants.

<doc-alert type="info">
Dans la prochaine version majeure de Vuex (la v5), le concept de mutations sera supprimé pour n’avoir plus que celui des actions.
</doc-alert>

Les mutations sont des fonctions définies dans la constante du même nom :

```ts
export const mutations: MutationTree<UserDataState> = {
	UPDATE_USERNAME(state, username: string) {
		state.username = username;
	}
};
```

<doc-alert type="info">

Pour différencier les mutations des actions, le nom des mutations est écrit en majuscules.

</doc-alert>

Les actions sont des fonctions définies dans la constante du même nom :

```ts
export const actions: ActionTree<UserDataState, RootState> = {
	updateUsername({ commit }, username: string) {
		commit('UPDATE_USERNAME', username);
	}
};
```

Afin d’utiliser cet accesseur dans un composant, vous pouvez utiliser la fonction `mapActions` mise à disposition par Vuex :

```vue
<template>
	<div>
		<p>Bonjour {{ username }}</p>

		<VBtn
			color="primary"
			outlined
			@click="editUsername"
		>
			Mettre à jour mon nom d’utilisateur
		</VBtn>
	</div>
</template>

<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapState } from 'vuex';

	@Component({
		computed: mapState('userData', ['username']),
		methods: mapActions('userData', ['updateUsername'])
	})
	export default class UserInformations extends Vue {
		editUsername(): void {
			this.updateUsername('admin-0000');
		}
	}
</script>
```
