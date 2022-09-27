---
title: Gestion des droits
description: Utilisation de [vue-browser-acl](https://github.com/mblarsen/vue-browser-acl) pour gérer les droits des utilisateurs.
---

## Installation

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

```ts
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

```ts
const user = () => store.auth.user;
```

Dans le fichier main.ts, ajouter `vue-browser-acl` à la liste des plugins pré-installés.

```ts
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

```vue
<VBtn v-can:review>Review</VBtn>
```

```vue
<VBtn v-can:create="'Post'">New</VBtn>
```

```vue
<VBtn v-can:edit="'post'">Edit</VBtn>

// OU

<VBtn v-can:edit="post">Edit</VBtn>
```

```vue
<VBtn v-can:delete="[comment, post]">Delete</VBtn>
```

Il est possible d'utiliser la syntaxe de **chaine de caractères** et de **tableau**.

```vue
<VBtn v-can="'transfer repo'">Transfer repo instance</VBtn>
<VBtn v-can="'create Repo'">Transfer based on class</VBtn>

// OU

<VBtn
  v-can="['transfer', repo, otherArgs]"
>
Transfer with extra argument
</VBtn>
```

### Masquer un élément

Le modificateur de masquage `v-can.hide` surprime le composant du DOM dans le cas ou l'utilisateur n'a pas la bonne permission.

```vue
<VBtn v-can.hide="'delete post'">Delete</VBtn>
```
