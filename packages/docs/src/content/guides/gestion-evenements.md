---
title: Gestion des évenements
description: Création et utilisation des évenements entre des composants parent/enfant.
---

## Création depuis le composant enfant

Il est parfois nécessaire qu’un composant enfant remonte des données au composant parent. Pour cela, on utilise les évenements. On utilise la fonction `this.$emit` depuis le composant enfant pour lancer un évenement.

Le premier argument de la fonction sera le nom de l’évenement et le second sera la valeur remontées dan l’évenement (texte, nombre, objet, etc.).

```vue
  this.$emit('change', 'value');
```

## Récupération depuis le composant parent

Pour attraper un évenement lancé depuis un composant enfant, il faut ajouter une directive du type [`v-on`](https://vuejs.org/v2/api/#v-on) du nom de l’évenement sur le composant enfant. Il est attendu une fonction qui recevra en argument les données émises par le composant enfant dans l’évenement.

Par exemple, définissons un composant enfant qui contient un formulaire avec un champs de saisie d’un texte, on veut qu’à chaque modification dans la saisie de ce champs, le composant enfant émette un évenement pour envoyer le texte saisi vers le composant parent pour qu’il puisse l’afficher.

Le composant enfant :

```vue
<template>
  <div>
    <VTextField
      v-model="value"
      class="vd-form-input"
      label="Texte"
      @change="emitChangeEvent"
    />
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class ComposantEnfant extends Vue {
    text: string | null = null;

    emitChangeEvent(): void {
      this.$emit('text-change', this.text);
    }
  }
</script>

```

<doc-alert type="info">
Le nom de l’évenement doit être en kebab-case.
</doc-alert>

L’évenement s’appelle donc `text-change`, c’est sur cet évenement qu’il faut récupérer dans le composant parent. Pour récupérer l’évenement, on ajoute une directive nommée `text-change`.

Le composant parent :

```vue
<template>
  <div>
    <ComposantEnfant @text-change="onTextChange" />

    <p v-if="text">{{ text }}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Component from 'vue-class-component';

  @Component
  export default class ComposantParent extends Vue {
    text: string | null = null;

    onTextChange(text: string): void {
      this.text = text;
    }
  }
</script>

```
