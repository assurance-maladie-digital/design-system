---
title: Tests Unitaires
hideTitle: true
---

## Les tests unitaires

Les tests unitaires permettent de vérifier le bon fonctionnement d’une petite partie bien précise (unité ou module) d’une application. Ils s'assurent qu'une méthode exposée à la manipulation par un utilisateur fonctionne bien de la façon dont elle a été conçue.

Pour les réaliser, nous utilisons le Framework Jest (https://jestjs.io/fr/), un framework JavaScript construit sur Jasmine.

### Mise en place

Les tests d'un composant se font dans le fichier de ce composant.
Dans le dossier du composant, creer le dossier `tests` à la racine.
A l'interieur, vous devez créer un fichier `.spec.ts`. Dans l'exemple d'un footer, créer un fichier `footer.spec.ts`.

Chaque page doit commencer par les imports suivants :

```js
//import de Vue
import Vue from 'vue';

//import du wrapper pour simuler le composant à tester
import { Wrapper } from '@vue/test-utils';

//La fonction pour monter le composant
import { mountComponent } from '@/tests';

import { html } from '@/tests/utils/html';
```

### Création du wrapper

D'autres imports peuvent être necessaires pour la création du wrapper

```js
//import des types
import { ElementType } from '../../types';

//import des mixins
import { MixinFile } from '../mixins';
```

Nous pouvons maintenant créer le wrapper à l'aide de la fonction `createWrapper()`

```js
function createWrapper(prop1: ElementType) {
	const component = Vue.component('TestComponent', {
		mixins: [
			MixinFile
		],
		template: '<div />'
	});

	return mount(component, {
		propsData: {
			prop1
		}
	}) as Wrapper<ElementComponent>;
}
```

Pour l'exemple, nous pouvons rajouter un tableau que nous passerons en props.

```js
Array1 = ['un', 'deux', 'trois'];
```

### Rédaction des tests

Pour tester une fonction, créer un test sur ce modèle :

```js
describe('Nom du composant', () => {
	it('ajouter un nombre au tableay Array1', async () => {
		//définir le wrapper, en lui passant le tableau en paramêtre
		const wrapper = createWrapper(Array1);

        //utiliser la fonction que nous voulons tester
		wrapper.vm.addNumber('quatre');

        //tester si nous avons bien le résultat attendu
		expect(wrapper.Array1.toEqual([...Array1, 'quatre']);
	});
});
```

### Lancer les tests

Pour lancer les tests, utiliser cette ligne de commande.

```bash
yarn test
```

Si tout s'est bien passé, vous aurez en réponse dans la console quelque chose comme ca.

```bash
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   1 passed, 1 total
Time:        4.486 s
Ran all test suites.
```

Si le test échou, les motifs de l'échec s'afficheront dans la console.

```bash
expect(received).toEqual(expected)

Expected: ['un', 'deux', 'trois', 'quatre']
Received: ['un', 'deux', 'trois']

describe('Nom du composant', () => {
    ...
}

Test Suites: 1 failed, 0 passed, 1 total
Tests:       1 failed, 0 passed, 1 total
Snapshots:   1 failed, 0 passed, 1 total
Time:        4.486 s
Ran all test suites.
```

### Snapshots

Un deuxième type de test consiste à comparer un composant au snapshot.

Dans le dossier `test`, creer le dossier `__snapshots__`.
A l'interieur de ce dossier, vous devez créer un fichier `.spec.ts.snap`. Dans l'exemple d'un footer, créer un fichier `footer.spec.ts.snap`.

Il faut d'abord importer le composant en plus des imports listés plus haut.

```bash
import ComponentExemple from '../';
```

```js
describe('ComponentExemple', () => {
	it('se contruit correctement', () => {
		wrapper = mountComponent(ComponentExemple, {
			propsData: {
				color: 'white'
			}
		});

		//comparaison avec le snapshot
		expect(html(wrapper)).toMatchSnapshot();
	});
});
```

Pour lancer les tests et mettre à jour les snapshots

```bash
yarn test -u
```
