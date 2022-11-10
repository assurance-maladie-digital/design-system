---
title: Tests e2e
description: Les tests End to End sont des tests qui permettent de vérifier le bon fonctionnement de l’interface de votre application. Ils sont réalisés en utilisant [Cypress](https://docs.cypress.io/).
---

## Mise en place

Pour créer un test d’interface, vous devez ajouter un fichier avec l’extension `.spec.ts` dans le dossier `tests/e2e/specs`, en le nommant de la même manière que la page que vous souhaitez tester.
Par exemple, si vous voulez tester la page `Home`, vous devez nommer le fichier de test `Home.spec.ts`.

## Rédaction des tests

Les tests sont construits en utilisant la syntaxe suivante :

```ts
// Nom de la page testée dans le bloc "describe"
describe('About page', () => {
	// Avant chaque test, il faut naviguer sur l'URL de la page que vous souhaitez tester, ici /a-propos
	beforeEach(() => {
		cy.visit('/a-propos');
	});

	it('contains all links', () => {
		// La commande dataCy() permet de sélectionner un élément avec l'attribut data-cy="", ici la liste des liens
		// Puis on recherche toutes les balises <li>, et on compare le nombre de résultats à celui attendu
		cy.dataCy('links').find('li').should('have.length', 4);
	});
});
```

## Lancer les tests

Pour lancer les tests, vous devez utiliser la commande suivante :

<doc-tabs code>
<doc-tab-item label="Yarn">
```bash
yarn test:e2e
```
</doc-tab-item>

<doc-tab-item label="npm">
```bash
npm run test:e2e
```
</doc-tab-item>
</doc-tabs>

Si les tests sont passés, vous devriez avoir dans la console un tableau comme celui-ci :

```bash
       Spec                                              Tests  Passing  Failing  Pending  Skipped

│ ✔  About.spec.ts                            00:06        1        1        -        -        - │
  ✔  All specs passed!                        00:18        1        1        -        -        -
```

En cas d'échec, la raison vous sera donnée dans la console :

```bash
  Home page
    1) contains link list

  1 failing

  1) Home page
       AssertionError: Timed out retrying after 4000ms: expected 4 got 5

     Spec                                              Tests  Passing  Failing  Pending  Skipped
│ ✖  Home.spec.ts                             00:10        1        0        1        -        - │
  ✖  1 of 1 failed (100%)                     00:25        1        0        1        -        -
```

## Les captures d'écran

Dans le cas ou un test échoue, une capture d’écran est effectuée et est sauvegardée dans le dossier `screenshots` qui se trouve à la racine du dossier `e2e`. Cela pourra vous aider dans dans votre investigation pour trouver les causes de l’erreur.

## Mock d’API

Pour intercepter des requêtes, vous pouvez utiliser la fonction `cy.intercept()` :

```ts
const dynamicStatusCodeStub = 404;

cy.intercept('POST', '/api-route', (req) => {
	req.reply({
		statusCode: dynamicStatusCodeStub
	});
}).as('backendAPI');
```

Placé au début du test, cette ligne intercepte les requêtes `POST` sur la route `/api-route` et lui renvoie une réponse.
Dans ce cas exemple, cela permet de tester ce qu'il se passe dans le cas où la réponse est une erreur 404.

## Commandes personnalisées

Vous pouvez créer vos propres commandes dans le fichier `tests/e2e/support/commands.js`.

Par exemple, la commande `clickLink()` cliquera sur les balises `a` avec le label défini en paramètre :

```js
Cypress.Commands.add('clickLink', (label) => {
	cy.get('a').contains(label).click();
});
```

Dans le fichier `types/index.d.ts`, vous pourrez ajouter votre fonction :

```ts
declare namespace Cypress {
	export interface Chainable {
		/**
		 * Custom command to select DOM element using data-cy attribute
		 * @example cy.dataCy('greeting')
		 */
		dataCy(value: string): Chainable<Element>;
		/**
		 * Custom command to click a link with a specified label
		 * @example cy.clickLink('greeting')
		 */
		clickLink(value: string): Chainable<Element>;
	}
}
```

Enfin, vous pouvez l'utiliser dans vos tests :

```js
cy.clickLink('nom-du-label');
```
