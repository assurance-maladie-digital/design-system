---
title: Gestion des droits
description: Utilisation de vue-navigateur-acl pour gérer les droits des utilisateurs.
---

Nous utilisons [vue-navigateur-acl](https://github.com/mblarsen/vue-browser-acl), une librairie qui permet de gérer facilement les autorisations des utilisateurs.

### Installation

```bash
npm i vue-browser-acl
```

Créer un fichier `vue-browser-acl.ts` dans le dossier plugin et copier s'y ceci :

```js
import Vue from 'vue';
import Acl from 'vue-browser-acl';

// Récuperer l'utilisateur
const user = window.__INITIAL_STATE__.user;

// Liste des régles
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

### Modificateurs

Le modificateur de masquage `v-can.hide` surprime le composant du DOM dans le cas ou l'utilisateur n'a pas la bonne permission.

```js
<VButton v-can.hide="'delete post'">Delete</VButton>
```

Le modificateur de désactivation `v-can.disable` permet de désactiver un composant que l'utilisateur n'est pas autorisé à utiliser.

```js
<VButton v-can.disable="'delete post'">Delete</VButton>
```

Le modificateur de lecture seule applique l'attribut `readonly` à la balise si vous n'avez pas les droits pour l'édition.

```js
<input v-can:edit.readonly="post" type="text" name="title" />
```

Les arguments `some` et `every` prennent plusieurs objets verbes et appliqueront le même verbe à chacun d'eux.

```js
<table v-can.some="['edit', players]">
  <VButton v-can:sell.every="players">Sell team</VButton>
  <VButton v-can:delete.some="[project, sprintBoard]">Delete</VButton>
</table>
```

Modificateur globaux

Le modificateur global indique explicitement au plugin que vous entendez traiter une règle globale.

```js
<!-- implicit -->
<VButton v-can:review>Review</VButton>
<VButton v-can="'review'">Review</VButton>

<!-- explicit -->
<VButton v-can="`review ${GlobalRule}`">Review</VButton>
<VButton v-can.global="'review'">Review</VButton>
```

### Assistant

Vous pouvez également utiliser la fonction d'assistance $canqui fonctionne à peu près de la même manière :

```js
<settings-table :editable="$can('update', 'Setting')" :settings="settings" />
```

Ou

```js
if (this.$can('edit', post)) {
	axios.put(`/api/posts/${post.id}`, post);
}
```

Vous pouvez annuler $canavec `$can.not`.

Si vous ne souhaitez pas installer la fonction d'assistance, passez `helper: false` dans les options.

### Vue-routeur

Il y a deux façons de brancher le vue-router. Soit lors de la configuration de l'Acl, soit en appelant ultérieurement la fonction d'initialisation du routeur.

#### Option 1 : configuration

```js
Vue.use(Acl, user, (acl) => {
    ..
}, {router});
```

#### Option 2 : fonction d'initialisation

```js
acl.router(router);
```

Vous configurez les itinéraires en ajoutant une propriété `meta.can` à l'itinéraire. Par exemple, si un routeur nécessite des autorisations de création pour "Post":

```js
{
  name: 'new-post',
  path: 'posts/create',
  component: PostEditor,
  meta: {
    can: 'create Post',
    fail: '/posts'
  }
}
```

Limitation : contrairement à la directive et à l'assistant, vous n'aurez pas accès aux instances de classe.
Par exemple, vous ne pouvez pas utiliser un `can: 'delete post'` car cela suppose que vous avez déjà une instance `Post`.

`role` est synonyme de `can`. Donc, si vous avez des règles qui ressemblent davantage à des rôles, vous pouvez les utiliser à la place. Par exemple `role: 'admin'`.

L'évaluation asynchrone est possible en fournissant un rappel qui renvoie une promesse comme celle-ci :

```js
{
  path: 'posts/:postId',
  component: PostEditor,
  meta: {
    can: function (to, from, can) {
      return axios.get(/* fetch post async */)
        .then({post} => can('delete', post))
    },
    fail: '/posts'
  }
}
```

Normalement, il serait préférable d'empêcher cette route d'être visitée. Le backend peut également effectuer une redirection. Cela dit, vous avez la possibilité de le faire de cette manière.

#### Route d'échec par défaut

Par défaut, si vous omettez la propriété `fail` de `meta`, une vérification échouée redirigera vers `/`. Vous pouvez modifier ce comportement en définissant l'option `failRoute`.

Ceci est utile si vous utilisez la bibliothèque dans un flux d'authentification. Par exemple. en le définissant sur `/login`.

Vous pouvez également utiliser un objet pour avoir plus d'options :

```js
failRoute: {path: '/login': replace: true}
```

#### $from

Vous pouvez définir la `failRoute` sur la valeur spéciale `$from` qui renverra l'utilisateur d'où il vient

### Règles globales

Vous pouvez également utiliser des règles globales dans vos routes.

```js
{
  path: 'village/:villageId',
  component: Pillager,
  meta: {
    can: 'pillage'
  }
}
```

En mode strict :

```js
import {GlobalRule} from 'browser-acl'
...
{
  path: 'village/:villageId',
  component: Pillager,
  meta: {
    can: `pillage ${GlobalRule}`
  }
}
```

Cependant, lorsque vous exécutez en mode strict, vous devez être explicite sur leur utilisation dans vos itinéraires.

### Options

#### assumeGlobal

`default: true`

Lorsque la valeur est `true`, vous pouvez utiliser des règles globales dans vos routes sans les marquer explicitement comme globales.

Remarque : En mode strict, cette option est désactivée. Vous pouvez remplacer cela en définissant explicitement `assumeGlobal` sur `true`.

#### acl

`default: {}`

Les options de l'objet sont transmises au constructeur Acl.

#### caseMode

Supposer que la casse signifie qu'un objet-verbe en majuscule est le nom d'une classe ou d'une fonction constructeur et qu'un objet-verbe en minuscule est le nom du membre composant d'une instance de cette classe.

Par exemple, si l'object-verbe est `post`, la directive essaiera de rechercher la publication du membre de données sur le composant.

Si `caseMode` est défini sur `false`, ce comportement est désactivé et `post` sera traité comme un nom d'objet-verbe.

#### directives

`default: can`

Le nom de la directive : Par exemple, `can` produit une directive appelée `v-can` et une fonction d'assistance appelée `$can`.

Vous ne l'utiliserez probablement que si vous souhaitez remplacer ce module par un module existant qui utilise un nom différent.

#### failRoute

`default: /`

#### helper

`default: true`

Ajoute les fonctions d'assistance `$can`, `$can.not`, `$can.some` et `$can.every` au prototype Vue lorsque `true`.

#### router

`default: undefined`

Transmettez une instance de routeur si vous souhaitez utiliser la fonctionnalité ACL dans les routeurs.

#### strict

`default: false`

Lorsqu'il est défini sur true, un itinéraire sans `meta.can` échouera automatiquement. De plus, le paramètre se répercutera sur les paramètres **Acl**, ce qui les rendra équivalents :

```js
Vue.use(Acl, user, acl => {...}, {strict: true}}
Vue.use(Acl, user, acl => {...}, {strict: true, acl: {strict: true}}
```

Vous pouvez remplacer ce comportement comme ceci :

```js
Vue.use(Acl, user, acl => {...}, {strict: true, acl: {strict: false}}
```

## Définir de nouvelles règles

La personnalisation des règles se fait via une autre librairie : browser-acl

#### installer

```bash
npm i browser-acl
```

Créer un fichier `browser-acl.ts` dans le dossier plugin et copier s'y ceci :

```js
import Acl from 'browser-acl';
const acl = new Acl();

acl.rule('view', Post);
acl.rule('moderate', Post, (user) => user.isModerator());
acl.rule(['edit', 'delete'], Post, (user, post) => post.userId === user.id);
acl.rule('purgeInactive', (user) => user.isAdmin);
```

Dans le fichier main.ts, ajouter `browser-acl` à la liste des plugins pré-installés.

```js
// Import plugins
import { vuetify } from './plugins/vuetify';
import './plugins/vue-dot';
import './plugins/form-builder';
import './plugins/webfontloader';

// Vue Browser ACL & Browser ACL
import './plugins/vue-browser-acl';
import './plugins/browser-acl';
```

Les stratégies (règles via des objets ou des classes) sont également prises en charge :

```js
// using an object
acl.policy({
  view: true,
  edit: (user, post) => post.userId === user.id),
}, Post)

// using a class
acl.policy(OrganizationPolicy, Organization)
```

Remarque : les stratégies ont priorité sur les règles.

### Usage

```js
// true if user owns post
acl.can(user, 'edit', post);

// true if user owns at least posts
acl.some(user, 'edit', posts);

// true if user owns all posts
acl.every(user, 'edit', posts);
```

Vous pouvez ajouter des mixins à votre classe d'utilisateur :

```js
acl.mixin(User); // class not instance

user.can('edit', post);
user.can.some('edit', posts);
user.can.every('edit', posts);
```

### Mapping des objets-verbe

Un objet verb est un élément, un objet, une instance d'une classe.

```js
class Post {}
const post = new Post();
post.constructor.name; // The verb object is: Post
```

Étant donné que les minificateurs de code renommeront les fonctions, vous devez vous assurer que vous ne comptez que sur la fonction pour configurer vos règles et demander la permission.

```js
acl.rule('edit', 'Post', ...)
acl.can(user, 'edit', 'Post')  👍 works as expected
acl.can(user, 'edit', Post)    👎 'Post' isn't the name as you'd expect
acl.can(user, 'edit', post)    👎 same story here
```

Si votre processus de construction minimise votre code (en particulier la modification des noms de fonctions et de classes), cela se cassera à la ligne 3 puisque le constructeur de post ne sera probablement pas Post mais plutôt une seule lettre ou un nom préfixé par `__WEBPACK_IMPORTED_MODULE`.

```bash
- acl.rule('edit', 'Post', ...)
+ acl.rule('edit', Post, ...)
  acl.can(user, 'edit', 'Post')  👍 works as expected
  acl.can(user, 'edit', Post)    👍 and so does this
  acl.can(user, 'edit', post)    👍 this too, but see below
```

Passer la classe ou la fonction, `Post` et quel que soit ce nom après minification, est utilisé pour enregistrer les règles. Tant que la même importation est utilisée dans votre base de code, cela fonctionnera et vous n'aurez pas besoin d'enregistrer explicitement un modèle.

### Paramètres supplémentaires et règles globales

Vous pouvez définir des règles globales en omettant l'objet verbe lors de la définition des règles.

```js
acl.rule('purgeInactive', (user) => user.admin);
acl.can(user, 'purgeInactive');
```

Vous pouvez également passer des paramètres supplémentaires au gestionnaire comme ceci :

```js
acl.rule('edit', Post, (user, post, verb, additionalParameter) => true);
acl.can(user, 'edit', post, additionalParameter);
```

Cependant, vous ne pouvez pas combiner les deux sans indiquer explicitement que vous définissez une règle globale. Pour ce faire, importez `GlobalRule` de cette manière :

```js
import { GlobalRule } from 'browser-acl';
acl.rule('purgeInactive', GlobalRule, (user) => user.admin);
acl.can(user, 'purgeInactive', GlobalRule, additionalParameter);
```

Remarque : lors de la définition de la règle, vous pouvez l'omettre, mais elle est obligatoire pour `can`.

### LCA

Vous ajoutez des règles en fournissant un verbe, un objet verb et un test facultatif (qui sinon est vrai par défaut).

Si le test est une fonction, il sera évalué avec les paramètres : user, verb object et verbObjectName. La valeur de test est finalement évaluée pour sa véracité.

Exemples:

```js
acl.rule('create', Post);
acl.rule('edit', Post, (user, post) => post.userId === user.id);
acl.rule(
	'edit',
	Post,
	(user, post, verb, additionalParameter, secondAdditionalParameter) => true
);
acl.rule('delete', Post, false); // deleting disabled
acl.rule('purgeInactive', (user) => user.isAdmin); // global rule
```

#### Can

Effectue un test si un utilisateur peut effectuer une action sur l'objet verbe.

L'action est un verbe et l'objet verb peut être tout ce que verbObjectMapper peut mapper à un nom d'objet verb.

Par exemple, si vous pouvez tester si un utilisateur peut supprimer un message, vous passerez le message réel. Là où, comme si vous nous testiez, un utilisateur peut créer un message, vous passeriez la fonction de classe ou une chaîne.

```js
acl.can(user, 'create', Post);
acl.can(user, 'edit', post);
acl.can(user, 'edit', post, additionalParameter, secondAdditionalParameter);
```

Notez que ceux-ci sont également disponibles sur l'utilisateur si vous avez utilisé le mixin :

```js
user.can('create', Post);
user.can('edit', post);
```

Paramètres :

`user` : **Objet**<br/>
`verb` : **Chaîne de caractères**<br/>
`verbObject` : ( **Fonction** | **Objet** | **Chaîne de caractères** )<br/>
`args` : Tout autre paramètre est passé dans la règle

Renvoie n'importe quel booléen

#### Some

Comme can mais verb object est un tableau où seuls certains doivent être vrais pour que la règle corresponde.

Notez que les objets verbaux n'ont pas besoin d'être du même genre.

Paramètres :

`user` : **Objet**<br/>
`verb`<br/>
`verbObjects` : **Tableau** <( **Fonction** | **Objet** | **chaîne** )><br/>
`args` : Tout autre paramètre est passé dans la règle

#### Every

Comme can mais verb object est un tableau où tout doit être vrai pour que la règle corresponde.

Notez que les objets verbaux n'ont pas besoin d'être du même genre.

Paramètres :

`user` **Objet**<br/>
`verb`<br/>
`verbObjects` **Tableau** <( **Fonction** | **Objet** | **chaîne** )><br/>
`args` : Tout autre paramètre est passé dans la règle

Renvoie n'importe quel booléen

Mixin :

La Mixin augmente votre classe d'utilisateurs avec un `can` objet de fonction. Ceci est facultatif et vous pouvez toujours appeler `can` directement votre instance **Acl**.

```js
user.can();
user.can.some();
user.can.every();
```

Paramètres :

`User` **Fonction** Une classe d'utilisateurs ou une fonction de constructeur

#### verbObjectMapper

Les règles sont regroupées par objets-verbes et ce mappeur par défaut tente de mapper toute entrée non fausse à un nom d'objet verbe.

Ceci est important lorsque vous voulez essayer un verbe sur une règle passant dans une instance d'une classe.

- les chaînes deviennent des objets verbaux<br/>
- les noms de fonction sont utilisés pour l'objet verb<br/>
- le nom du constructeur de l'objet est utilisé pour l'objet verbe<br/>

Remplacez cette fonction si vos modèles ne correspondent pas à cette approche.

Par exemple, supposons que vous utilisez des objets de données simples avec une propriété type pour indiquer le type de l'objet.

```js
acl.verbObjectMapper = (s) => (typeof s === 'string' ? s : s.type);
```

`can` utilisera désormais cette fonction lorsque vous transmettez vos objets.

```js
acl.rule('edit', 'book', (user, book) => user.id === book.authorId);
const thing = { title: 'The Silmarillion', authorId: 1, type: 'book' };
acl.can(user, 'edit', thing);
```

Paramètres :

`verbObject` ( **Fonction** | **Objet** | **chaîne de caractères** )
Renvoie un objet verbe **Chaîne de caractères**.

#### reset

Supprime toutes les règles, politiques et inscriptions

#### removeRules

Supprimer les règles pour l'objet verbal

Limitez éventuellement à un seul verbe.

Paramètres :

`verbObject` ( **Fonction** | **Objet** | **chaîne de caractères** )
`verb` **chaîne de caractères?** un verbe optionnel (optionnel, par défaut `null`)

Returns **Acl**

#### removeAll

Méthode pratique pour supprimer toutes les règles et politiques d'un objet verbe

Paramètres :

`verbObject` ( **Fonction** | **Objet** | **chaîne de caractères** )
