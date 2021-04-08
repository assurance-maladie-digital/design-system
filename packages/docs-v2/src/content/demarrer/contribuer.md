---
title: Contribuer
description: Merci de prendre le temps de contribuer au Design System, c'est de cette manière qu'il va pouvoir évoluer et s'adapter aux différents besoins des équipes et des projets.
---

## Rapports de bugs

Lorsque vous constatez un bug dans l'un des packages du Design System, vous pouvez créer un rapport de bug pour notifier l'équipe de celui-ci.

Avant d'ouvrir un nouveau rapport de bug, vérifiez :
- Qu'un rapport similaire n'ait pas déjà été ouvert en cherchant dans les [rapports existants](https://github.com/assurance-maladie-digital/design-system/issues)
- Que le bug est toujours présent dans la dernière version du package concerné

Une fois ces vérifications effectuées, vous pouvez [créer un rapport de bug](https://github.com/assurance-maladie-digital/design-system/issues/new?template=bug_report.md).
Lors de l'écriture de votre rapport de bug, essayez de donner le plus de détails possible.

<doc-alert type="info">
Lorsque vous créez une reproduction minimale, supprimez tous les éléments, propriétés, variables, données etc qui ne sont pas nécessaires pour reproduire le bug. Cela facilitera le traitement du rapport et le temps qu'il faudra pour identifier puis résoudre le bug.
</doc-alert>

## Demandes d'évolution

Si une fonctionnalité dont vous avez besoin dans l'un des packages du Design System n'est pas présente ou déjà planifiée, vous pouvez [créer une demande de nouvelle fonctionnalité](https://github.com/assurance-maladie-digital/design-system/issues/new?template=feature_request.md).

## Documentation

Pour modifier la documentation, vous pouvez simplement suivre le lien « Éditer cette page sur GitHub » présent en bas de page, celui-ci ouvrira l'éditeur en ligne de Github, vous permettant d'éditer directement la documentation, puis de créer une nouvelle branche afin de proposer vos modifications via une Pull Request.

## Développement

Notre Design System est un monorepo utilisant [lerna](https://github.com/lerna/lerna) qui rassemble notre librairie de composants, notre outil de création de projets ainsi que notre documentation et les composants plus macros, ce qui permet de réduire le coût de travailler sur plusieurs projets à la fois.

### Configuration de votre environnement

Vous devez installer les outils suivants :

- [Git](https://git-scm.com/) >v2.20
- [Node.js](https://nodejs.org/) LTS
- [Yarn](https://classic.yarnpkg.com/)

Certaines de nos dépendances ont besoin de [node-gyp](https://github.com/nodejs/node-gyp#installation) pour fonctionner. Vous n'avez pas besoin d'installer node-gyp directement, mais vous pouvez avoir besoin d'outils supplémentaires, en particulier sur Windows. Consultez la documentation de node-gyp pour plus de détails.

Une fois les outils installés, vous pouvez cloner le repo :

<doc-tabs code>
<doc-tab-item label="SSH">
```bash
git clone git@github.com:assurance-maladie-digital/design-system.git
```
</doc-tab-item>

<doc-tab-item label="HTTPS">
```bash
git clone https://github.com/assurance-maladie-digital/design-system.git
```
</doc-tab-item>
</doc-tabs>

Ensuite, vous pouvez installer les dépendances :

```bash
# Allez dans le dossier design-system
cd design-system

# Installez toutes les dépendances
yarn
```

Une fois l'installation des dépendances effectuée, vous êtes prêt à développer !

<doc-tabs namespace="package">
<doc-tab-item label="Documentation">

La documentation se trouve dans le dossier `packages/docs`, elle est construite en utilisant [Nuxt Content](https://content.nuxtjs.org/fr). Vous pouvez démarrer un serveur de développement en exécutant la commande `yarn dev` depuis le dossier `docs`.<br>
Par défaut, la documentation est disponible à l'adresse [http://localhost:3000](http://localhost:3000).

</doc-tab-item>

<doc-tab-item label="Vue Dot">

La librairie de composants Vue Dot se trouve dans le dossier `packages/vue-dot`. Vous pouvez démarrer un serveur de développement en exécutant la commande `yarn playground` depuis le dossier `vue-dot`.<br>
Par défaut, le playground est disponible à l'adresse [http://localhost:8080](http://localhost:8080).

Vous pouvez tester vos modifications en créant des exemples dans le dossier `playground/examples` et en les ajoutant dans le fichier `Playground.vue`.

</doc-tab-item>

<doc-tab-item label="Form Builder">

Les composants du FormBuilder se trouvent dans le dossier `packages/form-builder`. Vous pouvez démarrer un serveur de développement en exécutant la commande `yarn playground` depuis le dossier `form-builder`.<br>
Par défaut, le playground est disponible à l'adresse [http://localhost:8080](http://localhost:8080).

</doc-tab-item>

<doc-tab-item label="Vue Dash">

Le Starter Kit Vue Dash se trouve dans le dossier `packages/vue-cli-plugin-vue-dash`. C'est un [plugin Vue CLI](https://cli.vuejs.org/guide/plugins-and-presets.html) utilisé en combinaison avec un preset permettant la création de nouveaux projets.

Vous pouvez retrouver plus d'informations sur les plugins dans le [Guide de développement de plugins](https://cli.vuejs.org/dev-guide/plugin-dev.html) de Vue CLI.

Pour tester le plugin, vous pouvez créer un nouveau projet en clonant notre [preset Vue CLI](https://github.com/assurance-maladie-digital/vue-cli-preset), puis en spécifiant le chemin vers le plugin :

```json
"@cnamts/vue-cli-plugin-vue-dash": {
	"version": "/full/path/to/plugin/"
}
```

Et en exécutant ensuite la commande `vue create --preset /path/to/preset/ my-project` qui vous permet de créer un nouveau projet avec un preset local.

Vous pouvez également tester le plugin dans un projet existant en l'installant :

<doc-tabs code>
<doc-tab-item label="Yarn">
```bash
yarn add --dev file:/full/path/to/plugin
```
</doc-tab-item>

<doc-tab-item label="npm">
```bash
npm install --save-dev file:/full/path/to/plugin
```
</doc-tab-item>
</doc-tabs>

Puis en l'invoquant :

```bash
vue invoke @cnamts/vue-dash
```

Par défaut, lorsque le plugin est invoqué manuellement, il n'applique pas le template pour ne pas écraser les fichiers du projet, mais vous pouvez utiliser l'option `--render-template` pour l'appliquer :

```bash
vue invoke @cnamts/vue-dash -- --render-template
```

</doc-tab-item>

<doc-tab-item label="CLI Helpers">

La bibliothèque de fonctions d'aide pour la construction d'interfaces en lignes de commandes se trouve dans le dossier `packages/cli-helpers`. Les fonctions sont écrites en TypeScript et construites pour être utilisées dans un environnement [node.js](https://nodejs.org/).

Pour tester une fonction, vous pouvez transpiler la bibliothèque en exécutant la commande `yarn build` depuis le dossier `cli-helpers`, puis importer votre fonction depuis le package.

Vous pouvez également utiliser [ts-node](https://www.npmjs.com/package/ts-node) pour écrire votre script de test en TypeScript.

</doc-tab-item>
</doc-tabs>

### Commits

Les messages de commit doivent suivre la convention `<gitmoji> <scope>: <message>`, par exemple :

```bash
✨ vue-dot: Add DatePicker
```

```bash
🐛 vue-dash: Fix missing data-cy attributes
```

#### Règles générales

Les messages de commit doivent :

- Être écrits en Anglais
- Commencer avec un [Gitmoji](https://gitmoji.dev/) correspondant au type de changement
- Commencer avec une majuscule
- Ne pas terminer avec un point
- Utiliser le mode impératif
- Commencer avec un verbe (comme *Add*, *Fix*, *Update*, *Refactor*, …)

### Pull Requests

Pour créer une nouvelle branche et effectuer des modifications, vous pouvez faire une demande à l'équipe pour vous donner les droits d'écriture sur le projet, ou vous pouvez [créer un fork](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github/fork-a-repo) du repo `design-system`.

Et ensuite ajouter votre fork comme *remote* :

<doc-tabs code>
<doc-tab-item label="SSH">
```bash
git remote add fork git@github.com:USERNAME/design-system.git
```
</doc-tab-item>

<doc-tab-item label="HTTPS">
```bash
git remote add fork https://github.com/USERNAME/design-system.git
```
</doc-tab-item>
</doc-tabs>

Vous pouvez maintenant créer une nouvelle branche sur laquelle travailler, puis commiter vos changements et pousser votre branche en exécutant `git push -u` ou `git push -u fork` si vous avez créé un fork.

<doc-alert type="warning">
Vous ne devez jamais commiter directement sur la branche de base, mais toujours créer une feature branche sur laquelle travailler.
</doc-alert>

Enfin, vous pouvez [créer une Pull Request](https://github.com/assurance-maladie-digital/design-system/compare) en suivant et en complétant le template.

<doc-alert type="info">

Comme le projet est dans un cycle de versioning `beta`, vous devez utiliser la branche `dev` comme branche de base.

</doc-alert>
