::: slot title
# FileUpload
:::

::: slot description
Le pattern `FileUpload` est un composant qui permet à l'utilisateur de sélectionner ou de glisser-déposer des fichiers.
:::

## Utilisation

<DocExample
  eager
  file="patterns/file-upload/examples/file-upload"
/>

## API

<DocApi
  :value="['FileUpload']"
  :api="{
    FileUpload: {
      props: [
        {
          name: 'multiple',
          defaultValue: 'false',
          type: 'boolean',
          description: 'Permet de sélectionner plusieurs fichiers.'
        },
        {
          name: 'value',
          type: 'File | File[]',
          defaultValue: '[]',
          description: 'La valeur du ou des fichiers si `multiple`.'
        },
        {
          name: 'no-ripple',
          defaultValue: 'false',
          type: 'boolean',
          description: 'Désactive l\'ondulation.'
        },
        {
          name: 'disabled',
          defaultValue: 'false',
          type: 'boolean',
          description: 'Désactive le composant.'
        },
        {
          name: 'file-size-max',
          defaultValue: '4194304',
          type: 'number',
          description: 'Taille maximale d\'un fichier en octets (par défaut 4 MB).'
        },
        {
          name: 'file-size-units',
          defaultValue: '[\'o\', \'Ko\', \'Mo\', \'Go\', \'To\']',
          type: 'string[]',
          description: 'Les unités de taille utilisées pour la traduction.'
        },
        {
          name: 'allowed-extensions',
          defaultValue: '[\'pdf\', \'jpg\', \'jpeg\', \'png\']',
          type: 'string[]',
          description: 'Les extensions autorisées.'
        },
        {
          name: 'accept',
          defaultValue: 'undefined',
          type: 'string',
          description: 'L\'attribut natif `accept`. Par défaut, la valeur sera calculée à partir des extensions autorisées.'
        }
      ],
      slots: [
        {
          name: 'placeholder',
          description: 'Slot pour remplacer le contenu par défaut.'
        },
        {
          name: 'icon',
          description: 'Slot pour remplacer l\'icône par défaut.'
        },
        {
          name: 'action-text',
          description: 'Slot pour remplacer le texte d\'action.'
        },
        {
          name: 'or',
          description: 'Slot pour remplacer le texte `Ou`'
        },
        {
          name: 'button-text',
          description: 'Slot pour remplacer le label du bouton d\'action.'
        },
        {
          name: 'info-text',
          description: 'Slot pour remplacer les informations sur le fichier à sélectionner.'
        }
      ],
      events: [
        {
          name: 'error',
           description: 'Événement émis lorsque lorsqu\'il y a une erreur de validation.',
          value: '{ file: File, code: ErrorCodes }'
        },
        {
          name: 'change',
          description: 'Événement émis lorsque la valeur du composant change.',
          value: 'value: File | File[]'
        }
      ]
    }
  }"
/>

## Playground

<DocExample file="patterns/file-upload/examples/file-upload-playground" />

## Exemples

### Règles de validation

<DocExample file="patterns/file-upload/examples/file-upload-rules" />

### Utilisation des slots

<DocExample file="patterns/file-upload/examples/file-upload-slots" />
