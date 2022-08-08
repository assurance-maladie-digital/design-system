---
title: Notifications
description: Module de notification
---

Le module de notification sert à gérer les notifications depuis l'ensemble des composants du design system.

<doc-tabs>

<doc-tab-item label="Utilisation">

### Import

Pour commencer, il faut importer `NotificationObj` et `NotificationTypes` qui nous servira pour appeler la notification.

```js
import { NotificationObj } from '../../modules/notification/types';
import { NotificationTypes } from '@cnamts/vue-dot/src/modules/notification/types';
```

### Emettre une notification

Pour émettre une notification, vous pouvez utiliser la fonction `addNotification()` de cette manière :

```js
addNotification!: (obj: NotificationObj) => void;

this.addNotification({
	ref: 'ref-exemple',
	// 'success' | 'error' | 'info' | 'warning'
	type: 'info',
	message: 'Exemple de notification.'
});
```

### Supprimer une notification

Pour supprimer une notification, vous pouvez utiliser la fonction `clearNotification()` de cette manière :

```js
clearNotification!: () => void;

this.clearNotification();
```

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="notifications"></doc-api>
</doc-tab-item>
