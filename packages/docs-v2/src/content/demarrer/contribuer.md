---
title: Contribuer
description: Merci de prendre le temps de contribuer au Design System, c'est de cette manière qu'il va pouvoir évoluer et s'adapter aux différents besoins des équipes et des projets.
position: 2
---

## Rapports de bugs

Todo

## Demandes d'évolution

Todo

## Développement

Notre Design System est un monorepo utilisant [lerna](https://github.com/lerna/lerna) qui rassemble notre librairie de composants, notre outil de création de projets ainsi que notre documentation et les composants plus macros, ce qui permet de réduire le coût de travailler sur plusieurs projets à la fois.

### Configuration de votre environnement

Vous devez installer les outils suivants :

- [Git](https://git-scm.com/) >v2.20
- [Node.js](https://nodejs.org/) LTS
- [Yarn](https://classic.yarnpkg.com/)

Certaines de nos dépendances ont besoin de [node-gyp](https://github.com/nodejs/node-gyp#installation) pour fonctionner. Vous n'avez pas besoin d'installer node-gyp directement, mais vous pouvez avoir besoin d'outils supplémentaires, en particulier sur Windows. Consultez la documentation de node-gyp pour plus de détails.

Une fois que tout est installé, vous pouvez cloner le repo :

```bash
# Using HTTPS
git clone https://github.com/assurance-maladie-digital/design-system.git

# Using SSH
git clone git@github.com:assurance-maladie-digital/design-system.git
```

Ensuite, vous devez installer les dépendances :

```bash
# Allez dans le dossier design-system
cd design-system

# Installez toutes les dépendances
yarn
```

Une fois l'installation des dépendances effectuée, vous êtes prêts à développer !
