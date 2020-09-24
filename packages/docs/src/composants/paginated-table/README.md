::: slot title
# PaginatedTable
:::

::: slot description
Le pattern `PaginatedTable` est utilisé pour afficher une `VDataTable` avec une pagination persistante.
:::

## Utilisation

<DocInfo>

Vous pouvez modifier la pagination ou le tri puis recharger la page et constater que ceux-ci sont sauvegardés.

</DocInfo>

<DocExample
  eager
  file="composants/paginated-table/examples/paginated-table"
/>

## API

<DocInfo>

Le pattern `PaginatedTable` est un « wrapper », il étend l'API de la [VDataTable](https://vuetifyjs.com/fr-FR/components/data-tables/), vous pouvez donc utiliser les mêmes options et slots que sur celle-ci.

</DocInfo>

<DocApi
  :value="['PaginatedTable']"
  :api="{
    PaginatedTable: {
      props: [
        {
          name: 'options',
          type: 'DataOptions',
          required: true,
          description: 'Les `options` de la `VDataTable`, à utiliser avec le modificateur `.sync`.'
        },
        {
          name: 'suffix',
          type: 'string',
          default: '\'\'',
          description: 'Suffixe à ajouter à l\'objet stocké dans le `localStorage` (permet de dissocier chaque `VDataTable`).'
        }
      ]
    }
  }"
/>

## Exemples

### Pagination et tri côté serveur

Vous pouvez sauvegarder la pagination et le tri même ci ceux-si sont gérés côté serveur.

<DocInfo>

La propriété `suffix` est utilisée pour dissocier les différentes tables afin de sauvegarder leurs `options` indépendamment.

</DocInfo>

<DocExample file="composants/paginated-table/examples/paginated-table-api" />
