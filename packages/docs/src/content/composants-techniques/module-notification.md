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

Pour émettre une notification, vous pouvez utiliser la fonction `addNotification()` et la fonction `clearNotification()` pour supprimer la notification affichée.

<doc-example file="module-notification/usage"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="notification-module"></doc-api>
</doc-tab-item>
