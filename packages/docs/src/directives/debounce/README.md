::: slot title
# Debounce
:::

::: slot description
La directive `v-debounce` est utilisée pour différer une mise à jour de `v-model` sur un champ de formulaire.
:::

## Utilisation

Entrez du texte dans le champ ci-dessous, après une seconde de délai lorsque vous aurez fini d'écrire, la valeur se mettra à jour.

<DocExample
  eager
  file="directives/debounce/examples/debounce"
/>

<DocInfo>

Avec les composants, il n'est pas possible d'utiliser la syntaxe `v-model.lazy`.

La solution de contournement consiste à implémenter manuellement ce comportement en appliquant la valeur avec `:value="search"` et à mettre à jour celle-ci avec une fonction comme `@change="e => search = e"`.

Vous pouvez consulter [l'issue associée](https://github.com/vuejs/vue/issues/6914) sur le projet Vue.js pour plus d'informations.

</DocInfo>

## API

<DocApi
  :value="['v-debounce']"
  :api="{
    'v-debounce': {
      options: [
        {
          name: 'value',
          type: 'function',
          default: 'undefined',
          description: 'Fonction exécutée après le délai. Par défaut un évènement `change` sera émit.'
        },
        {
          name: 'arg:time',
          type: 'number',
          default: '500',
          description: 'Nombre de millisecondes à attendre avant d\'appeler la fonction `value` ou d\'émettre un événement.'
        }
      ]
    }
  }"
/>

## Exemples

### Modification du délai

En utilisant un modificateur, il est possible de régler le délai d'exécution.

<DocExample file="directives/debounce/examples/debounce-arg" />

### Champs de formulaires natifs

Les champs de formulaires natifs sont également supportés.

<DocExample file="directives/debounce/examples/debounce-native" />
