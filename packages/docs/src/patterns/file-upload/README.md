::: slot title
# FileUpload
:::

::: slot description
Le pattern `FileUpload` est utilisé pour permettre à l'utilisateur de sélectionner ou de glisser-déposer des fichiers.
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
          value: 'false',
          type: 'boolean',
          description: 'Permet de sélectionner plusieurs fichiers.'
        },
        {
          name: 'value',
          type: 'File | File[]',
          value: '[]',
          description: 'Le ou les fichiers sélectionnés.'
        },
        {
          name: 'no-ripple',
          value: 'false',
          type: 'boolean',
          description: 'Désactive l\'ondulation.'
        },
        {
          name: 'disabled',
          value: 'false',
          type: 'boolean',
          description: 'Désactive le composant.'
        },
        {
          name: 'file-size-max',
          value: '4194304',
          type: 'number',
          description: 'Taille maximale d\'un fichier en octets (par défaut 4 MB).'
        },
        {
          name: 'file-size-units',
          value: '[\'o\', \'Ko\', \'Mo\', \'Go\', \'To\']',
          type: 'string[]',
          description: 'Les unités de taille utilisées pour la traduction.'
        },
        {
          name: 'allowed-extensions',
          value: '[\'pdf\', \'jpg\', \'jpeg\', \'png\']',
          type: 'string[]',
          description: 'Les extensions autorisées.'
        },
        {
          name: 'accept',
          value: 'undefined',
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
          description: 'Slot pour remplacer le texte `Ou`.'
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
          name: 'change',
          description: 'Événement émis lorsque la valeur du composant change.',
          value: 'File | File[]'
        },
        {
          name: 'error',
          description: 'Événement émis lorsque lorsqu\'il y a une erreur de validation.',
          value: '{\n	file: File,\n	code: ErrorCodes\n}'
        }
      ]
    }
  }"
/>

## Playground

<DocExample file="patterns/file-upload/examples/file-upload-playground" />

## Exemples

### Règles de validation

Vous pouvez modifier taille maximale d'un fichier ainsi que les extensions autorisées avec les attributs `fileSizeMax` et `allowedExtensions`.

<DocInfo>

Vous pouvez spécifier la propriété `accept` pour définir quels types de fichiers l'utilisateur peut sélectionner. Par défaut, celle-ci est calculée automatiquement à partir de la propriété `allowedExtensions`.

</DocInfo>

<DocExample file="patterns/file-upload/examples/file-upload-rules" />

### Utilisation des slots

#### Remplacer le contenu par défaut

Vous pouvez utiliser le slot `placeholder` pour remplacer le contenu par défaut.

<DocExample file="patterns/file-upload/examples/file-upload-slot-placeholder" />

#### Personnalisation par éléments

Vous pouvez utiliser les slots pour remplacer les textes et l'icône par défaut.

<DocExample file="patterns/file-upload/examples/file-upload-slots" />
