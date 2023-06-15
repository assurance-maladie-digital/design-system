---
title: FormBuilder
description: Le composant `FormBuilder` est utilisé pour afficher un questionnaire.
---

<doc-tabs>

<doc-tab-item label="Utilisation">

 <doc-alert type="warning" style="max-height: 250px; overflow-y: auto">

Le **FormBuilder** est une bibliothèque JavaScript qui permet de créer dynamiquement des formulaires à partir de définitions JSON. Les composants du FormBuilder sont particulièrement utiles dans les cas où vous avez besoin de **générer des formulaires de manière dynamique**, par exemple si vous avez un grand nombre de formulaires différents ou si vous souhaitez permettre à l'utilisateur de créer ses propres formulaires.

L'utilisation du FormBuilder peut être recommandée dans les cas suivants :

- Si vous avez besoin de générer des formulaires de manière dynamique **à partir de définitions JSON**.
- Si vous utilisez le **bundle PHP questionnaire-bundle**, qui fournit une intégration avec le FormBuilder pour créer des formulaires à partir de définitions JSON.
- Si vous avez besoin de **personnaliser facilement l'apparence et le comportement des formulaires**, par exemple en ajoutant des fonctionnalités telles que des champs de recherche ou des sélecteurs de date.

Cependant, il est important de noter que certaines fonctionnalités, telles que la validation côté client, ne sont pas implémentées dans le FormBuilder. Si vous avez besoin de ces fonctionnalités, il peut être préférable d'utiliser les composants de formulaire de Vuetify.

Les composants de formulaire de Vuetify sont des composants prêts à l'emploi qui permettent de créer des formulaires avec une validation côté client et des fonctionnalités avancées telles que des sélecteurs de date et des champs de recherche. Ils sont particulièrement utiles si vous avez besoin de créer des formulaires simples et standardisés, tels que des formulaires d'inscription ou de connexion.

En résumé, l'utilisation du FormBuilder peut être recommandée dans les cas où vous avez besoin de générer des formulaires de manière dynamique à partir de définitions JSON ou si vous avez besoin de personnaliser facilement l'apparence et le comportement des formulaires. Si vous avez besoin de fonctionnalités avancées telles que la validation côté client, il peut être préférable d'utiliser les composants de formulaire de Vuetify.

</doc-alert>

<doc-alert type="info">

Ce composant requiert l’installation de la librairie [FormBuilder](/demarrer/installation#composants/form-builder).

</doc-alert>

<doc-example file="form-builder/usage"></doc-example>

### Exemples

#### Événements

Vous pouvez écouter la mise à jour de la valeur d’un champ du formulaire en utilisant l’événement `change`, ainsi que la mise à jour de la valeur d’un champ dynamique (avec l’attribut `dynamic`) en utilisant l’événement `refresh`.

<doc-example file="form-builder/events"></doc-example>

</doc-tab-item>

<doc-tab-item label="API">
<doc-api name="form-builder"></doc-api>
</doc-tab-item>

</doc-tabs>
