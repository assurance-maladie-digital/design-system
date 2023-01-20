---
title: FooterWrapper
description: Le pattern `FooterWrapper` est utilisé avec le composant `FooterBtn` pour afficher un pied de page.
---

<doc-alert type="warning">

Ce composant est déprécié en faveur du composant [`FooterBar`](/composants/structure/footer-bar) depuis la [version 2.2.0](https://github.com/assurance-maladie-digital/design-system/releases/tag/v2.2.0) et sera supprimé dans la prochaine version majeure.

</doc-alert>

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-example file="footer-wrapper/usage"></doc-example>

### Exemples

#### Bouton inactif

Vous pouvez rendre un bouton inactif en utilisant la prop `inert`. Celui-ci sera alors désactivé et l’élément généré sera une `div`.

<doc-example file="footer-wrapper/inert"></doc-example>

#### Slot par défaut

Vous pouvez utiliser le slot par défaut pour ajouter du contenu.

<doc-example file="footer-wrapper/slot"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="footer-wrapper"></doc-api>
</doc-tab-item>

</doc-tabs>

<doc-sticky-button icon title="Vue d'ensemble" target="../../demarrer/vue-ensemble" :hidden="false"></doc-sticky-button>
