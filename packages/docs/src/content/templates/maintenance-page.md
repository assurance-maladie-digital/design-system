---
title: MaintenancePage
description: Le template `MaintenancePage` est utilisé pour afficher une page de maintenance.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="maintenance-page"></doc-usage>

### Exemples

#### Illustration

Vous pouvez afficher une image d'illustration en utilisant mettant prop `image` à `true`.

<doc-example file="maintenance-page/image"></doc-example>

#### ID de support

Lorsque le paramètre `support_id` est présent dans l’URL, celui-ci sera affiché afin que l’utilisateur puisse communiquer cet identifiant au support pour analyse.

<doc-alert type="info">
Cet identifiant de support est ajouté automatiquement par notre pare-feu, il a une longueur de 19 caractères.
</doc-alert>

<doc-example file="maintenance-page/support-id"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="maintenance-page"></doc-api>
</doc-tab-item>

</doc-tabs>
