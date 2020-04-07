::: slot title
# Délai
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

## API

<DocApi
  :value="['v-debounce']"
  :api="{
      options: [{
        name: 'value',
        defaultValue: 'undefined',
        type: 'function',
        description: 'Fonction exécutée après le délai. Par défaut un évènement `change` sera émit.'
      },
      {
        name: 'arg:time',
        defaultValue: '500',
        type: 'number',
        description: 'Nombre de millisecondes à attendre avant d\'appeler la fonction `value` ou d\'émettre un événement.'
      }]
    }"
/>

## Exemples

### Modification du délai

En utilisant un modificateur, il est possible de régler le délai d'exécution.

<DocExample file="directives/debounce/examples/debounce-arg" />


### Champs de formulaires natifs

Bien que hors du Design System, les champs de formulaires natifs sont également supportés.

<DocExample file="directives/debounce/examples/debounce-native" />
