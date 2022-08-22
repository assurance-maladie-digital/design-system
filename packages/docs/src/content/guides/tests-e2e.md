---
title: Tests e2e
description: Présentation des tests End to End.
---

Les tests End to End sont des tests qui permettent de tester l'interface.
Ils sont réalisés grâce au framework Cypress (https://docs.cypress.io/).

<doc-tabs>

<doc-tab-item label="Utilisation">
### Mise en place

Les tests peuvent être créés en ajoutant un fichier `.spec.ts` dans le dossier `tests/e2e/specs`.
Nommer le fichier de la meme manière que la view que vous voulez tester.
Si vous voulez tester la page `Home`, nommer le fichier de test : `Home.specs.ts`.

### Rédaction des tests

Les tests doivent être construit selon ce modèle

```js
// Nom de la page dans la partie "describe".
describe('Home page', () => {
	// Avant chaque test, cypress se rend sur la page que nous voulons tester
	// Ici l'url /home
	beforeEach(() => {
		cy.visit('/home');
	});

	// Utiliser la command dataCy() pour cibler des éléments, ici les liens
	// Parmis les liens, cibler les éléments "ul"
	// Comparer le resultat des élements ciblés au résultat attendu
	it('contains link list', () => {
		cy.dataCy('links').find('ul').should('have.length', 4);
	});
});
```

```js
describe('Home page', () => {
	beforeEach(() => {
		cy.visit('/');
	});
	it('displays a notification when send notification button is pressed', () => {
		// selectionne un bouton et clique dessus
		cy.dataCy('sendNotification').click();

		// verifie que la notification bar a bien la classe "active"
		cy.dataCy('notificationBar').should('have.class', 'active');
	});
});
```

### Lancer les tests

```bash
npm run test:e2e
```

Si le test est passé, vous devriez avoir dans la console un tableau comme celui ci.

```bash
       Spec                                              Tests  Passing  Failing  Pending  Skipped

│ ✔  About.spec.ts                            00:06        1        1        -        -        - │
  ✔  All specs passed!                        00:18        1        1        -        -        -
```

En cas d'échec, la raison vous sera donnée dans la console de cette manière.

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

### les captures d'écran

Dans le cas ou un test échoue, une capture d'écran est prise et est stockée dans le dossier `screenshots` qui se trouve à la racine du dossier `e2e`. Cela vous aidera à investiguer pour trouver les causes de l'erreur.

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="file-upload"></doc-api>
</doc-tab-item>
