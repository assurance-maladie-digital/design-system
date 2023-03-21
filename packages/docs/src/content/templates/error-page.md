---
title: ErrorPage
description: Le template `ErrorPage` est utilisé pour afficher une page d’erreur.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="error-page"></doc-usage>

### Exemples

#### Page de maintenance

Vous pouvez créer une page de maintenance en masquant le bouton d’action en utilisant la prop `no-btn`.

<doc-alert type="warning">

Cette utilisation du composant est dépréciée en faveur du composant [`MaintenancePage`](/templates/maintenance-page) depuis la [version 2.9.0](https://github.com/assurance-maladie-digital/design-system/releases/tag/2.9.0) et sera supprimée dans la prochaine version majeure.

</doc-alert>

<doc-example file="error-page/no-btn"></doc-example>

#### Page 404 avec ID de support

Vous pouvez créer une page 404, et lorsque le paramètre `support_id` est présent dans l’URL, celui-ci sera affiché afin que l’utilisateur puisse communiquer cet identifiant au support pour analyse.

<doc-alert type="info">
Cet identifiant de support est ajouté automatiquement par notre pare-feu, il a une longueur de 19 caractères.
</doc-alert>

<doc-alert type="warning">

Cette utilisation du composant est dépréciée en faveur du composant [`NotFoundPage`](/templates/not-found-page) depuis la [version 2.9.0](https://github.com/assurance-maladie-digital/design-system/releases/tag/2.9.0) et sera supprimé dans la prochaine version majeure.

</doc-alert>

<doc-example file="error-page/support-id"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="error-page"></doc-api>
</doc-tab-item>

</doc-tabs>
