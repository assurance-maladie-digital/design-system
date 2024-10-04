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

<doc-example file="error-page/maintenance"></doc-example>

#### Page 404

Vous pouvez créer une page 404 en utilisant les props `no-btn` et `code`.

<doc-alert type="warning">

Cette utilisation du composant est dépréciée en faveur du composant [`NotFoundPage`](/templates/not-found-page) depuis la [version 2.9.0](https://github.com/assurance-maladie-digital/design-system/releases/tag/2.9.0) et sera supprimé dans la prochaine version majeure.

</doc-alert>

<doc-example file="error-page/not-found"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="error-page"></doc-api>
</doc-tab-item>

</doc-tabs>
