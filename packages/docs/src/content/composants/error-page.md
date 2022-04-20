---
title: ErrorPage
description: Le template `ErrorPage` est utilisé pour afficher une page d’erreur.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="error-page"></doc-usage>

## Exemples

### Code d’erreur

Vous pouvez afficher un code d’erreur HTTP en utilisant la prop `code`.

<doc-example file="error-page/code"></doc-example>

### Bouton d’action masqué

Vous pouvez masquer le bouton d’action en utilisant la prop `no-btn`.

<doc-example file="error-page/no-btn"></doc-example>

### ID de support

Lorsque le paramètre `support_id` est présent dans l’URL, celui-ci sera affiché afin que l’utilisateur puisse communiquer cet identifiant au support pour analyse.

<doc-alert type="info">
Cet identifiant de support est ajouté automatiquement par notre pare-feu, il a une longueur de 19 caractères.
</doc-alert>

<doc-example file="error-page/support-id"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="error-page"></doc-api>
</doc-tab-item>

</doc-tabs>
