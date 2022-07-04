---
title: FooterBar
description: Le pattern `FooterBar` est utilisé pour afficher un pied de page.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

#### Mode simplifié

Par défaut le footer est en mode simplifié.

<doc-usage name="footer-bar" class="mb-0"></doc-usage>

#### Mode complexe

Activer le mode complexe en ajoutant l'option `complex-mode`.
Par default un slot le mode complexe propose un slot unique dans sa partie centrale.

<doc-example file="footer-bar/slots"></doc-example>

#### Réseaux sociaux

Vous pouvez personnaliser la liste des réseaux sociaux via l'otion `custom-socials-list`.
Il faut pour cela transmettre au composant un tableau d'objets composés d'une icone et d'un lien.

<doc-example file="footer-bar/socials"></doc-example>

#### Personnalisation du logo par défaut

Les option du composant logo sont accessible depuis le footer.
Il est dont possible d'utiliser `logo-hide-signature`, `logo-hide-organism` et `logo-risque-pro` pour personnaliser le logo de l'assurance maladie.

<doc-example file="footer-bar/logo"></doc-example>

#### Masquer ou remplacer une partie

Le logo et les réseaux sociaux peuvent être supprimer en utilisant les options `hide-logo` ou `hide-socials`.
La partie centrale peut être masquée en mettant `0` au nombre de slot de cette manière : `:centerSlotsNumber="0"`.

<doc-example file="footer-bar/remove-logo-socials"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">

<doc-alert type="info">

Les propriétés non définies dans la section API seront reportées directement sur le composant `VFooter`.

</doc-alert>

<doc-api name="footer-bar"></doc-api>
</doc-tab-item>

<doc-tab-item label="Personnalisation">

### Composants Vuetify

Vous pouvez personnaliser les composants Vuetify contenus dans le pattern `FooterBar` en utilisant la prop `vuetify-options`.

<doc-example file="footer-bar/options"></doc-example>

### Slots

Vous pouvez utiliser le slot `default` pour ajouter du contenu dans la partie centrale du footer.

<doc-example file="footer-bar/slots"></doc-example>

#### Slots multiples

Vous pouvez séparer le slot principal en plusieurs slots grâce à l'option `centerSlotsNumber`.
Les templates sont accessibles en ajoutant leur numéro au préfixe `#center-slot-`.

<doc-example file="footer-bar/multiple-slots"></doc-example>

#### Slots logo et réseaux sociaux

Vous pouvez remplacer le logo et les réseaux sociaux grâce aux slots `logo` et `socials`.

<doc-example file="footer-bar/slots-logo-socials"></doc-example>

</doc-tab-item>

</doc-tabs>
