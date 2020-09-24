::: slot title
# UploadWorkflow
:::

::: slot description
Le pattern `UploadWorkflow` est utilisé pour permettre à l'utilisateur de sélectionner une liste de fichiers.
:::

## Utilisation

<DocExample
  eager
  file="composants/upload-workflow/examples/upload-workflow"
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
          required: true,
          description: 'La liste des fichiers que l\'utilisateur doit sélectionner.'
        },
        {
          name: 'section-title',
          type: 'string',
          default: '\'Document(s) à nous transmettre.\'',
          description: 'Le titre de la section.'
        },
        {
          name: 'max-width',
          type: 'number | string',
          default: 'undefined',
          description: 'La largeur maximale du composant.'
        },
        {
          name: 'min-width',
          type: 'number | string',
          default: 'undefined',
          description: 'La largeur minimale du composant.'
        },
        {
          name: 'width',
          type: 'number | string',
          default: 'undefined',
          description: 'La largeur du composant.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          default: 'undefined',
          description: 'Personnalisation des composants Vuetify et internes en utilisant la directive `customizable`.',
          options: '{\n	fileUpload: `FileUpload`,\n	dialog: `DialogBox`,\n	form: `VForm`,\n	select: `VSelect`,\n	fileList: `FileList`\n}'
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
          description: 'Événement émis lorsque la liste de fichiers est mise à jour.',
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
          name: 'files',
          type: 'FileItem[]',
          required: true,
          description: 'La liste des fichiers à afficher.'
        },
        {
          name: 'show-view-btn',
          type: 'boolean',
          default: 'false',
          description: 'Affiche le bouton `Afficher le fichier`.'
        },
        {
          name: 'hide-last-divider',
          type: 'boolean',
          default: 'false',
          description: 'Masque la dernière ligne de séparation de la liste.'
        },
        {
          name: 'max-width',
          type: 'number | string',
          default: 'undefined',
          description: 'La largeur maximale du composant.'
        },
        {
          name: 'min-width',
          type: 'number | string',
          default: 'undefined',
          description: 'La largeur minimale du composant.'
        },
        {
          name: 'width',
          type: 'number | string',
          default: 'undefined',
          description: 'La largeur du composant.'
        },
        {
          name: 'vuetify-options',
          type: 'Options',
          default: 'undefined',
          description: 'Personnalisation des composants Vuetify en utilisant la directive `customizable`.',
          options: '{\n	list: `VList`,\n	listItem: `VListItem`,\n	listItemAvatar: `VListItemAvatar`,\n	listItemAvatarIcon: `VIcon`,\n	listItemContent: `VListItemContent`,\n	listItemTitle: `VListItemTitle`,\n	listItemSubtitle: `VListItemSubtitle`,\n	listItemAction: `VListItemAction`,\n	layout: `VLayout`,\n	retryBtn: `VBtn`,\n	viewFileBtn: `VBtn`,\n	deleteFileBtn: `VBtn`,\n	icon: `VIcon`,\n	divider: `VDivider`\n}'
        }
      ],
      events: [
        {
          name: 'retry',
          description: 'Événement émis lorsque l\'utilisateur clique sur le bouton `Réessayer`, retourne l\'id du fichier sélectionné.',
          value: 'string'
        },
        {
          name: 'delete-file',
          description: 'Événement émis lorsque l\'utilisateur clique sur le bouton `Supprimer`, retourne l\'id du fichier sélectionné.',
          value: 'string'
        },
        {
          name: 'view-file',
          description: 'Événement émis lorsque l\'utilisateur clique sur le bouton `Afficher le fichier`, retourne le fichier sélectionné.',
          value: 'File'
        }
      ]
    }
  }"
/>

## Exemples

### Gestion des événements

Vous pouvez réagir lorsque la liste des fichiers est mise à jour grâce à l'évènement `change`, et réagir aux erreurs de validation grâce à l'événement `error`.

<DocExample file="composants/upload-workflow/examples/upload-workflow-events" />

### Un seul fichier

Lorsque que la liste ne contient qu'un seul fichier, la boîte de dialogue demandant à l'utilisateur de choisir quel fichier il a sélectionné ne sera pas affichée.

<DocExample file="composants/upload-workflow/examples/upload-workflow-single-file" />

### Utilisation des slots

Vous pouvez utiliser les slots `title` et `modal-title` pour remplacer le titre de la section et le titre de la modale de sélection du fichier.

<DocExample file="composants/upload-workflow/examples/upload-workflow-slots" />

### Personnalisation des composants

Vous pouvez personnaliser les composants Vuetify contenus dans `CopyBtn` en utilisant la propriété `vuetify-options`.

<DocExample file="composants/upload-workflow/examples/upload-workflow-options" />
