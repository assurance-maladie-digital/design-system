---
title: NotificationBar
description: Le pattern `NotificationBar` est utilisé avec le module Vuex `notification` pour afficher des notifications à l’utilisateur.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="notification-bar/usage"></doc-example>

<doc-alert type="info">

Il est conseillé de n’avoir qu’un seul composant `NotificationBar` par page, car leur affichage est contrôlé par le module `notification`.<br>
Cependant, il est possible d’ajouter un identifiant sur les notifications et de n’afficher que la notification de l’instance correspondante, c’est ce qui est fait dans les exemples de cette page.

</doc-alert>

### Exemples

#### Types de notification

Vous pouvez envoyer des notifications de types *succès*, *erreur*, *avertissement* ou *information*.

<doc-example file="notification-bar/types"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="notification-bar"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

#### Texte du bouton

Vous pouvez modifier le texte par défaut du bouton *Fermer* en utilisant la prop `close-btn-text`.

<doc-example file="notification-bar/label"></doc-example>

#### Divider

Vous pouvez ajouter un divider entre le contenu de la notification et les boutons en utilisant la prop `divider`.

<doc-example file="notification-bar/divider"></doc-example>

### Slot

Vous pouvez utiliser le slot `actions` pour remplacer le bouton d’action par défaut ou en ajouter d'autres.

<doc-example file="notification-bar/slot"></doc-example>

#### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans le pattern `NotificationBar` en utilisant la prop `vuetify-options`.

<doc-example file="notification-bar/options"></doc-example>

</doc-tab-item>

</doc-tabs>
