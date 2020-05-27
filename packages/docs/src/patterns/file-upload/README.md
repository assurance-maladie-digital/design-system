::: slot title
# FileUpload
:::

::: slot description
Le pattern `FileUpload` est un composant qui améliore l'élément d'entrée de fichier HTML par défaut.
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
          description: 'Permet de charger plusieurs fichiers.'
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
          description: 'Désactive l\'ondulation quand on click dessus.'
        },
        {
          name: 'disabled',
          defaultValue: 'false',
          type: 'boolean',
          description: 'Désactive le composant.'
        },
        {
          name: 'file-size-max',
          defaultValue: '4MB',
          type: 'number',
          description: 'Taille maximale en octets par fichier.'
        },
        {
          name: 'file-size-units',
          defaultValue: '[\'o\',\'Ko\',\'Mo\',\'Go\',\'To\']',
          type: 'string[]',
          description: 'Les unités de taille utilisées dans le modèle pour la traduction.'
        },
        {
          name: 'allowed-extensions',
          defaultValue: '[\'pdf\',\'jpg\',\'jpeg\',\'png\']',
          type: 'string[]',
          description: 'Les extensions de fichiers autorisées.'
        },
        {
          name: 'accept',
          defaultValue: 'undefined',
          type: 'string',
          description: 'L\'attribut `accept` de input en html. Voir https://developer.mozilla.org/fr/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types. Cette propriété n\'est pas requise, par défaut, elle sera calculée sur la base des extensions autorisées'
        }
      ],
      slots: [
        {
          name: 'placeholder',
          description: 'Slot pour remplacer le contenu visuel par défaut.'
        },
        {
          name: 'icon',
          description: 'Slot pour remplacer l\'icône par défaut.'
        },
        {
          name: 'action-text',
          description: 'Slot pour modifier le texte d\'action.'
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
          description: 'Slot pour remplacer le texte des informations sur les fichiers à choisir.'
        }
      ],
      events: [
        {
          name: 'error',
          description: 'Événement émis lorsque l\'utilisateur clique sur le bouton d\'action.',
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

### Règles de validation sur les tailles et les extensions

<DocExample file="patterns/file-upload/examples/file-upload-rules" />

### Utilisation des slots

<DocExample file="patterns/file-upload/examples/file-upload-slots" />
