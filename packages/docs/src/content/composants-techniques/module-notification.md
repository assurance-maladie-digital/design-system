---
title: Notifications
description: Module de notification
---

Le module de notification sert à gérer les notifications depuis l'ensemble des composants du design system.

<doc-tabs>

<doc-tab-item label="Utilisation">

### Import

Le module de notification est déjà importé dans `src/store/index.ts` à la création du projet

```js
import { notification } from '@cnamts/vue-dot/src/modules/notification';
```

Pour commencer, il faut importer `NotificationObj` et `NotificationTypes` qui nous servira pour appeler la notification.

```js
import { NotificationObj } from '../../modules/notification/types';
import { NotificationTypes } from '@cnamts/vue-dot/src/modules/notification/types';
```

### Emettre une notification

Pour émettre une notification, vous pouvez utiliser la fonction `addNotification()` de cette manière :

```ts
<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

	@Component({
		methods: mapActions('notification', ['addNotification'])
	})
	export default class Home extends Vue {
		sendNotification(): void {
			this.addNotification({
				type: 'success',
				message: 'Exemple de notification'
			});
		}
	}
</script>
```

### Supprimer une notification

Pour supprimer une notification, vous pouvez utiliser la fonction `clearNotification()` de cette manière :

```js
<script lang="ts">
	import Vue from 'vue';
	import Component from 'vue-class-component';

	import { mapActions } from 'vuex';

	@Component({
		methods: mapActions('notification', ['clearNotification'])
	})
	export default class Home extends Vue {
		deleteNotification(): void {
			this.clearNotification();
		}
	}
</script>
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="notifications"></doc-api>
</doc-tab-item>
