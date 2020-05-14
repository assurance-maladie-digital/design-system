::: slot title
# CustomIcon
:::

::: slot description
L'élément `CustomIcon` est utilisé pour afficher un icon personaliser qui à été défini dans le theme de la config 'vue-dot'
Note : Certains icones peuvent ne pas prendre en compte la couleur (ex: vuejs)
:::

## Utilisation

<DocExample
  eager
  file="elements/custom-icon/examples/custom-icon"
/>

## API

<DocApi
  :value="['CustomIcon']"
  :api="{
    CustomIcon: {
      props: [{
        name: 'color',
        defaultValue: 'currentColor',
        type: 'string',
        description: 'Changer la couleur de l\'icône (n\'importe quelle valeur CSS). Par défaut, il est hérité de la propriété de couleur CSS.'
      },
      {
        name: 'small',
        defaultValue: 'false',
        type: 'boolean',
        description: 'Rendre l\'icône petite (1em).'
      },
      {
        name: 'medium',
        defaultValue: 'false',
        type: 'boolean',
        description: 'Rendre l\'icône moyen (1.5em).'
      },
      {
        name: 'large',
        defaultValue: 'false',
        type: 'boolean',
        description: 'Rendre l\'icône large (1.85em).'
      },
      {
        name: 'xlarge',
        defaultValue: 'false',
        type: 'boolean',
        description: 'Rendre l\'icône extra large (2.25em).'
      },
      {
        name: 'size',
        type: 'string',
        defaultValue: 'undefined',
        description: 'Appliquer une taille CSS personnalisée (largeur / hauteur) à l\'icône, par défaut, la taille est de 1,35em (entre petit et moyen).'
      }]
    }
  }"
/>

## Exemples

### Playground

<DocExample file="elements/custom-icon/examples/custom-icon-playground" />

### Slot

Utilisez le slot pour afficher un icon personaliser en dehors du theme défini dans 'vue-dot', celui ci ne prendra pas en compte les autres propriétés du composant.

<DocExample file="elements/custom-icon/examples/custom-icon-slot" />