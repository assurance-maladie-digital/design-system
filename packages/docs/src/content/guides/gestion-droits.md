---
title: Gestion des droits
description: Utilisation de vue-navigateur-acl pour gérer les droits des utilisateurs.
---

Nous utilisons [vue-navigateur-acl](https://github.com/mblarsen/vue-browser-acl), une librairie qui permet de gérer facilement les autorisations des utilisateurs.

### Installation

<doc-tabs code>
<doc-tab-item label="Yarn">
```bash
yarn add vue-browser-acl
```
</doc-tab-item>

<doc-tab-item label="npm">
```bash
npm install vue-browser-acl
```
</doc-tab-item>
</doc-tabs>

Créer un fichier `vue-browser-acl.ts` dans le dossier `src/plugins` et y ajouter le code suivant :

```js
import Vue from 'vue';
import Acl from 'vue-browser-acl';

// Récupérer l'utilisateur
const user = window.__INITIAL_STATE__.user;

// Liste des règles
Vue.use(Acl, user, (acl) => {
	acl.rule('view', Post);
	acl.rule(['edit', 'delete'], Post, (user, post) => post.userId === user.id);
	acl.rule('moderate', Post, (user) => user.isModerator());
});
```

Si l'utilisateur doit être récupérer depuis le back de manière asynchrone, vous pouvez utiliser une fonction de cette facon :

```js
const user = () => store.auth.user;
```

Dans le fichier main.ts, ajouter `vue-browser-acl` à la liste des plugins pré-installés.

```js
// Import plugins
import { vuetify } from './plugins/vuetify';
import './plugins/vue-dot';
import './plugins/form-builder';
import './plugins/webfontloader';

// Vue Browser ACL
import './plugins/vue-browser-acl';
```

### Utiliser les règles

Les règles sont utilisable grâce à la directive `v-can` comme dans les exemples suivants :

```js
<VButton v-can:review>Review</VButton>
```

```js
<VButton v-can:create="'Post'">New</VButton>
```

```js
<VButton v-can:edit="'post'">Edit</VButton>

// OU

<VButton v-can:edit="post">Edit</VButton>
```

```js
<VButton v-can:delete="[comment, post]">Delete</VButton>
```

Il est possible d'utiliser la syntaxe de **chaine de caractères** et de **tableau**.

```js
<VButton v-can="'transfer repo'">Transfer repo instance</VButton>
<VButton v-can="'create Repo'">Transfer based on class</VButton>

// OU

<VButton
  v-can="['transfer', repo, otherArgs]"
>
Transfer with extra argument
</VButton>
```

### Masquer un élément

Le modificateur de masquage `v-can.hide` surprime le composant du DOM dans le cas ou l'utilisateur n'a pas la bonne permission.

```js
<VButton v-can.hide="'delete post'">Delete</VButton>
```
