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

Vous pouvez afficher une image d'illustration en utilisant mettant prop `image` à `true`.<br/>
L'image peux être personnalisée en utilisant la prop `imageSrc` pour spécifier l'URL de l'image.

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

</doc-tabs>
