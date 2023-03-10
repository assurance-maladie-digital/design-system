---
title: FooterBar
description: Le pattern `FooterBar` est utilisé pour afficher un pied de page.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

<doc-usage name="footer-bar"></doc-usage>

### Exemples

#### Mode étendu

Vous pouvez ajouter du contenu dans le slot par défaut, cela activera le mode étendu qui affiche le logo de l’Assurance Maladie ainsi que la liste de ses réseaux sociaux.

<doc-example file="footer-bar/default-slot"></doc-example>

#### Masquer une partie

Vous pouvez masquer les réseaux sociaux ou le logo de l’Assurance Maladie en utilisant les props `hide-logo` ou `hide-social-media-links`.

<doc-example file="footer-bar/hide-social-media-links"></doc-example>

#### Mode sombre

Vous pouvez afficher le footer en mode sombre en utilisant la prop `dark`.

<doc-example file="footer-bar/dark"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">

<doc-alert type="info">

Les propriétés non définies dans la section API seront reportées directement sur le composant `VFooter`.

</doc-alert>

<doc-api name="footer-bar"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

#### Liste des réseaux sociaux

Vous pouvez personnaliser la liste des réseaux sociaux en utilisant la prop `social-media-links`.

<doc-example file="footer-bar/socialMediaLinks"></doc-example>

#### Liens externes

Vous pouvez changer les liens par défaut par des liens externes en utilisant les props `sitemap-external-link`, `cgu-external-link`, `cookies-external-link`, `legal-notice-external-link` et  `a11y-statement-external-link`.

<doc-example file="footer-bar/externalsLinks"></doc-example>

#### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans le pattern `FooterBar` en utilisant la prop `vuetify-options`.

<doc-example file="footer-bar/options"></doc-example>

#### Slots

Vous pouvez utiliser les slots `prepend` et `append` pour ajouter du contenu avant et après les liens du pied de page, ainsi que les slots `logo` et `social-media-links` pour remplacer le logo et la liste des réseaux sociaux.

<doc-example file="footer-bar/slots"></doc-example>

</doc-tab-item>

</doc-tabs>
