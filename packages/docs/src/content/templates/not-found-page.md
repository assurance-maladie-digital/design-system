---
title: NotFoundPage
description: Le template `NotFoundPage` est utilisé pour afficher une page d’erreur lors d’une erreur 404.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="not-found-page"></doc-usage>

### Exemples

#### ID de support

Lorsque le paramètre `support_id` est présent dans l’URL, celui-ci sera affiché afin que l’utilisateur puisse communiquer cet identifiant au support pour analyse.

<doc-alert type="info">
Cet identifiant de support est ajouté automatiquement par notre pare-feu, il a une longueur de 19 caractères.
</doc-alert>

<doc-example file="not-found-page/support-id"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="not-found-page"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Slots

Vous pouvez utiliser le slot `illustration` pour modifier l’image d’illustration par défaut.

<doc-example file="not-found-page/slots"></doc-example>

</doc-tab-item>

</doc-tabs>

<doc-sticky-button icon="view-dashboard" title="Vue d'ensemble" target="../../demarrer/vue-ensemble"></doc-sticky-button>
