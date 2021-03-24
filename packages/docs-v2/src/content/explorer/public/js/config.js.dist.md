Le fichier `config.js.dist` contient les variables d'environnement locales par défaut.

Il est utilisé pour générer le fichier `config.js` en local, qui est importé dans le fichier `public/index.html`.

<doc-alert type="info">

Les variables sont ajoutées à l'objet global `window`. Cet objet est accessible à n'importe quel endroit dans votre application.

</doc-alert>

## Variables par défaut

Par défaut, le fichier contient les variables d'environnement suivantes :

```js
// Env vars
window.VUE_APP_ENV = 'dev';
// Base URL of Axios requests
window.API_URL = 'http://localhost:8000/';
// Maintenance
window.MAINTENANCE = 'false';
window.MAINTENANCE_TITLE = '';
window.MAINTENANCE_MESSAGE = '';
```

- `VUE_APP_ENV` peut être utilisée pour activer ou désactiver des fonctionnalités en fonction de l'environnement
- `API_URL` est utilisée par l'instance axios par défaut
- `MAINTENANCE` contrôle l'affichage de la page de maintenance
- `MAINTENANCE_TITLE` peut être utilisée pour modifier le titre par défaut de la page de maintenance
- `MAINTENANCE_MESSAGE` peut être utilisée pour modifier le texte par défaut de la page de maintenance

Si vous avez choisi d'installer Matomo lors de la création du projet, vous aurez également les variables d'environnement suivantes :

```js
// Matomo
window.MATOMO_ENABLED = 'false';
window.MATOMO_SITE_ID = '';
window.MATOMO_URL = '';
```

- `MATOMO_ENABLED` contrôle l'activation de Matomo
- `MATOMO_SITE_ID` contient l'identifiant du site
- `MATOMO_URL` contient l'URL a appeler, par défaut si aucune valeur n'est définie, l'URL est `https://analytics.ameli.fr/`
