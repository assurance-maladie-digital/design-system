Le fichier `package.json` contient les métadonnées du projet dont [Yarn](https://classic.yarnpkg.com/en/) a besoin comme la liste des dépendances ou les commandes qu’il est possible d’exécuter.

## Configuration par défaut

Par défaut, le fichier contient toutes les dépendances nécessaires au fonctionnement du projet, les commandes à exécuter pour lancer le serveur de développement, les tests, la vérification de la qualité ainsi que la compilation de l’application.

<doc-alert type="info">

La commande de vérification de la qualité est exécutée automatiquement via le hook `pre-commit`.

</doc-alert>

## Plus d’informations

Vous pouvez retrouver plus d’informations sur la documentation de [npm](https://docs.npmjs.com/files/package.json/).
