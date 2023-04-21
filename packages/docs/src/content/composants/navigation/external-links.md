---
title: ExternalLinks
description: L’élément `ExternalLinks` est utilisé pour afficher un menu avec une liste vers des liens externes.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="external-links"></doc-usage>

### Exemples

#### Décalage

Vous pouvez décaler le composant vers le haut ou vers le bas en utilisant les props `nudge-top` et `nude-bottom`.

<doc-example file="external-links/nudge-top"></doc-example>

#### Pas de données

Lorsqu’il n’y a pas de données, un message par défaut est affiché.

<doc-example file="external-links/no-data"></doc-example>

#### Texte du bouton

Vous pouvez modifier le texte par défaut du bouton en utilisant la prop `btn-text`.

<doc-example file="external-links/btn-text"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="external-links"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans l’élément `ExternalLinks` en utilisant la prop `vuetify-options`.

<doc-example file="external-links/options"></doc-example>

### Slots

Vous pouvez utiliser le slot `link-icon` pour remplacer l’icône dans les liens.

<doc-example file="external-links/slots"></doc-example>

</doc-tab-item>

</doc-tabs>
