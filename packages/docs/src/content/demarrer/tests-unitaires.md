---
title: Tests Unitaires
hideTitle: true
---

## Les tests unitaires

Les tests unitaires permettent de vérifier le bon fonctionnement d’une petite partie bien précise (unité ou module) d’une application. Ils s'assurent qu'une méthode exposée à la manipulation par un utilisateur fonctionne bien de la façon dont elle a été conçue.

Pour les réaliser, nous utilisons le Framework Jest, un framework JavaScript construit sur Jasmine.

### Mise en place

Les tests d'un composant se font dans le fichier de ce composant.
Dans le dossier du composant, creer le dossier `tests` à la racine.
A l'interieur, vous devez créer un fichier `.spec.ts`. Dans l'exemple d'un footer, créer un fichier `footer.spec.ts`.

### Ecriture du test

```bash
describe('Pagination Unit Test Suites', () => {
    it('should return something', () => (
        expect(Pagination.getNumberOfPages(12)).toBeDefined()
    ))

    it('should return 0', () => (
        expect(Pagination.getNumberOfPages(0)).toEqual(0)
    ))
})
```

```bash
describe('Pagination Unit Test Suites', () => {
    it('should return something', () => (
        expect(Pagination.getNumberOfPages(12)).toBeDefined()
    ))

    it('should return 0', () => (
        expect(Pagination.getNumberOfPages(0)).toEqual(0)
    ))
})
```

### Snapshots
