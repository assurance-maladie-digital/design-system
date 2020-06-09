::: slot title
# PaginatedTable
:::

::: slot description
Le pattern `PaginatedTable` est utilisé pour afficher un tableau à partir de `VDataTable` mais une pagination dynamique.
:::

## Utilisation

<DocExample
  eager
  file="patterns/paginated-table/examples/paginated-table"
/>

## API

<DocApi
  :value="['PaginatedTable']"
  :api="{
    PaginatedTable: {
      props: [
        {
          name: 'options',
          required: true,
          type: 'DataOptions',
          description: 'prop `options` du composant vuetify `VDataTable`'
        },
        {
          name: 'server-items-length',
          required: true,
          type: 'number',
          description: 'Utilisé uniquement lorsque les données sont fournies par un serveur. Doit être réglé au total des éléments disponibles sur le serveur afin que la pagination fonctionne correctement.'
        },
        {
          name: 'suffix',
          type: 'string',
          value: '\'\'',
          description: 'Le suffixe est utilisé pour stocker différents objets de pagination. Si l\'utilisateur a deux tables mais n\'utilise pas cet attribut, alors les tables partagerons le même objet de pagination'
        }
      ],
      slots: [
        {
          name: '$scopedSlots',
          description: 'L\'utilisation des slots de `VDataTable` est possible.'
        }
      ]
    }
  }"
/>

## Playground

<DocExample file="patterns/paginated-table/examples/paginated-table-playground" />

### Utilisation du slot

Vous pouvez utiliser les slots du composant vuetify `VDataTable`.

<DocExample file="patterns/paginated-table/examples/paginated-table-slots" />
