---
title: Tests unitaires
description: Les tests unitaires sont des tests qui permettent de vérifier le bon fonctionnement d’un module de votre application. Ils sont réalisés en utilisant [Jest](https://jestjs.io/fr/).
---

## Mise en place

Pour créer un test unitaire, vous devez ajouter un sous-dossier `tests` dans le dossier du module que vous souhaitez tester. À l’intérieur, vous devez ajouter un fichier avec l’extension `.spec.ts`. Par exemple, pour tester le composant `AppFooter.vue` contenu dans le dossier `AppFooter`, vous devez créer un fichier `tests/AppFooter.spec.ts`.

## Rédaction des tests

### Test d’une fonction

Pour tester une fonction, la syntaxe est la suivante :

```ts
// Import de la fonction
import { formatNir } from '../';

// Nom de la fonction testée dans le bloc "describe"
describe('formatNir', () => {
	// Bloc "it" pour chaque cas à tester
	it('formats a NIR with a key', () => {
		// Appel de la fonction et vérification du résultat
		expect(formatNir('295042531115732')).toEqual('2 95 04 25 311 157 32');
	});

	it('formats a NIR without a key', () => {
		expect(formatNir('2950425311157')).toEqual('2 95 04 25 311 157');
	});
});
```

### Test d’un composant

Pour tester un composant, la syntaxe d’un test est la suivante :

```ts
import Vue from 'vue';
import Vuetify from 'vuetify';

// Import des différentes fonctions utilitaires de Vue Dot
import {
	Wrapper,
	html,
	shallowMount,
	createLocalVue,
	createVuetifyInstance,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

// Import du composant
import AppFooter from '../';

// Nom du composant testé dans le bloc "describe"
describe('AppFooter', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	// Avant chaque test, on réinitialise l'instance de Vuetify
	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		// On monte le composant avec les différentes options souhaitées
		wrapper = shallowMount(AppFooter, {
			localVue,
			vuetify
		});

		// On vérifie que le composant n'a pas changé soudainement
		// Voir https://jestjs.io/fr/docs/snapshot-testing
		expect(wrapper).toMatchSnapshot();
	});
});
```

<doc-alert type="warning">

La function `html()` qui permet de ne pas inclure le code source des fonctions dans les snapshots est une fonction dépréciée. Elle sera supprimée dans la prochaine version majeure de Vue Dot.

</doc-alert>

<doc-alert type="info">

Vous pouvez retrouver la documentation de chaque fonction utilitaire Vue Dot dans les [composants techniques](/composants-techniques/tests-unitaires/install-global-plugins).

</doc-alert>

#### Utilisation de Vue Router

Pour tester des composants contenant des liens vers d’autres routes de votre application, vous pouvez utiliser les fonctions utilitaires [`installRouter`](/composants-techniques/tests-unitaires/install-router) et [`createRouter`](/composants-techniques/tests-unitaires/create-router) :

```ts
import Vue from 'vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

import {
	Wrapper,
	html,
	shallowMount,
	createLocalVue,
	createRouter
	createVuetifyInstance,
	installGlobalPlugins,
	installRouter
} from '@cnamts/vue-dot/src/helpers/testUtils';

import Home from '../Home.vue';

describe('Home', () => {
	const localVue = createLocalVue();

	// Mock des routes
	const routes = [
		{
			name: 'about',
			path: '/a-propos'
		}
	];

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;
	let router: VueRouter;

	installGlobalPlugins(localVue);
	installRouter(localVue); // Installation de Vue Router

	beforeEach(() => {
		vuetify = createVuetifyInstance();
		// Avant chaque test, on réinitialise le routeur
		router = createRouter({
			routes
		});
	});

	it('renders correctly', () => {
		wrapper = shallowMount(Home, {
			localVue,
			vuetify,
			router // Utilisation du routeur
		});

		expect(wrapper).toMatchSnapshot();
	});
});
```

#### Utilisation de Vuex

Pour tester des composants utilisant votre store, vous pouvez utiliser la fonction utilitaire [`createStore`](/composants-techniques/tests-unitaires/create-store) :

```ts
import Vue from 'vue';
import Vuetify from 'vuetify';
import { MutationTree, Store } from 'vuex';

import {
	Wrapper,
	html,
	shallowMount,
	createLocalVue,
	createStore,
	createVuetifyInstance,
	installGlobalPlugins
} from '@cnamts/vue-dot/src/helpers/testUtils';

import Home from '../Home.vue';

import '@/components/global';

describe('Home', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;
	let mutations: MutationTree<Record<string, never>>;
	let store: Store<Record<string, never>>;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();

		// Mock des fonctionnalités utilisées
		mutations = {
			updateUserInformation: jest.fn()
		};

		// Avant chaque test, on réinitialise le store
		store = createStore({
			modules: {
				userInformation: {
					state: {},
					mutations,
					namespaced: true
				}
			}
		});
	});

	it('renders correctly', () => {
		wrapper = shallowMount(Home, {
			localVue,
			vuetify,
			store, // Utilisation du store
			mocks
		});

		expect(wrapper).toMatchSnapshot();
		// Vérification du bon appel de la mutation
		expect(mutations.updateUserInformation).toHaveBeenCalled();
	});
});
```

<doc-alert type="info">

Pour vérifier que la mutation est bien appelée, vous pouvez mocker celle-ci en utilisant les [fonctions simulées](https://jestjs.io/fr/docs/mock-functions).

</doc-alert>

#### Test d’un formulaire Vuetify

Pour tester un composant utilisant un composant [`VForm`](https://vuetifyjs.com/en/components/forms/) via une référence, vous pouvez utiliser la fonction utilitaire [`mockVFormRef`](/composants-techniques/tests-unitaires/mock-v-form-ref) :

```ts
describe('AppForm', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('submits form', () => {
		const mocks = {
			$refs: {
				form: mockVFormRef(true)
			}
		};

		wrapper = shallowMount(AppForm, {
			localVue,
			vuetify,
			mocks
		});

		expect(wrapper).toMatchSnapshot();
	});
});
```

<doc-alert type="info">

Pour mocker correctement les références, vous devez utiliser l’option [`mocks`](https://v1.test-utils.vuejs.org/fr/api/options.html#mocks) de Vue Test Utils.

</doc-alert>

#### Utilisation de Vue i18n

Pour mocker certaines traductions d’un composant utilisant Vue i18n, vous pouvez utiliser la fonction utilitaire [`mockTranslations`](/composants-techniques/tests-unitaires/mock-translations) :

```ts
describe('Home', () => {
	const localVue = createLocalVue();

	let wrapper: Wrapper<Vue>;
	let vuetify: Vuetify;

	const mocks = {
		...mockTranslations<string | string[]>({
			'path.to.title': 'Titre',
			'path.to.items': [
				'Élément 1',
				'Élément 2',
				'Élément 3'
			]
		})
	};

	installGlobalPlugins(localVue);

	beforeEach(() => {
		vuetify = createVuetifyInstance();
	});

	it('renders correctly', () => {
		wrapper = shallowMount(Home, {
			localVue,
			vuetify,
			mocks
		});

		expect(wrapper).toMatchSnapshot();
	});
});
```

## Lancer les tests

Pour lancer les tests, vous devez utiliser la commande suivante :

<doc-tabs code>
<doc-tab-item label="Yarn">
```bash
yarn test:unit
```
</doc-tab-item>

<doc-tab-item label="npm">
```bash
npm run test:unit
```
</doc-tab-item>
</doc-tabs>

Si les tests sont passés, vous devriez avoir dans la console un tableau comme celui-ci :

```bash
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 passed, 1 total
Time:        4.486 s
Ran all test suites.
```

En cas d’échec, la raison vous sera donnée dans la console :

```bash
FAIL src/functions/formatNir/tests/formatNir.spec.ts
  ● formatNir › formats a NIR without a key

    expect(received).toEqual(expected) // deep equality

    Expected: "2 9504 25 311 157"
    Received: "2 95 04 25 311 157"

      11 |              const nir = '2950425311157';
      12 |
    > 13 |              expect(formatNir(nir)).toEqual('2 9504 25 311 157');
         |                                     ^
      14 |      });
      15 | });
      16 |

      at Object.<anonymous> (src/functions/formatNir/tests/formatNir.spec.ts:13:26)


Test Suites: 1 failed, 97 passed, 98 total
Tests:       1 failed, 323 passed, 324 total
Snapshots:   80 passed, 80 total
Time:        79.619 s
Ran all test suites.
```

### Mise à jour des snapshots

Pour mettre à jour les [snapshots](https://jestjs.io/fr/docs/snapshot-testing), vous devez lancer les tests avec l’option `-u` :

<doc-tabs code>
<doc-tab-item label="Yarn">
```bash
yarn test:unit -u
```
</doc-tab-item>

<doc-tab-item label="npm">
```bash
npm run test:unit -u
```
</doc-tab-item>
</doc-tabs>
