---
title: Token d’authentification
description: Guide sur la récupération et l’utilisation d’un token.
---

Il est fréquent de devoir utiliser un token d’authentification dans les requêtes, dans cette partie nous verrons comment récupérer un token qui provient d’une URL, comment le stocker dans le store et enfin comment l’utiliser dans une requête axios.

## Récupération du token

Pour commencer il faut récupérer le token d’authentification. Prenons l’exemple que ce token est stocké dans l’URL, l’URL sera alors de la forme :

```vue
https://monsite.fr#access_token=monToken
```

Il faut ajouter au router une fonction pour récupérer le token stocké dans l’URL. Pour cela, nous créerons un fichier typescript  `src/router/authentication.ts`. Nous y créons une fonction `authenticate` qui récupèrera et stockera le token dans le store si celui-ci est présent dans l’URL.

```typescript
import { Route } from 'vue-router';
import { Next } from '@cnamts/vue-dot/src/types';
import { store } from '@/store';

export async function authenticate(to: Route, from: Route, next: Next): Promise<void> {
	// S’il y'a un token en hash et si la route actuelle n'est pas la page d'accueil (pour éviter les boucles infinies)
	if (to.hash.includes('#access_token') && to.name !== 'home') {
		// On récupère la valeur du token
		const token = to.hash.replace('#access_token=', '');

		// On stock le token dans le store
		store.dispatch('authentication/updateToken', token);

		next({
			name: 'home'
		});
	}

	next();
}
```

<doc-alert type="info">

Il faut définir dans le store le module authentication pour y stocker le token. Voir le guide sur l’[utilisation du store](/guides/store)

</doc-alert>

Cette fonction sera appelée depuis le fichier `src/router/navigationRedirect.ts` :

```typescript
import { Route } from 'vue-router';
import { Next } from '@cnamts/vue-dot/src/types';
import { authenticate } from './authentication';

import { MAINTENANCE_ENABLED } from '@/constants';

/**
 * Main navigation redirection logic
 *
 * @param {Route} to Vue Router to param
 * @param {Route} from Vue Router from param
 * @param {Route} next Vue Router next param
 * @returns {void}
 */
export function navigationRedirect(to: Route, from: Route, next: Next): void {
	if (MAINTENANCE_ENABLED) {
		// Avoid infinite loop
		if ('maintenance' !== to.name) {
			// Redirect to maintenance page
			next({ name: 'maintenance' });
		} else {
			// Else, resolve route
			next();
		}
	} else if ('maintenance' === to.name) {
		// Else, if we’re trying to access the maintenance page
		// when not in maintenance mode, redirect to home
		next({ name: 'home' });
	} else {
		authenticate(to, from, next);
	}
}

```

## Utilisation dans le header d’une requête axios

Il faut maintenant ajouter l’utilisation du token dans l’instance axios qui sera utilisée pour requêter une api `src/plugins/axios.ts`. On ajoute un intercepteur qui sur notre instance axios qui va ajouter le token dans les autorisations :

```typescript
import axios from 'axios';
import { store } from '@/store';


const instance = axios.create({
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json'
	}
});

instance.interceptors.request.use((config: AxiosRequestConfig) => {
	return {
		...config.headers,
		Authorization: `Bearer ${store.getters['authentication/getToken']}`
	};
});

export { instance as axios };

```

Nous avons donc ajouté l’attribut `Authorization`. La valeur du token est précédé du texte `Bearer`, un bearer token est une méthode d’authentification très souvent utilisée.
