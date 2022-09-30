---
title: Gestion des droits
description: Utilisation de [vue-browser-acl](https://github.com/mblarsen/vue-browser-acl) pour gérer les droits des utilisateurs.
---

## Installation

Pour l’ajouter dans votre projet, vous devez l’installer :

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

Ensuite, vous devez créer un fichier `vue-browser-acl.ts` dans le dossier `src/plugins` et y ajouter le code suivant :

```ts
import Vue from 'vue';
import Acl from 'browser-acl';
import VueAcl from 'vue-browser-acl';

function getPermissions(acl: Acl) {
	// Gestion des permissions
}

Vue.use(VueAcl, user, (acl: Acl) => getPermissions(acl));
```

Finalement, vous devez importer le fichier plugin dans le fichier `main.ts` :

```ts
import './plugins/vue-browser-acl';
```

## Configuration

### Récupération de l’utilisateur

Pour récupérer l’utilisateur, vous pouvez le stocker dans le [store](/guides/utilisation-store), et le récupérer de manière asynchrone :

```ts
// vue-browser-acl.ts
const user = () => store.state.auth.user as User;
```

### Définition des règles

Pour définir les différentes règles, vous devez utiliser la fonction [`acl.rule()`](https://github.com/mblarsen/browser-acl#rule) :

```ts
// vue-browser-acl.ts
interface User {
	firstname: string;
	lastname: string;
	roles: string[];
	folderPermissions: string[];
}

// Utilisation d'une énumération afin de faciliter la maintenance
enum RolesEnum {
	AGENT = 'AGENT',
	ADMIN = 'ADMIN'
}

const user = () => store.state.auth.user as User;

// Création d'une fonction que l'on peut extraire du fichier
function getPermissions(acl: Acl): void {
	// Fonctions utilitaires pour simplifier l'écriture des tests
	const checkIfAgent = (user: User) => user.roles.includes(RolesEnum.AGENT);
	const checkIfAdmin = (user: User) => user.roles.includes(RolesEnum.ADMIN);

	// Les règles sont nommées avec des verbes
	// Par exemple "can see home" ou "can administrate"
	acl.rule('see-home', (user?: User) => Boolean(user));

	acl.rule('see-folder', (user?: User) => {
		return user && (checkIfAgent(user) || checkIfAdmin(user));
	});

	acl.rule('administrate', (user?: User) => {
		return user && checkIfAdmin(user);
	});
}

Vue.use(VueAcl, user, (acl: Acl) => getPermissions(acl));
```

### Sujet

Vous pouvez spécifier un sujet qui vous permettra de passer une valeur supplémentaire en paramètre à la règle, comme par exemple l’identifiant d’un dossier :

```ts
function getPermissions(acl: Acl): void {
	const checkIfAgent = (user: User) => user.roles.includes(RolesEnum.AGENT);
	const checkRolesForFolder = (user: User, folderId: string) => user.folderPermissions.includes(folderId);

	acl.rule('see-folder', 'folderId', (user?: User, folderId: string) => {
		return user && (checkIfAgent(user) || checkRolesForFolder(user, folderId));
	});
}
```

## Utilisation des règles

### Directive

Vous pouvez afficher des éléments de manière conditionnelle en utilisant la directive `v-can` :

```vue
<VBtn v-can:administrate>
	Éditer
</VBtn>
```

Vous pouvez également utiliser des modificateurs comme `.not`, qui permet d’inverser la condition.

Si votre règle contient un sujet, vous pouvez passer la valeur en paramètre de la directive :

```vue
<VBtn v-can:administrate="folderId">
	Éditer le dossier {{ folderId }}
</VBtn>
```

Pour plus d’informations sur les modificateurs, vous pouvez consulter la [documentation de vue-browser-acl](https://github.com/mblarsen/vue-browser-acl#usage).

### Fonction utilitaire

Pour vérifier les permissions de l’utilisateur en dehors du template d’un composant, vous pouvez utiliser la fonction utilitaire `$can` :

```ts
if (this.$can('see-folder')) {
	this.getFolder();
}
```

### Vue Router

Vous pouvez spécifier les permissions nécessaires pour afficher une page en utilisant la propriété `can` dans la configuration de vos routes :

```ts
{
	path: '/dossier/:id',
	name: 'folder',
	component: () => import(
		/* webpackChunkName: "folder" */
		'@/views/FolderPage.vue'
	),
	meta: {
		can: 'see-folder',
		fail: '/unauthorized'
	}
}
```

#### Redirection en cas d’erreur

Vous pouvez spécifier la page sur laquelle l’utilisateur sera redirigé s’il n’a pas les bonnes permissions en utilisant la propriété `failRoute` :

```ts
Vue.use(Acl, user, (acl: Acl) => getPermissions(acl), {
	router,
	failRoute: {
		name: 'unauthorized',
		replace: true
	}
});
```

Vous pouvez également configurer une page de redirection spécifique pour certaines routes :

```ts
meta: {
	can: 'see-folder',
	fail: '/unauthorized'
}
```

<doc-alert type="info">

Vous pouvez utiliser la valeur `$from` pour rediriger l’utilisateur sur la page dont il venait.

</doc-alert>
