---
title: Contribuer
description: Merci de prendre le temps de contribuer au Design System, c'est de cette manière qu'il va pouvoir évoluer et s'adapter aux différents besoins des équipes et des projets.
position: 2
---

## Rapports de bugs

Lorsque vous constatez un bug dans l'un des packages du Design System, vous pouvez créer un rapport de bug pour nous notifier de celui-ci.

Avant d'ouvrir un nouveau rapport de bug, vérifiez :
- Qu'un rapport similaire n'ait pas déjà été ouvert en cherchant dans les [rapports existants](https://github.com/assurance-maladie-digital/design-system/issues)
- Que le bug est toujours présent dans la dernière version du package concerné

Une fois ces vérifications effectuées, vous pouvez [créer un rapport de bug](https://github.com/assurance-maladie-digital/design-system/issues/new?template=bug_report.md).
Lors de l'écriture de votre rapport de bug, essayez de donner le plus de détails possible

<DocAlert type="info">

Lorsque vous créez une reproduction minimale, supprimez tous les éléments, propriétés, variables, données etc qui ne sont pas nécessaires pour reproduire le bug. Cela facilitera le traitement du rapport et le temps qu'il faudra pour identifier puis résoudre le bug.

</DocAlert>

## Demandes d'évolution

Si une fonctionnalité dont vous avez besoin dans l'un des packages du Design System n'est pas présente ou déjà planifiée, vous pouvez [créer une demande de nouvelle fonctionnalité](https://github.com/assurance-maladie-digital/design-system/issues/new?template=feature_request.md).

## Développement

Notre Design System est un monorepo utilisant [lerna](https://github.com/lerna/lerna) qui rassemble notre librairie de composants, notre outil de création de projets ainsi que notre documentation et les composants plus macros, ce qui permet de réduire le coût de travailler sur plusieurs projets à la fois.

### Configuration de votre environnement

Vous devez installer les outils suivants :

- [Git](https://git-scm.com/) >v2.20
- [Node.js](https://nodejs.org/) LTS
- [Yarn](https://classic.yarnpkg.com/)

Certaines de nos dépendances ont besoin de [node-gyp](https://github.com/nodejs/node-gyp#installation) pour fonctionner. Vous n'avez pas besoin d'installer node-gyp directement, mais vous pouvez avoir besoin d'outils supplémentaires, en particulier sur Windows. Consultez la documentation de node-gyp pour plus de détails.

Une fois les outils installés, vous pouvez cloner le repo :

<doc-code-group>

<doc-code-item label="SSH" value="ssh">
```bash
git clone git@github.com:assurance-maladie-digital/design-system.git
```
</doc-code-item>

<doc-code-item label="HTTPS" value="https">
```bash
git clone https://github.com/assurance-maladie-digital/design-system.git
```
</doc-code-item>

</doc-code-group>

Ensuite, vous pouvez installer les dépendances :

```bash
# Allez dans le dossier design-system
cd design-system

# Installez toutes les dépendances
yarn
```

Une fois l'installation des dépendances effectuée, vous êtes prêt à développer !

### Vue Dot

Todo

### Documentation

Pour modifier la documentation, vous pouvez simplement suivre le lien « Éditer cette page sur GitHub » présent en bas de page, celui-ci ouvrira l'éditeur en ligne de Github, vous permettant d'éditer directement la documentation, puis de créer une nouvelle branche afin de proposer vos modifications via une Pull Request.

La docume

The documentation is located in packages/docs but also uses some files from packages/api-generator. A dev server for the documentation can be started by running yarn dev docs from the project root and will be available on localhost:8080 by default.

If you want to see changes from Vuetify in the documentation you need to run yarn build:lib in the vuetify package before starting the documentation server.
