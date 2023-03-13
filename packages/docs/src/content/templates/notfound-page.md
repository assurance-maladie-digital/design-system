---
title: NotFoundPage
description: Le template `NotFoundPage` est utilisé pour afficher une page d'erreur.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="notfound-page"></doc-usage>

### Exemples

#### Code d’erreur

Vous pouvez afficher un code d’erreur HTTP en utilisant la prop `code`.

<doc-example file="notfound-page/code"></doc-example>

#### Illustration

Vous pouvez afficher une image d'illustration en utilisant mettant prop `image` à `true`.

<doc-example file="notfound-page/image"></doc-example>

#### ID de support

Lorsque le paramètre `support_id` est présent dans l’URL, celui-ci sera affiché afin que l’utilisateur puisse communiquer cet identifiant au support pour analyse.

<doc-alert type="info">
Cet identifiant de support est ajouté automatiquement par notre pare-feu, il a une longueur de 19 caractères.
</doc-alert>

<doc-example file="notfound-page/support-id"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="notfound-page"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Slots

Vous pouvez utiliser le slot `notfound-page-content` pour ajouter votre propre contenu sur la partie de droite.

<doc-example file="notfound-page/slots"></doc-example>

</doc-tab-item>

</doc-tabs>
