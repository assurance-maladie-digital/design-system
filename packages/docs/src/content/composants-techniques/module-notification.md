---
title: Module de notification
description: Module Vuex pour afficher des notifications en utilisant le composant [NotificationBar](/composants/feedback/notification-bar).
---

<doc-tabs>

<doc-tab-item label="Utilisation">

### Import

Lorsque vous créez un nouveau projet, le module de notification est déjà importé dans le fichier `src/store/index.ts` :

```ts
import { notification } from '@cnamts/vue-dot/src/modules/notification';
```

### Affichage d’une notification

Pour émettre une notification, vous pouvez utiliser la fonction `addNotification()` de cette manière :

```vue
<template>
	<VBtn @click="sendNotification()"></VBtn>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { mapActions } from 'vuex';

@Component({
	methods: mapActions('notification', ['addNotification'])
})
export default class HomePage extends Vue {
	sendNotification(): void {
		this.addNotification({
			type: 'success',
			message: 'Exemple de notification'
		});
	}
}
</script>
```

### Suppression d’une notification

Vous pouvez utiliser la fonction `clearNotification()` pour supprimer la notification affichée :

```vue
<template>
	<VBtn @click="deleteNotification()"></VBtn>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

import { mapActions } from 'vuex';

@Component({
	methods: mapActions('notification', ['clearNotification'])
})
export default class HomePage extends Vue {
	deleteNotification(): void {
		this.clearNotification();
	}
}
</script>
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="notification-module"></doc-api>
</doc-tab-item>
