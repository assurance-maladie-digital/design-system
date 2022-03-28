---
title: Authentification avec token
description: Récupération, stockage et utilisation d’un token d’authentification pour les requêtes API.
---

## Récupération du token

Lorsque le token est passé à l’application via une URL de cette forme :

```text
https://example.com#access_token=monToken
```

<doc-alert type="info">

L’URL est écrite comme pour des paramètres GET, mais le caractère `?`, indiquant le début des paramètres, est remplacé par le caractère `#`, indiquant une ancre.<br>
Le navigateur ne transmettra pas le contenu de l’ancre au serveur, ce qui permettra de ne pas logger le contenu du token pour éviter un risque en terme de sécurité.

</doc-alert>

Vous pouvez créer une fonction `authenticate` dans le fichier `src/router/authentication.ts` pour récupérer le token en utilisant `URLSearchParams` et le stocker dans le store :

```ts
import { Route } from 'vue-router';
import { Next } from '@cnamts/vue-dot/src/types';
import { store } from '@/store';

const TOKEN_KEY = 'access_token';

export async function authenticate(to: Route, from: Route, next: Next): Promise<void> {
	// Avoid infinite loop if route is home
	if (to.hash.includes(`#${TOKEN_KEY}`) && to.name !== 'home') {
		const urlParams = new URLSearchParams(to.hash.slice(1));
		const token = urlParams.get(TOKEN_KEY);

		store.dispatch('authentication/updateToken', token);

		next({
			name: 'home'
		});
	} else {
		next();
	}
}
```

<doc-alert type="info">

Vous devez définir le module `authentication` du store, pour cela vous pouvez consulter [le guide sur l’utilisation du store](/guides/utilisation-store).

</doc-alert>

Cette fonction prend en paramètre les propriétés `to` et `from` de [Vue Router](https://router.vuejs.org/fr/guide/advanced/navigation-guards.html) ainsi que la fonction `next`, qui permet de naviguer vers la prochaine route.

Elle sera appelée depuis le fichier `src/router/navigationRedirectGuard.ts` lorsque l’on voudra connecter l’utilisateur :

```ts
import { Route } from 'vue-router';
import { Next } from '@cnamts/vue-dot/src/types';
import { authenticate } from './authentication';

import { MAINTENANCE_ENABLED } from '@/constants';

export function navigationRedirectGuard(to: Route, from: Route, next: Next): void {
	if (MAINTENANCE_ENABLED) {
		// Avoid infinite loop if route name is maintenance
		if ('maintenance' !== to.name) {
			next({ name: 'maintenance' });
		} else {
			next();
		}
	} else if ('maintenance' === to.name) {
		// Else, if we're trying to access the maintenance page
		// when not in maintenance mode, redirect to home
		next({ name: 'home' });
	} else {
		authenticate(to, from, next);
	}
}
```

## Utilisation dans le header d’une requête axios

Pour utiliser le token lors d’appels API, on peut ajouter le header `Authorization` sur l’instance axios, ce qui ajoutera le header sur tous les appels effectués avec cette instance, avec comme valeur le token d’authentification. Vous pouvez modifier la fonction `authenticate` :

```ts
// …
import { axios } from '@/plugins/axios';

const TOKEN_KEY = 'access_token';
const AUTHORIZATION_HEADER = 'Authorization';

export async function authenticate(to: Route, from: Route, next: Next): Promise<void> {
	// Avoid infinite loop if route is home
	if (to.hash.includes(`#${TOKEN_KEY}`) && to.name !== 'home') {
		// …

		store.dispatch('authentication/updateToken', token);

		axios.defaults.headers.common[AUTHORIZATION_HEADER] = `Bearer ${token}`;

		next({
			name: 'home'
		});
	} else {
		next();
	}
}
```

<doc-alert type="info">

La valeur du token est précédé du texte `Bearer` pour indiquer le [type de token utilisé](https://developer.mozilla.org/fr/docs/Web/HTTP/Authentication#sch%C3%A9ma_d'authentification).

</doc-alert>
