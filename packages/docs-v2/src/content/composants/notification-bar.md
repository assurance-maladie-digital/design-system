---
title: NotificationBar
description: Le pattern `NotificationBar` est utilisé avec le module Vuex `notification` pour afficher des notifications à l'utilisateur.
position: 17
---

<doc-tabs light>

<doc-tab-item label="Utilisation">

<doc-alert type="info">

Il est conseillé de n'avoir qu'un seul composant `NotificationBar` par page, car leur affichage est contrôlé par le module `notification`.<br>
Cependant, il est possible d'ajouter une identifiant sur les notifications et de n'afficher que le composant correspondant, c'est ce que nous faisons dans les exemples ci-dessous.

</doc-alert>

## Exemples

### Type de notification

Vous pouvez envoyer des notifications de type *succès*, *erreur*, *avertissement* ou *information*.

<doc-example file="notification-bar/notification-bar-types"></doc-example>

### Texte du bouton

Vous pouvez modifier le texte par défaut du bouton *Fermer* en utilisant la prop `close-btn-text`.

<doc-example file="notification-bar/notification-bar-label"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="notification-bar"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans le pattern `NotificationBar` en utilisant la prop `vuetify-options`.

<doc-example file="notification-bar/notification-bar-options"></doc-example>

</doc-tab-item>

</doc-tabs>
