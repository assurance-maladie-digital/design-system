Le fichier `config.js` contient les variables d'environnement utilisées pour le déploiement sur la plateforme.

## Syntaxe

La syntaxe de ce fichier est différente de celle des fichiers `config.js` et `config.js.dist` car le fichier ne doit pas comporter de valeurs :

```js
window.VUE_APP_ENV = '{{ VUE_APP_ENV }}';
```

Celles-ci seront ajoutées automatiquement lors du déploiement en remplaçant la partie `{{ VUE_APP_ENV }}` par la valeur définie dans les variables d'environnement sur la plateforme.
