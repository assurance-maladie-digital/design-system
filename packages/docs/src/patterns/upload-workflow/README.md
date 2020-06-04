::: slot title
# UploadWorkflow
:::

::: slot description
Le pattern `UploadWorkflow` est utilisé pour permettre à l'utilisateur d'avoir une liste d'informations concernant des fichiers à transmettre avec leurs état et des actions possible.
:::

## Utilisation

<DocExample
  eager
  file="patterns/upload-workflow/examples/upload-workflow"
/>

## API

<DocApi
  :value="['UploadWorkflow', 'FileList']"
  :api="{
    UploadWorkflow: {
      props: [
        {
          name: 'value',
          type: 'FileListItem[]',
          defaultValue: 'required',
          description: 'La liste des fichiers.'
        },
        {
          name: 'section-title',
          type: 'String',
          defaultValue: '[]',
          description: 'Document(s) à nous transmettre.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          defaultValue: 'undefined',
          description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.'
        }
      ],
      slots: [
        {
          name: 'title',
          description: 'Slot pour remplacer le titre.'
        },
        {
          name: 'modal-title',
          description: 'Slot pour remplacer le titre de la modale.'
        }
      ],
      events: [
        {
          name: 'change',
          description: 'Événement émis lorsque la valeur du composant change.',
          value: 'File | File[]'
        },
        {
          name: 'error',
          description: 'Événement émis lorsque lorsqu\'il y a une erreur de validation.',
          value: '{\n  file: File,\n  code: ErrorCodes\n}'
        }
      ]
    },
    FileList: {
      props: [
        {
          name: 'showViewBtn',
          type: 'boolean',
          defaultValue: 'false',
          description: 'Affiche le bouton `Afficher le fichier`.'
        },
        {
          name: 'files',
          type: 'FileItem[]',
          defaultValue: 'required',
          description: 'La liste des fichiers à afficher.'
        },
        {
          name: 'hideListDivider',
          type: 'boolean',
          defaultValue: 'false',
          description: 'Supprime la ligne de séparation en bas.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          defaultValue: 'undefined',
          description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.'
        }
      ],
      events: [
        {
          name: 'retry',
          description: 'Événement émis lorsque l\'utilisateur clique sur l\'icone `retry`, retourne l\'id de la liste sélectionné.',
          value: 'id: string'
        },
        {
          name: 'view-file',
          description: 'Événement émis lorsque l\'utilisateur clique sur l\'icone `view-file`, retourne le fichier de la liste sélectionné.',
          value: 'file: File'
        },
        {
          name: 'delete-file',
          description: 'Événement émis lorsque l\'utilisateur clique sur l\'icone `delete-file`, retourne l\'id de la liste sélectionné.',
          value: 'id: string'
        }
      ]
    }
  }"
/>

## Playground

<DocExample file="patterns/upload-workflow/examples/upload-workflow-playground" />

## Exemples

### Utilisation des slots

Vous pouvez utiliser les slots `title` et `modal-title` pour remplacer le contenu par défaut du titre et du titre de la modale de sélection du fichier.

<DocExample file="patterns/upload-workflow/examples/upload-workflow-slots" />

### Utilisation des slots

Vous pouvez utiliser les slots `title` et `modal-title` pour remplacer le contenu par défaut du titre et du titre de la modale de sélection du fichier.

<DocExample file="patterns/upload-workflow/examples/upload-workflow-slots" />

### Gestion des évènements

Vous pouvez récupérer la liste des fichiers mise à jour avec l'évènement `change` et l'erreur avec `error`

<DocExample file="patterns/upload-workflow/examples/upload-workflow-events" />

### Personnalisation des composants

Vous pouvez personnaliser les composants contenus dans `UploadWorkflow` et `FileList` en utilisant la propriété `vuetify-options` avec les propriétés suivantes :

- `fileUpload` : `FileUpload`
- `dialog` : `DialogBox`
- `form` : `VForm`
- `select` : `VSelect`
- `fileList` : `FileList`
  - `list` : `VList`
  - `listItem` : `VListItem`
  - `listItemAvatar` : `VListItemAvatar`
  - `listItemAvatarIcon` : `VIcon`
  - `listItemContent` : `VListItemContent`
  - `listItemTitle` : `VListItemTitle`
  - `listItemSubtitle` : `VListItemSubtitle`
  - `listItemAction` : `VListItemAction`
  - `listItemActions` : `VListItemAction`
  - `layout` : `VLayout`
  - `retryBtn` : `VBtn`
  - `viewFileBtn` : `VBtn`
  - `deleteFileBtn` : `VBtn`
  - `actionIcon` : `VIcon`
  - `divider` : `VDivider`

<DocExample file="patterns/upload-workflow/examples/upload-workflow-options" />
