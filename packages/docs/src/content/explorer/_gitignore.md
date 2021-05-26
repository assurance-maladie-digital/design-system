Le fichier `.gitignore` contient la liste des dossiers et des fichiers à ne pas inclure dans le code publié sur Git.

<doc-alert type="warning">
Il n'est pas recommandé d'éditer ce fichier.
</doc-alert>

## Configuration par défaut

Par défaut, les dossiers et fichiers ignorés sont :
- ceux créés par les éditeurs de code
- les fichiers de logs des différents outils
- les rapports de couverture de tests
- les vidéos et captures d'écran générés par Cypress
- le dossier `node_modules`, qui contient le code des dépendances
- le dossier `dist`, qui contient le code compilé de l'application
- le fichier `public/js/config.js`, qui contient les variables d'environnement locales

## Plus d'informations

Vous pouvez retrouver plus d'informations sur la documentation de [Github](https://docs.github.com/en/github/using-git/ignoring-files).
